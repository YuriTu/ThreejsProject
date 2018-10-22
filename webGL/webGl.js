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
    uniform mat4 u_MvpMatrix;
    void main() {
        gl_Position = u_MvpMatrix * a_Position;
    }
`

let fragmentshader = `
    precision mediump float;
    
    uniform float u_Width;
    uniform float u_Height;
    
    uniform float u_isTime;
    
    
    void main() {
        vec3 iResolution = vec3(u_Width, u_Height, 1.0);
        vec2 fragCoord = vec2(gl_FragCoord.x , gl_FragCoord.y);
        
        vec2 uv = fragCoord / iResolution.xy;
        
        
        vec3 col = 0.5 + 0.5*cos(u_isTime+uv.xyx+vec3(0,2,4));
        
        gl_FragColor = vec4(col, 1.0);
    }
`;

// let fragmentshader = `
//     precision mediump float;
//
//     uniform float u_Width;
//     uniform float u_Height;
//
//     uniform float u_isTime;
//
//
//     void main() {
//         vec3 iResolution = vec3(u_Width, u_Height, 1.0);
//         vec2 fragCoord = vec2(gl_FragCoord.x , gl_FragCoord.y);
//
//         vec2  r = iResolution.xy, p = fragCoord - r*.5;
//         float d = length(p) / r.y, c=1., x = pow(d, .1), y = atan(p.x, p.y) / 6.28;
//
//         for (float i = 0.; i < 3.; ++i)
// c = min(c, length(fract(vec2(x - 2.0*i*.005, fract(y + i*.125)*.5)*20.)*2.-1.));
//
//         gl_FragColor = vec4(d+20.*c*d*d*(.6-d));
//     }
// `;
let gl;
let time = 1.0;
class Main {
    constructor(){
        gl = canvas.getContext('webgl');
        initShaders(gl,vertextshader,fragmentshader);


        this.initVertexBuffers = () => {
            this.vertices = new Float32Array([
                3.0, 3.0, 0.0,  -3.0, 3.0, 0.0,  -3.0,-3.0, 0.0,   3.0,-3.0, 0.0,  // v0-v1-v2-v3 front
            ]);
            this.colors = new Float32Array([
                1, 0, 0,   1, 0, 0,   1, 0, 0,  1, 0, 0,     // v0-v1-v2-v3 front
            ])
            this.indices = new Uint8Array([
                0, 1, 2,   0, 2, 3,    // front
            ]);
            this.normals = new Float32Array([
                0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,  // v0-v1-v2-v3 front
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
            //
            let u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
            let u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
            let u_LightColor = gl.getUniformLocation(gl.program, 'u_LightColor');
            let u_LightPosition = gl.getUniformLocation(gl.program, 'u_LightPosition');
            let u_AmbientLight = gl.getUniformLocation(gl.program, 'u_AmbientLight');
            let u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
            let u_Width = gl.getUniformLocation(gl.program, 'u_Width');
            let u_Height = gl.getUniformLocation(gl.program, 'u_Height');
            let u_isTime = gl.getUniformLocation(gl.program, 'u_isTime');
            this.u_isTime = u_isTime;
            let mvpMatrix = new Matrix4();
            mvpMatrix.setPerspective(30, 1, 1, 100);
            mvpMatrix.lookAt(0,0,14, 0,0,0, 0,1,0);
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

            gl.uniform1f(u_Width, gl.drawingBufferWidth);
            gl.uniform1f(u_Height, gl.drawingBufferHeight);
            gl.uniform1f(u_isTime, time);



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

        time += 0.025;
        gl.uniform1f(this.u_isTime,time);
        // gl.enable(gl.POLYGON_OFFSET_UNITS);

        // gl.polygonOffset(1.0, 1.0);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // gl.drawArrays(gl.TRIANGLES,0, this.n);
        gl.drawElements(gl.TRIANGLES, this.n , gl.UNSIGNED_BYTE, 0);

        requestAnimationFrame(this.draw.bind(this));
    }
}

let main = new Main();

main.init();
main.draw();




