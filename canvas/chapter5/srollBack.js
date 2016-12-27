const _ = require("../../until/until");
let c;

class SrollBack {
    constructor(props){
        c = this.context = props.ctx;
        this.canvas = props.obj;

        this.sky = new Image();
        this.offset = 0;
        this.skyV = 30;//fps
        this.fps = 0;

        this.lastTime = 0;
    }
    draw(){
        c.save();
        this.offset = this.offset < this.canvas.width?
            this.offset + this.skyV / this.fps : 0;
        c.translate(-this.offset,0);
        c.drawImage(this.sky,0,0);
        c.drawImage(this.sky,this.canvas.width,0);
        c.restore();
    }
    calculateFps(now) {
        const fps = 1000 / (now - this.lastTime);
        this.lastTime = now;
        return fps;
    }

    animate(now){
        if (now === undefined) {
            now = +new Date;
        }
        this.fps = this.calculateFps(now);
            c.clearRect(0,0,this.canvas.width,this.canvas.height)
            this.draw();

        requestAnimationFrame(this.animate.bind(this));
    }

    init(){
        this.sky.src = "../../img/test.png";
        this.sky.onload = () => {
            this.draw();
        }
        requestAnimationFrame(this.animate.bind(this))
    }
}

module.exports = SrollBack;

