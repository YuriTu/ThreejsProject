// import './lib/webgl-debug'
// import './lib/webgl-utils'
import {getWebGLContext,
    loadShader,
    createProgram,
    initShaders} from './lib/cuon-utils';
import {Matrix4, Vector3, Vector4} from "./lib/cuon-matrix";

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const HALF_WIDTH = SCREEN_WIDTH / 2;
const HALF_HEIGHT = SCREEN_HEIGHT / 2;


let canvas = document.querySelector('canvas');
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

let vertextshader = `
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    attribute vec4 a_Normal;
    
    uniform mat4 u_NormalMatrix;
    uniform mat4 u_ModelMatrix;
    uniform mat4 u_MvpMatrix;
    

    
    varying vec4 v_Color;
    varying vec3 v_Normal;
    varying vec3 v_Position;
    void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_Position = vec3(u_ModelMatrix * a_Position);
        v_Normal = normalize(vec3 (u_NormalMatrix * a_Normal));
        v_Color = a_Color;
    }
`

let fragmentshader = `
    precision mediump float;
    
    varying vec4 v_Color;
    varying vec3 v_Normal;
    varying vec3 v_Position;
    
    
    uniform vec3 u_LightColor;
    uniform vec3 u_LightPosition;
    uniform vec3 u_AmbientLight;
    
    void main() {
        vec3 normal = normalize(v_Normal);
        vec3 lightDirection = normalize(u_LightPosition - v_Position);
        float nDotL = max ( dot (lightDirection, normal), 0.0);
        vec3 diffuse = u_LightColor * v_Color.rgb * nDotL;
        vec3 ambient = u_AmbientLight * v_Color.rgb;
        gl_FragColor = vec4(diffuse + ambient, v_Color.a);
    }
`;
let gl;

class Main {
    constructor(){
        gl = canvas.getContext('webgl');
        initShaders(gl,vertextshader,fragmentshader);


        this.initVertexBuffers = () => {
            this.vertices = new Float32Array([
                1.0, 1.0, 1.0,  -1.0, 1.0, 1.0,  -1.0,-1.0, 1.0,   1.0,-1.0, 1.0,  // v0-v1-v2-v3 front
                1.0, 1.0, 1.0,   1.0,-1.0, 1.0,   1.0,-1.0,-1.0,   1.0, 1.0,-1.0,  // v0-v3-v4-v5 right
                1.0, 1.0, 1.0,   1.0, 1.0,-1.0,  -1.0, 1.0,-1.0,  -1.0, 1.0, 1.0,  // v0-v5-v6-v1 up
                -1.0, 1.0, 1.0,  -1.0, 1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0,-1.0, 1.0,  // v1-v6-v7-v2 left
                -1.0,-1.0,-1.0,   1.0,-1.0,-1.0,   1.0,-1.0, 1.0,  -1.0,-1.0, 1.0,  // v7-v4-v3-v2 down
                1.0,-1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0, 1.0,-1.0,   1.0, 1.0,-1.0   // v4-v7-v6-v5 back
            ]);
            this.colors = new Float32Array([
                1, 0, 0,   1, 0, 0,   1, 0, 0,  1, 0, 0,     // v0-v1-v2-v3 front
                1, 0, 0,   1, 0, 0,   1, 0, 0,  1, 0, 0,     // v0-v3-v4-v5 right
                1, 0, 0,   1, 0, 0,   1, 0, 0,  1, 0, 0,     // v0-v5-v6-v1 up
                1, 0, 0,   1, 0, 0,   1, 0, 0,  1, 0, 0,     // v1-v6-v7-v2 left
                1, 0, 0,   1, 0, 0,   1, 0, 0,  1, 0, 0,     // v7-v4-v3-v2 down
                1, 0, 0,   1, 0, 0,   1, 0, 0,  1, 0, 0　    // v4-v7-v6-v5 back
            ])
            this.indices = new Uint8Array([
                0, 1, 2,   0, 2, 3,    // front
                4, 5, 6,   4, 6, 7,    // right
                8, 9,10,   8,10,11,    // up
                12,13,14,  12,14,15,    // left
                16,17,18,  16,18,19,    // down
                20,21,22,  20,22,23     // back
            ]);
            this.normals = new Float32Array([
                0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,  // v0-v1-v2-v3 front
                1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,  // v0-v3-v4-v5 right
                0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,  // v0-v5-v6-v1 up
                -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  // v1-v6-v7-v2 left
                0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,  // v7-v4-v3-v2 down
                0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0   // v4-v7-v6-v5 back
            ])
            this.n = this.indices.length;
            this.vSize = this.vertices.BYTES_PER_ELEMENT;
        };
        this.initArrayBuffer = (data, num, type, attribute) => {
            let buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

            let a_attribute = gl.getAttribLocation(gl.program, attribute);
            // 通知shader，数据该如何处理
            gl.vertexAttribPointer(a_attribute, num,type,false,0,0);

            gl.enableVertexAttribArray(a_attribute);
        };
        this.createBuffer = () => {

            this.initArrayBuffer(this.vertices, 3, gl.FLOAT, 'a_Position');
            this.initArrayBuffer(this.colors, 3, gl.FLOAT, 'a_Color');
            this.initArrayBuffer(this.normals, 3, gl.FLOAT, 'a_Normal');
            //
            let u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
            let u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
            let u_LightColor = gl.getUniformLocation(gl.program, 'u_LightColor');
            let u_LightPosition = gl.getUniformLocation(gl.program, 'u_LightPosition');
            let u_AmbientLight = gl.getUniformLocation(gl.program, 'u_AmbientLight');
            let u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');

            let mvpMatrix = new Matrix4();
            mvpMatrix.setPerspective(30, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100);
            mvpMatrix.lookAt(6,6,14, 0,0,0, 0,1,0);
            gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

            let modelMatrix = new Matrix4();
            let normalMatrix = new Matrix4();

            modelMatrix.setRotate( 90, 0 , 1, 0);
            gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);

            mvpMatrix.multiply(modelMatrix);

            normalMatrix.setInverseOf(modelMatrix);
            normalMatrix.transpose();
            gl.uniformMatrix4fv(u_NormalMatrix, false, normalMatrix.elements);

            // set light color
            gl.uniform3f(u_LightColor, 1.0, 1.0, 1.0);
            // light direction
            gl.uniform3f(u_LightPosition, 2.3,4.0,3.5);
            // let lightPosition = new Vector3([0.0, 3.0, 4.0]);
            // lightPosition.normalize();
            // gl.uniform3fv(u_LightPosition, lightPosition.elements);

            // set ambient light
            gl.uniform3f(u_AmbientLight, 0.2,0.2,0.2);



            // 开始处理链接方式坐标map
            let indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,this.indices, gl.STATIC_DRAW);
        }
    }
    initRender(){
        gl.clearColor(0.0,0.0,0.0,1.0);
    }
    init(){
        this.initVertexBuffers();
        this.createBuffer();
        this.initRender();
    }

    draw(){

        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.enable(gl.DEPTH_TEST);
        // gl.enable(gl.POLYGON_OFFSET_UNITS);

        // gl.polygonOffset(1.0, 1.0);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // gl.drawArrays(gl.TRIANGLES,0, this.n);
        gl.drawElements(gl.TRIANGLES, this.n , gl.UNSIGNED_BYTE, 0);
    }
}

let main = new Main();

main.init();
main.draw();


