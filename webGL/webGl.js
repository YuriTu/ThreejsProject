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
    void main() {
        gl_Position = a_Position;
    }
`
// let vertextshader = `
//     attribute vec4 a_Position;
//     attribute float a_PointSize;
//     void main() {
//         gl_Position = a_Position;
//         gl_PointSize = a_PointSize;
//     }
// `
let fragmentshader = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
`;

initShaders(gl,vertextshader,fragmentshader);

let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
// let a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
let u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');

if(!u_FragColor){
    throw new Error('!!');
};

gl.uniform4f(u_FragColor,1.0,0.0,0.0,1.0);
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
















