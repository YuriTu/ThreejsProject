/**
 * 动画对象库
 * Author ：Yuri 2017/01/18
 *
 * 主要包含：
 * 1.动画计时器
 * 2.精灵
 * */




class AnimationTimer {

}

class StopWatch {
    constructor(){
        this.startTime = 0;
        this.running = false;
        this.elapsed = undefined;

        this.getElapsedTime = () => {
            if(this.running){
                return (+new Date()) - this.startTime;
            } else {
                return this.elapsed;
            }
        }
        this.isRunning = () => {
            return this.running;
        }
        this.reset = () => {
            this.elapsed = 0;
        }
    }
    start(){
        this.startTime = +new Date();
        this.elapsed = undefined;
        this.running = true;
    }
    stop(){
        this.elapsed = (+new Date()) - this.startTime;
        this.running = false;
    }
}


module.exports = {
    AnimationTimer,
    StopWatch,
}

