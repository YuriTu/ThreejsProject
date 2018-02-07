// import './lib/webgl-debug'
// import './lib/webgl-utils'
import {getWebGLContext,
    loadShader,
    createProgram,
    initShaders} from './lib/cuon-utils'


let canvas = document.querySelector('canvas');

let gl = canvas.getContext('webgl');

gl.clearColor(0.0,0.0,0.0,1.0);

gl.clear(gl.COLOR_BUFFER_BIT)

let vertextshader = `
    void main() {
        gl_Position = vec4(0.0,0.0,0.0,1.0);
        gl_PointSize = 10.0;
    }
`
let fragmentshader = `
    void main() {
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }
`;

initShaders(gl,vertextshader,fragmentshader);

gl.drawArrays(gl.POINTS,0,2);






