import config from './config/config';
import _ from '../until/until';
import Animator from './animator';

// let canvas = {};
// canvas.obj = document.getElementById('world');
// canvas.ctx = canvas.obj.getContext('2d');
// let ctx = canvas.ctx;

let animator,
// 动画当前动作的上一个动作的执行时间
actionLastTime = 0;

// 流程控制组件
class Main {
    constructor(){
        this.init = () => {
            this.clear();
            this.initCanvas();

        }
        this.clear = () => {

        }
        this.initCanvas = () => {
            this.canvas = {
                obj:document.getElementById('world'),
                width:window.innerWidth,
                height:window.innerHeight,
                ctx: document.getElementById('world').getContext("2d"),
                allow:false
            }
            this.canvas.obj.width = this.canvas.width;
            this.canvas.obj.height = this.canvas.height;
        }
        this.initAnimator = () => {
            animator = new Animator(this.canvas);
            animator.init();
        }

        this.start = () => {
            this.canvas.allow = true;
            this.animate();
        }
        this.baseOnTime = (time) => {
            const curTime = +new Date();
            const passTime = curTime - actionLastTime;
            if (config.basicConfig.baseOnTime){
                if (passTime > time){
                    actionLastTime = curTime;
                    return passTime;
                } else {
                    return false;
                }
            }
            return passTime;
        };
    }
    animate(){
        if(!this.canvas.allow)return;

        if(this.baseOnTime( (1000 / config.basic.fps) )){
            animator.draw();
        }
        _.raf(this.animate.bind(this))
    }
}

let m = new Main();
m.init();
