/**
 * @file Describe the file
 * @author 涂强（tuqiang01@baidu.com）
 */

import _ from '../until/until';
import Particle from './components/particle';
import {basic,bgParticle} from './config/config';

let ctx,canvas;



class Animator{
    constructor(props){
        canvas = props;
        ctx = props.ctx;
        this.bgParticleList = [];
        this.focalLength = basic.focalLength;
        this.cer = {
            x : canvas.width / 2,
            y : canvas.height / 2
        };
        // 鼠标旋转角度
        this.angle = {
            x:0,
            y:0,
        }
        this.clearCanvas = (x, y, width, height) => {
            if (!!width && !!height){
                ctx.clearRect(x, y, width, height);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };
        this.createBGParticle = (config) => {
            for(let i = 0;i < config.count;i++){
                let par = new Particle({
                    x:0,
                    y:0,
                    radius:config.radius,
                })
                par.xpos = _.intRandom(50,-50) / 100 * canvas.width;
                par.ypos = _.intRandom(50,-50) / 100 * canvas.height;
                par.zpos = _.intRandom() / 100 * basic.focalLength;
                this.bgParticleList.push(par)
            }
        }
        this.eventHandle = () => {
            canvas.obj.addEventListener('mousemove',e => {
                const x = e.screenX;
                const y = e.screenY;
                this.angle.x = (x - this.cer.x) * basic.path2angle;
                this.angle.y = (y - this.cer.y) * basic.path2angle;
            })
        }
    }

    init(){
        // 创造背景粒子
        this.createBGParticle(bgParticle);
        // 事件绑定
        this.eventHandle();
        ctx.save();
    }
    draw(){
        console.log(1)
        this.drawBGParticle();
    }
    drawBGParticle(){
        this.clearCanvas();
        this.bgParticleList.forEach(item => {
            // this.rotateX(item);
            this.rotateY(item);
            this.renderBGParticle(item);
            item.draw(ctx);
        })
    }
    rotateX(item){
        let sinx = Math.sin(this.angle.x);
        let cosx = Math.cos(this.angle.x);

        let y = item.ypos * cosx - item.zpos * sinx;
        let z = item.ypos * sinx + item.zpos * cosx;
        item.ypos = y;
        item.zpos = z;
    }
    rotateY(item){
        let siny = Math.sin(this.angle.y);
        let cosy = Math.cos(this.angle.y);

        let x = item.xpos * cosy + item.zpos * siny;
        let z = item.zpos * cosy - item.xpos * siny;
        item.xpos = x;
        item.zpos = z;
    }
    renderBGParticle(item){
        const scale = this.focalLength / (this.focalLength + item.zpos);

        item.x = this.cer.x + item.xpos * scale;
        item.y = this.cer.y + item.ypos * scale;
        item.radius = bgParticle.radius * scale;

        document.getElementById('scale').innerHTML = `${scale} <br/> zpos:${item.zpos} </br> xangle:${this.angle.x}</br> yangle${this.angle.y}`;

    }

}

export default Animator;
