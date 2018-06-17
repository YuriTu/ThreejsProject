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
    attribute float a_PointSize;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
    }
`

let fragmentshader = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;
let ctx;

class Main {
    constructor(){
        ctx = canvas.getContext('webgl');
        initShaders(ctx,vertextshader,fragmentshader);
        this.initVertexBuffers = () => {
            this.vertex = new Float32Array([
                0.0,0.5,
                0.0,0.2,
                0.0,-0.2,
            ]);
            this.times = this.vertex.length / 2;
            this.size = new Float32Array([
                10.0, 20.0 ,30.0
            ]);
        };
        this.createBuffer = (data,attrTarget,step) => {
            let buf = ctx.createBuffer();
            ctx.bindBuffer(ctx.ARRAY_BUFFER,buf);
            ctx.bufferData(ctx.ARRAY_BUFFER,data,ctx.STATIC_DRAW);
            let location = ctx.getAttribLocation(ctx.program, attrTarget);
            ctx.vertexAttribPointer(location,step,ctx.FLOAT,false,0,0);
            ctx.enableVertexAttribArray(location);
        }
    }
    init(){
        this.initVertexBuffers();
        this.createBuffer(this.vertex,'a_Position',2);
        this.createBuffer(this.size,'a_PointSize',1);
    }
    draw(){
        ctx.clearColor(0.0,0.0,0.0,1.0);
        ctx.clear(ctx.COLOR_BUFFER_BIT);
        ctx.drawArrays(ctx.POINTS,1, 1);
    }
}

let main = new Main();

main.init();
main.draw();


