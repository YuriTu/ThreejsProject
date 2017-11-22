/**
 * @file 基本粒子
 * @author 涂强（tuqiang01@baidu.com）
 */

import _ from '../../until/until'

export default class Particle {
    constructor(props){
        // 相对canvas绝对坐标
        this.x = props.x;
        this.y = props.y;
        this.radius = props.radius;
        this.width = 2 * props.radius;
        this.color = props.color;
        // 相对中心坐标 xpos ypos zpos
    }
    draw(ctx,cb){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color.replace(/.\)$/,`${Math.min(1, this.radius *2 /this.width)})`)

        ctx.closePath();
        ctx.fill();
        // ctx.stroke();
        cb && cb();
    }
}

