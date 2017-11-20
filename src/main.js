import {basic,bgParticle} from './config/config';
import _ from '../until/until';
import Animator from './animator';

let animator,
// 动画当前动作的上一个动作的执行时间
actionLastTime = 0;

// 流程控制组件
class Main {
    constructor(){
        this.init = () => {
            this.clear();
            this.initCanvas();
            this.initAnimator();

        }
        this.clear = () => {

        }
        this.initCanvas = () => {
            let ele = document.getElementById('canvas');
            this.canvas = {
                obj:ele,
                width:window.innerWidth - 20,
                height:window.innerHeight -30,
                ctx: ele.getContext('2d'),
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
            if (basic.baseOnTime){
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

        if(this.baseOnTime( (1000 / basic.fps) )){
            animator.draw();
        }
        _.raf(this.animate.bind(this))
    }
}

let m = new Main();
m.init();
m.start();
