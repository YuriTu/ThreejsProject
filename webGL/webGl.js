// import './lib/webgl-debug'
// import './lib/webgl-utils'
import {getWebGLContext,
    loadShader,
    createProgram,
    initShaders} from './lib/cuon-utils';
import {Matrix4} from "./lib/cuon-matrix";

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
    attribute vec4 a_Color;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_MvpMatrix  * a_Position;    
        v_Color = a_Color;
    }
`

let fragmentshader = `
    precision mediump float;
    varying vec4 v_Color;
    void main() {
        gl_FragColor = v_Color;
    }
`;
let gl;

class Main {
    constructor(){
        gl = canvas.getContext('webgl');
        initShaders(gl,vertextshader,fragmentshader);

        this.initDOM = () => {
            this.text = document.querySelector('#far')
        }

        this.initVertexBuffers = () => {
            this.verticesColors = new Float32Array([
                // Vertex coordinates and color
                1.0,  1.0,  1.0,     1.0,  1.0,  1.0,  // v0 White
                -1.0,  1.0,  1.0,     1.0,  0.0,  1.0,  // v1 Magenta
                -1.0, -1.0,  1.0,     1.0,  0.0,  0.0,  // v2 Red
                1.0, -1.0,  1.0,     1.0,  1.0,  0.0,  // v3 Yellow
                1.0, -1.0, -1.0,     0.0,  1.0,  0.0,  // v4 Green
                1.0,  1.0, -1.0,     0.0,  1.0,  1.0,  // v5 Cyan
                -1.0,  1.0, -1.0,     0.0,  0.0,  1.0,  // v6 Blue
                -1.0, -1.0, -1.0,     0.0,  0.0,  0.0   // v7 Black
            ]);
            this.indices = new Uint8Array([
                0, 1, 2,   0, 2, 3,    // front
                0, 3, 4,   0, 4, 5,    // right
                0, 5, 6,   0, 6, 1,    // up
                1, 6, 7,   1, 7, 2,    // left
                7, 4, 3,   7, 3, 2,    // down
                4, 7, 6,   4, 6, 5     // back
            ]);
            this.n = this.indices.length;
            this.vSize = this.verticesColors.BYTES_PER_ELEMENT;
        };
        this.createBuffer = () => {
            // 创建
            let vertexColorBuffer  = gl.createBuffer();
            let indexBuffer = gl.createBuffer();
            // 注入数据
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER,this.verticesColors,gl.STATIC_DRAW);
            // 把缓冲区 分配对应的shader变量
            let location = gl.getAttribLocation(gl.program, 'a_Position');
            // 告诉shader变量 缓冲区数据情况
            // 将绑定到gl.array_buffer 的缓冲区对象分配给由location
            // 指定的shader变量
            gl.vertexAttribPointer(location,3,gl.FLOAT,false,this.vSize * 6,0);

            let a_Color = gl.getAttribLocation(gl.program, 'a_Color');
            gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, this.vSize * 6, this.vSize * 3);

            this.u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
            this.mvpMatrix = new Matrix4();

            this.mvpMatrix.setPerspective(30,SCREEN_WIDTH/SCREEN_HEIGHT,1,100);
            this.mvpMatrix.lookAt(3,3,7,0,0,0,0,1,0);


            gl.uniformMatrix4fv(this.u_MvpMatrix, false, this.mvpMatrix.elements);

            // 开启数据
            gl.enableVertexAttribArray(location);
            gl.enableVertexAttribArray(a_Color);

            // 开始处理链接方式坐标map
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
        this.initDOM();
        this.initRender();
    }

    draw(){

        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.POLYGON_OFFSET_UNITS);

        gl.polygonOffset(1.0, 1.0);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // gl.drawArrays(gl.TRIANGLES,0, this.n);
        gl.drawElements(gl.TRIANGLES, this.n , gl.UNSIGNED_BYTE, 0);
    }
}

let main = new Main();

main.init();
main.draw();


