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
    attribute float a_PointSize;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
    }
`
let fragmentshader = `
    precision mediump float;
    uniform vec4 u_FragColor;
    
    void main() {
        gl_FragColor = u_FragColor;
    }
`;

initShaders(gl,vertextshader,fragmentshader);

let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
let a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
let u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');

if(!u_FragColor){
    throw new Error('!!');
}


const gl_points = [];
const gl_points_color = [];
const pointClick = (event) => {
    let x = (event.clientX - HALF_WIDTH) / HALF_WIDTH;
    let y = -(event.clientY - HALF_HEIGHT) / HALF_HEIGHT;
    gl_points.push({
        x,
        y
    });
    let color = {
        r:Math.random(),
        g:Math.random(),
        b:Math.random(),

    }
    gl_points_color.push(color)

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl_points.forEach(i => {
        gl.vertexAttrib3f(a_Position,i.x,i.y,0.0);
        // gl.vertexAttrib3f(a_Position,x,y,0.0);
        gl.vertexAttrib1f(a_PointSize,20.0);
        gl.uniform4f(u_FragColor,color.r,color.g,color.b,1.0);

        gl.drawArrays(gl.POINTS,0,1);
        console.log(x,y)
    })

}

const handleEvent = () => {
    canvas.addEventListener('mousedown',(e) => {
        pointClick(e);
    })
}

handleEvent();
gl.clear(gl.COLOR_BUFFER_BIT);














