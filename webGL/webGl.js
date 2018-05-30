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

let gl = canvas.getContext('webgl');


gl.clearColor(0.0,0.0,0.0,1.0);

let vertextshader = `
    attribute vec4 a_Position;
    uniform mat4 u_ModelMatrix;
    void main() {
        gl_Position = u_ModelMatrix * a_Position;
    }
`
const config = {
    angle:80,
    angle_step:45.0,
    current_angle:0,
}
let fragmentshader = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
`;

initShaders(gl,vertextshader,fragmentshader);
// 定义location
let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
let u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
let u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');



if(!u_FragColor){
    throw new Error('!!');
};
let trans = {
    x:0.5,
    y:0.5,
    z:0.0
}


let rad = Math.PI * config.angle / 180.0;
let cos = Math.cos(rad);
let sin = Math.sin(rad);

let xformMatrix = new Matrix4();
// xformMatrix.setRotate(config.angle, 0, 0, 1);
// xformMatrix.translate(0.8,0.1,0);
xformMatrix.setTranslate(0.8,0.1,0);
xformMatrix.rotate(config.angle, 0, 0, 1);



gl.uniform4f(u_FragColor,1.0,0.0,0.0,1.0);
gl.uniformMatrix4fv(u_ModelMatrix,false,xformMatrix.elements);

let arr = [

    -0.5,0.5,
    -0.5,-0.5,
    0.5,0.5,
    0.5,-0.5
]
let vertices = new Float32Array(arr)


let buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);



gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0);

gl.enableVertexAttribArray(a_Position);

gl.drawArrays(gl.TRIANGLE_FAN,0,arr.length / 2);
