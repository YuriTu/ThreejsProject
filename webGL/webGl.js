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
    attribute vec4 a_Color;
    varying vec4 v_Color;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
        v_Color = a_Color;
    }
`

let fragmentshader = `
    varying vec4 v_Color;
    void main() {
        gl_FragColor = v_Color;
    }
`;
let ctx;

class Main {
    constructor(){
        ctx = canvas.getContext('webgl');
        initShaders(ctx,vertextshader,fragmentshader);
        this.initVertexBuffers = () => {
            this.vertex = new Float32Array([
                0.0,0.5,10.0, 1.0, 0.0 , 0.0,
                0.0,0.2,20.0, 0.0, 1.0 , 0.0,
                0.0,-0.2,30.0, 0.0, 0.0 , 1.0,
            ]);
            this.vSize = this.vertex.BYTES_PER_ELEMENT;
            this.times = this.vertex.length / 2;
        };
        this.createBuffer = (data,attrTarget,step) => {
            // 创建
            let buf = ctx.createBuffer();
            ctx.bindBuffer(ctx.ARRAY_BUFFER,buf);
            // 注入数据
            ctx.bufferData(ctx.ARRAY_BUFFER,data,ctx.STATIC_DRAW);
            // 把缓冲区 分配对应的shader变量
            let location = ctx.getAttribLocation(ctx.program, attrTarget);
            // 告诉shader变量 缓冲区数据情况
            // 将绑定到gl.array_buffer 的缓冲区对象分配给由location
            // 指定的shader变量
            ctx.vertexAttribPointer(location,step,ctx.FLOAT,false,this.vSize * 6,0);
            let a_PointSize = ctx.getAttribLocation(ctx.program, 'a_PointSize');
            ctx.vertexAttribPointer(a_PointSize,1,ctx.FLOAT,false,this.vSize * 6,this.vSize * 2);

            // let a_Color = ctx.getAttribLocation(ctx.program, 'a_Color');
            // ctx.vertexAttribPointer(a_Color, 3, ctx.FLOAT, false, this.vSize * 6, this.vSize * 3);

            // 开启数据
            ctx.enableVertexAttribArray(location);
            ctx.enableVertexAttribArray(a_PointSize);
            // ctx.enableVertexAttribArray(a_Color);


        }
    }
    init(){
        this.initVertexBuffers();
        this.createBuffer(this.vertex,'a_Position',2);
        // this.createBuffer(this.size,'a_PointSize',1);
    }
    draw(){
        ctx.clearColor(0.0,0.0,0.0,1.0);
        ctx.clear(ctx.COLOR_BUFFER_BIT);
        ctx.drawArrays(ctx.POINTS,0, 3);
    }
}

let main = new Main();

main.init();
main.draw();


