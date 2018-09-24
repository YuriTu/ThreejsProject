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
    //uniform mat4 u_ModelViewMatrix;
    uniform mat4 u_ProjMatrix;
    attribute vec4 a_Color;
    varying vec4 v_Color;
    void main() {
        //gl_Position = u_ModelViewMatrix * a_Position;
        gl_Position = u_ProjMatrix * a_Position;    
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
let ctx;

class Main {
    constructor(){
        this.g_near = 0.0;
        this.g_far = 0.5;
        ctx = canvas.getContext('webgl');
        initShaders(ctx,vertextshader,fragmentshader);

        this.initHandel = () => {
            document.addEventListener('keydown', (evt) => {
                switch (evt.keyCode) {
                    case 38:
                        this.g_far += 0.01;
                        break;
                    case 40:
                        this.g_far -=0.01;
                        break;
                    case 39:
                        this.g_near += 0.01;
                        break;
                    case 37:
                        this.g_near -= 0.01;
                        break;
                    default:
                        return;
                }
                this.draw();
            }
            )
        }

        this.initDOM = () => {
            this.text = document.querySelector('#far')
        }

        this.initVertexBuffers = () => {
            this.vertex = new Float32Array([
                0.0,  0.6,  -0.4,  0.4,  1.0,  0.4, // The back green one
                -0.5, -0.4,  -0.4,  0.4,  1.0,  0.4,
                0.5, -0.4,  -0.4,  1.0,  0.4,  0.4,

                0.5,  0.4,  -0.2,  1.0,  0.4,  0.4, // The middle yellow one
                -0.5,  0.4,  -0.2,  1.0,  1.0,  0.4,
                0.0, -0.6,  -0.2,  1.0,  1.0,  0.4,

                0.0,  0.5,   0.0,  0.4,  0.4,  1.0, // The front blue one
                -0.5, -0.5,   0.0,  0.4,  0.4,  1.0,
                0.5, -0.5,   0.0,  1.0,  0.4,  0.4,
            ]);
            this.n = 9;
            this.vSize = this.vertex.BYTES_PER_ELEMENT;
        };
        this.createBuffer = (data,attrTarget) => {
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
            ctx.vertexAttribPointer(location,3,ctx.FLOAT,false,this.vSize * 6,0);

            let a_Color = ctx.getAttribLocation(ctx.program, 'a_Color');
            ctx.vertexAttribPointer(a_Color, 3, ctx.FLOAT, false, this.vSize * 6, this.vSize * 3);

            this.u_projMatrix = ctx.getUniformLocation(ctx.program, 'u_ProjMatrix');
            this.projMatrix = new Matrix4();

            ctx.uniformMatrix4fv(this.u_projMatrix, false, this.projMatrix.elements);

            // 开启数据
            ctx.enableVertexAttribArray(location);
            // ctx.enableVertexAttribArray(a_PointSize);
            ctx.enableVertexAttribArray(a_Color);


        }
    }
    initRender(){
        ctx.clearColor(0.0,0.0,0.0,1.0);
    }
    init(){
        this.initVertexBuffers();
        this.createBuffer(this.vertex,'a_Position',2);
        this.initHandel();
        this.initDOM();
        this.initRender();
    }

    draw(){
        this.projMatrix.setOrtho(-1.0,1.0,-1.0,1.0,this.g_near,this.g_far);


        ctx.uniformMatrix4fv(this.u_projMatrix, false, this.projMatrix.elements);

        ctx.clear(ctx.COLOR_BUFFER_BIT);

        this.text.innerHTML = `near: ${Math.round(this.g_near * 100) / 100} ,far: ${Math.round(this.g_far * 100) / 100}`;

        ctx.drawArrays(ctx.TRIANGLES,0, this.n);
    }
}

let main = new Main();

main.init();
main.draw();


