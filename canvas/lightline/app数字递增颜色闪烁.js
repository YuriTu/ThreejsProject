

import _ from '../../until/until';
import {bgParticle} from "../../src/config/config";

const canvas = {}
canvas.obj = document.querySelector('#world');
canvas.width = canvas.obj.width
canvas.height = canvas.obj.height
const ctx = canvas.obj.ctx = canvas.obj.getContext('2d');

const opts = {
    length:20,
    baseAliveTime:10,
    baseRad: Math.PI * 2 / 6,
    center:{
        x:canvas.width /2,
        y:canvas.height /2
    },
    color:'hsl(0,100%,100%)',
    dieRat:0.05,
}

const getHSL = (hue = 0,light = 100) => {
    return `hsl(${hue},100%,${light}%)`
};

let timeTick = 500;
// const createColor = (alpha = 1) => {
//     let value = timeTick.toString(16)
//     let hex = `#${value.padStart(6, '0')}`
//     return _.hexToRgba(hex,alpha).toString();
// }


class Line {
    constructor(){
        this.init();
        this.start();
    }
    init(){
        this.x = 0;
        this.y = 0;
        this.xpos = 0;
        this.ypos = 0;
        this.rad = 0;
        // this.color = createColor();
        this.color = getHSL(timeTick * 0.1)
        this.aliveTime = 0;
        console.log(this.color)
    }
    start() {
        this.x = this.x + this.xpos;
        // this.x = 0;
        this.y = this.y + this.ypos;
        this.aliveTime = 0;
        // this.y = 0;
        this.killTime = opts.baseAliveTime + Math.random() * 10;
        this.rad = this.rad + opts.baseRad * (Math.random() < 0.5 ? -1 : 1);
        this.xpos = Math.cos(this.rad);
        this.ypos = Math.sin(this.rad);
        
        if(Math.random() < opts.dieRat
         || Math.abs(this.x) >     
        )
    };
    draw(ctx) {
        this.aliveTime++;
        // console.log(this.aliveTime,this.killTime)
        if(this.aliveTime >= this.killTime) this.start();

        // 路径进度
        let pathRat = this.aliveTime / this.killTime;
        // let lineLength =

        // ctx.fillStyle = this.color = createColor();
        // let wave = Math.random()
        // xpos为每次的结果增量
        // xy为过程
        let x = this.xpos * pathRat;
        let y = this.ypos * pathRat;
        ctx.fillRect(
            opts.center.x + (this.x + x) * opts.length,
            opts.center.y + (this.y + y) * opts.length,
            2, 2
        );
    }
}


class Main {
    constructor(){
        this.lines = [];
        this.createLine = () => {
            for (let i = 0;i< 100;i++){
                this.lines.push( new Line())
            }
        }
    }
    start(){
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.save();

        this.createLine();
        this.animate();

    }

    animate(){
        timeTick += 100;
        ctx.globalCompositeOperation = 'source-over';
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.globalCompositeOperation = 'lighter';
        //TODO 数字递增会造成闪烁
        ctx.fillStyle = createColor();
        console.log(ctx.fillStyle)
        this.lines.forEach(item => {
            item.draw(ctx);
        })
        _.raf(this.animate.bind(this));
    }

}

const m = new Main();
m.start()
