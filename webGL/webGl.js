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
const ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;


let canvas = document.querySelector('canvas');
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

let vertextshader = `
    attribute vec4 a_Position;
    attribute vec4 a_Normal;
    
    uniform mat4 u_MvpMatrix;
    uniform mat4 u_NormalMatrix;
    
    varying vec4 v_Color;
    void main() {
        gl_Position = u_MvpMatrix * a_Position;
        vec4 color = vec4(1.0,0.4,0.0,1.0);
        vec3 lightDirection = normalize(vec3(0.0,0.5,0.7));
        vec3 normal = normalize( (a_Normal * u_NormalMatrix).xyz );
        float nDotL = max( dot(normal,lightDirection) ,0.0);
        v_Color = vec4(color.rgb * nDotL + vec3(0.1),color.a);
        
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
let time = 1.0;
class Main {
    constructor(){
        gl = canvas.getContext('webgl');
        initShaders(gl,vertextshader,fragmentshader);
        this.armBoAngle = -90.0;
        this.armTopAngle = 0.0;
        this.handAngle = -90.0;
        this.fin1Angle = 0.0;
        this.fin2Angle = 0.0;
        this.angleStep = 3.0;

        this.config = {
            base : {
                x:0.0,
                y:-10.0,
                z:0.0
            },
            armB:{
                tran:{
                    x:0.0,
                    y:-15.0,
                    z:0.0
                }
            },
            armTop:{
                // tran:{
                //     x:
                // },
                // ro:{
                //     x:t
                // }

            }


        }


        this.handleEvent = () => {
            document.addEventListener('keydown',(e) => {
                console.log(e.keyCode);
                switch (e.keyCode) {
                    case 39:
                        this.armBoAngle += this.angleStep;
                        break;
                    case 37:
                        this.armBoAngle -= this.angleStep;
                        break;
                    case 38:
                        this.armTopAngle += this.angleStep
                        break;
                    case 40:
                        this.armTopAngle -= this.angleStep;
                        break;
                    case 90:
                        this.handAngle += this.angleStep;
                        break;
                    case 88:
                        this.handAngle -= this.angleStep;
                        break;
                    case 67:
                        this.fin1Angle += this.angleStep;
                        this.fin2Angle += this.angleStep;
                        break;
                    case 86:
                        this.fin1Angle += this.angleStep;
                        this.fin2Angle -= this.angleStep;
                        break;
                }
            })
        }


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
            this.indices = new Uint8Array([
                0, 1, 2,   0, 2, 3,    // front
                4, 5, 6,   4, 6, 7,    // right
                8, 9,10,   8,10,11,    // up
                12,13,14,  12,14,15,    // left
                16,17,18,  16,18,19,    // down
                20,21,22,  20,22,23     // back
            ])

            this.n = this.indices.length;

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
            // 创建vertex buffer
            this.initArrayBuffer(this.vertices,3,gl.FLOAT,'a_Position');
            this.initArrayBuffer(this.normals,3,gl.FLOAT,'a_Normal');
            // 创建给element 用的索引数据
            // 释放array buffer target中的数据
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            let indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,this.indices,gl.STATIC_DRAW);

            // 确定mvpmatrix
            this.mvpMatrix = new Matrix4();

            this.moduleMatrix = new Matrix4();
            this.moduleMatrix.setTranslate(0.0, -12.0, 0.0);
            this.moduleMatrix.rotate(this.arm1Angle, 0.0, 1.0, 0.0);

            this.viewMatrix = new Matrix4();
            this.viewMatrix.setPerspective(50.0, ASPECT,1.0, 100.0);

            this.perspectiveMatrix = new Matrix4();
            this.perspectiveMatrix.setLookAt(20.10,0.0,30.0,0.0,0.0,0.0,0.0,1.0,0.0);


            // ensure normal tranpose matrix
            this.normalMatrix = new Matrix4();

            this.u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
            this.u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');

        }
        this.drawBox = () => {
            this.mvpMatrix.set(this.viewMatrix);
            // this.mvpMatrix.multiply(this.moduleMatrix);
            this.mvpMatrix.multiply(this.perspectiveMatrix);
            this.mvpMatrix.multiply(this.moduleMatrix);
            gl.uniformMatrix4fv(this.u_MvpMatrix, false, this.mvpMatrix.elements);

            this.normalMatrix.setInverseOf(this.moduleMatrix);
            this.normalMatrix.transpose();

            gl.uniformMatrix4fv(this.u_NormalMatrix, false, this.normalMatrix.elements);

            gl.drawElements(gl.TRIANGLES,this.n, gl.UNSIGNED_BYTE,0);
        }
    }
    initRender(){
        gl.clearColor(0.0,0.0,0.0,1.0);
    }
    init(){
        this.handleEvent();
        this.initVertexBuffers();
        this.createBuffer();
        this.initRender();
    }

    draw(){
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // gl.clear(0.0,0.0,0.0,1.0);
        // 先来个底座
        this.moduleMatrix.setTranslate(this.config.base.x, this.config.base.y,this.config.base.z);
        this.moduleMatrix.scale(5,0.2,5);
        this.drawBox();



        // 下手
        this.moduleMatrix.setTranslate(this.config.armB.tran.x,this.config.armB.tran.y,this.config.armB.tran.z);
        this.moduleMatrix.rotate(this.armBoAngle,0.0,1.0,0.0)
        this.drawBox();

        // 上手
        this.moduleMatrix.translate(0.0,10.0,0.0);
        this.moduleMatrix.rotate(this.armTopAngle,0.0,0.0,1.0);
        this.moduleMatrix.scale(1.3,1.0,1.3);
        this.drawBox();

        // 手腕
        // this.moduleMatrix.translate(0.0,10.0,0.0);
        // this.moduleMatrix.rotate(this.handAngle ,0.0,1.0,0.0);
        // this.moduleMatrix.scale(1.3,0.2,1.3);
        // this.drawBox();

        // 手指left
        this.moduleMatrix.translate(0.3,10.0,0.0);
        this.moduleMatrix.rotate(this.fin1Angle ,1.0,0.0,0.0);
        this.moduleMatrix.scale(0.1,0.4,0.1);
        this.drawBox();

        // fin2
        this.moduleMatrix.translate(0,0.0,-10.0);
        this.moduleMatrix.rotate(this.fin2Angle ,1.0,0.0,0.0);
        // this.moduleMatrix.scale(0.1,0.4,0.1);
        this.drawBox();
        requestAnimationFrame(this.draw.bind(this));
    }
}

let main = new Main();

main.init();
main.draw();




