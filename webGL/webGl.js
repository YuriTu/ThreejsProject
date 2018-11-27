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
    
    varying vec4 v_Color;
    void main() {
        gl_Position = a_Position;
    }
`

let fragmentshader = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    varying vec4 v_Color;
    void main() {
        gl_FragColor = v_Color;
    }
`;

let gl;
let time = 1.0;
class Main {
    constructor(){
        gl = canvas.getContext('webgl');
        initShaders(gl,vertextshader,fragmentshader);


        this.initVertexBuffers = () => {
            // create two cube
            // width 3.0 height 10 length 3
            this.vertices = new Float32Array([
                1.5, 10.0, 1.5, -1.5, 10.0, 1.5, -1.5,  0.0, 1.5,  1.5,  0.0, 1.5, // v0-v1-v2-v3 front
                1.5, 10.0, 1.5,  1.5,  0.0, 1.5,  1.5,  0.0,-1.5,  1.5, 10.0,-1.5, // v0-v3-v4-v5 right
                1.5, 10.0, 1.5,  1.5, 10.0,-1.5, -1.5, 10.0,-1.5, -1.5, 10.0, 1.5, // v0-v5-v6-v1 up
               -1.5, 10.0, 1.5, -1.5, 10.0,-1.5, -1.5,  0.0,-1.5, -1.5,  0.0, 1.5, // v1-v6-v7-v2 left
               -1.5,  0.0,-1.5,  1.5,  0.0,-1.5,  1.5,  0.0, 1.5, -1.5,  0.0, 1.5, // v7-v4-v3-v2 down
                1.5,  0.0,-1.5, -1.5,  0.0,-1.5, -1.5, 10.0,-1.5,  1.5, 10.0,-1.5  // v4-v7-v6-v5 back
            ])
            // 由于在模型建立的时候，各个点是不共享的，所以某个点的法向量其实是由这个点所属与的面决定的，
            // 毕竟一个点不可能有法向量
            this.normals = new Float32Array([
                0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0, // v0-v1-v2-v3 front
                1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0, // v0-v3-v4-v5 right
                0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0, // v0-v5-v6-v1 up
               -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, // v1-v6-v7-v2 left
                0.0,-1.0, 0.0,  0.0,-1.0, 0.0,  0.0,-1.0, 0.0,  0.0,-1.0, 0.0, // v7-v4-v3-v2 down
                0.0, 0.0,-1.0,  0.0, 0.0,-1.0,  0.0, 0.0,-1.0,  0.0, 0.0,-1.0  // v4-v7-v6-v5 back
            ])
            // 索引 由于根据三角构成，需要知名索引方式

        };
        // 批量构建缓冲区
        this.initArrayBuffer = (data, num, type, attribute) => {
            // 创建缓冲区
            let buffer = gl.createBuffer();
            // 确定缓冲区变量类型
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            // 向target注入数据
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
            // 链接着色器中的变量 获得着色器中的变量指针
            let a_attribute = gl.getAttribLocation(gl.program, attribute);
            // 通知shader，数据该如何处理
            gl.vertexAttribPointer(a_attribute, num,type,false,0,0);
            // 开启缓冲区
            gl.enableVertexAttribArray(a_attribute);
        };

        this.createBuffer = () => {
            this.initArrayBuffer(this.vertices,3,gl.FLOAT,'a_Position');

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
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // gl.drawArrays(gl.TRIANGLES,0, this.n);
        gl.drawElements(gl.TRIANGLES, this.n , gl.UNSIGNED_BYTE, 0);

        requestAnimationFrame(this.draw.bind(this));
    }
}

let main = new Main();

main.init();
main.draw();




