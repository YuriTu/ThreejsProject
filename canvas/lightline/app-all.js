

import _ from '../../until/until';
import {bgParticle} from "../../src/config/config";


const canvas = {}
canvas.obj = document.querySelector('#world');
canvas.width = canvas.obj.width = window.innerWidth;
canvas.height = canvas.obj.height = window.innerHeight;
const ctx = canvas.obj.ctx = canvas.obj.getContext('2d');

const lineLength = 30;
let start = 0;
const opts = {
    length:lineLength,
    linesCount:150,
    createRat:0.8,
    baseAliveTime:10,
    // baseRad: Math.PI * 2 / 4,
    baseRad: Math.PI * 2 / 6,
    backAlpha:.04,
    center:{
        x:canvas.width /2,
        y:canvas.height /2
    },
    color:'hsl(0,100%,100%)',
    dieRat:0.05,
    // 真实量 = 路径 / 单位量
    dieX:canvas.width / 2 / lineLength,
    dieY:canvas.height / 2 / lineLength,
    hueChange:0.1,
    maxShadowBlur:6,
    maxLight:50,

    pointRat:.05,
    pointLength:10,
    pointSize:2,
}

const getHSL = (hue = 0,light = 100) => {
    return `hsl(${hue},100%,${light}%)`
};

let timeTick = 0;

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
        this.color = getHSL(timeTick * opts.hueChange,50)
        this.aliveTime = 0;

    }
    start() {
        // 相对于 中心点 的偏移 单位量
        this.x = this.x + this.xpos;
        // this.x = 0;
        this.y = this.y + this.ypos;
        this.aliveTime = 0;
        // this.y = 0;
        this.killTime = opts.baseAliveTime + Math.random() * 10;
        this.rad = this.rad + opts.baseRad * (Math.random() < 0.5 ? -1 : 1);
        // this.rad = this.rad + opts.baseRad * (Math.random() < 0.3 ? 0 : (Math.random() < .5?1:-1));
        this.xpos = Math.cos(this.rad);
        this.ypos = Math.sin(this.rad);

        if(Math.random() < opts.dieRat
         || Math.abs(this.x) > opts.dieX
         || Math.abs(this.y) > opts.dieY
        ){
            // console.log(Math.abs(this.x) > opts.dieX
            //     || Math.abs(this.y) > opts.dieY)
            // console.log(this.x,opts.dieX)
            // console.log(this.y,opts.dieY)
            this.init();
        }

    };
    draw(ctx) {
        this.aliveTime++;
        if(this.aliveTime >= this.killTime) this.start();

        // 路径进度
        let pathRat = this.aliveTime / this.killTime;

        ctx.fillStyle =this.color
        // console.log(this.color)
        ctx.shadowBlur = opts.maxShadowBlur * pathRat + 3 * Math.random();
        // 替换亮度
        ctx.shadowColor =this.color.replace(/\d+%\)$/,`${opts.maxLight * pathRat}%)`)
        // console.log(this.color)
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
        // 绘制闪烁点
        if(Math.random() < opts.pointRat){
            ctx.fillRect(
                opts.center.x + (this.x + x) * opts.length + (opts.pointLength * (Math.random() < .5?1:-1) - (opts.pointLength* Math.random())),
                opts.center.y + (this.y + y) * opts.length + (opts.pointLength * (Math.random() < .5?1:-1) - (opts.pointLength * Math.random())),
                opts.pointSize, opts.pointSize
            )
        }
    }
}


class Main {
    constructor(){
        this.lines = [];
        this.createLine = () => {
            for (let i = 0;i< opts.linesCount;i++){
                this.lines.push( new Line())
            }
        }
    }
    start(){
        // ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.save();

        this.createLine();
        start = window.performance.now();
        this.animate();

    }

    animate(){

        timeTick++;
        ctx.globalCompositeOperation = 'source-over';
        // console.log(ctx.shadowBlur)
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(0,0,0,${opts.backAlpha})`;
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.globalCompositeOperation = 'lighter';
        //TODO 数字递增会造成闪烁
        // ctx.fillStyle = createColor();

        if(this.lines.length < opts.linesCount && Math.random() < opts.createRat){
            this.lines.push(new Line());
        }
        this.lines.forEach(item => {
            item.draw(ctx);
        })

        let now = window.performance.now();

        // console.log('function run :'+(now - start))
        document.querySelector('#Stats-output').innerHTML = 'fps:'+ (1000/ (now - start))
        start = now;
        _.raf(this.animate.bind(this));
    }

}

const m = new Main();
m.start()
