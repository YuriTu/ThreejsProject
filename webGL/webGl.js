// import './lib/webgl-debug'
// import './lib/webgl-utils'
import {getWebGLContext,
    loadShader,
    createProgram,
    initShaders} from './lib/cuon-utils'

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
    uniform float u_CosB, u_SinB;
    void main() {
        gl_Position.x = a_Position.x * u_CosB - a_Position.y * u_SinB;
        gl_Position.y = a_Position.x * u_SinB + a_Position.y * u_CosB;
        gl_Position.z = a_Position.z;
        gl_Position.w = 1.0; 
    }
`
const config = {
    angle:45.0,
}
let fragmentshader = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
`;

initShaders(gl,vertextshader,fragmentshader);
// 把数据传给shader
let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
// let u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
// let a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
let u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');

let u_CosB = gl.getUniformLocation(gl.program, 'u_CosB');
let u_SinB = gl.getUniformLocation(gl.program, 'u_SinB');

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



gl.uniform1f(u_SinB,sin);
gl.uniform1f(u_CosB,cos);



gl.uniform4f(u_FragColor,1.0,0.0,0.0,1.0);
// gl.uniform4f(u_Translation,trans.x,trans.y,trans.z,0.0);
// gl.vertexAttrib1f(a_PointSize,10.0);

// gl.vertexAttrib3f(a_Position,0.5,0.0,0.0);
// gl.clear(gl.COLOR_BUFFER_BIT);
// gl.drawArrays(gl.POINTS,0,1);

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


