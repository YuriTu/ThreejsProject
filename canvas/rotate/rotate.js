const _ = require('../../until/until');

let canvas = {};
canvas.obj = document.getElementById("world");
canvas.ctx = canvas.obj.getContext("2d")
let ctx = canvas.obj.getContext("2d")

window.requestNextAnimationFrame = () =>{
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame
}

class Ball {
    constructor(props){
        this.x = props.x;
        this.y = props.y;
        this.radius = props.radius;
        this.width = 2 * props.radius;
    }
    draw(ctx,cb){
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,true);
        ctx.fillStyle = 'rgba(0,0,0,'+ Math.min(1, this.radius *2 /this.width) +')';
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        cb && cb();
    }
}

class Rotate {
    constructor(){
        this.default = {
            radius:20,
        }
        this.ballR = 25;
        this.ballN = 10;
        this.ballS = [];
        this.cenx = null;
        this.ceny = null;
        this.cenz = 100;
        // 中心偏移量
        this.zpos = 0;
        this.xpos = 0;
        this.focalLength = 250;
        // 旋转量
        this.angleY = 0;
        this.angleX = 0;
    }
    createBall(radius){
        let r = (radius === undefined)?this.default.radius:radius;
        return new Ball({
            x:0,
            y:0,
            radius:radius,
        })
    }
    init() {
        this.cenx = canvas.obj.width / 2;
        this.ceny = canvas.obj.height / 2;
        for (let i = 0; i < this.ballN;i++){
            let ball = this.createBall(this.ballR);
            ball.xpos = Math.random() * 200 - 100;
            // ball.xpos = 0;
            ball.ypos = Math.random() * 200 - 100;
            // ball.ypos = 0;
            ball.zpos = Math.random() * 200 - 100;
            this.ballS.push(ball);
        }

        document.querySelector('#world').addEventListener('mousemove',(e) => {

            let x = e.screenX;
            let y = e.screenY;
            this.angleY = (x - this.cenx) * .001;
            this.angleX = (y - this.cenx) * .001;
            console.log(x,this.cenx,this.angleY)


        })
        _.raf(this.animate.bind(this));
    }

    animate(){
        ctx.clearRect(0,0,canvas.obj.width,canvas.obj.height)
        this.ballS.forEach(item => {
            this.rotateX(item);
            this.rotateY(item);
            this.render(item);
            item.draw(ctx);
        })
        _.raf(this.animate.bind(this))

    }
    rotateX(ball){
        let sinx = Math.sin(this.angleX);
        let cosx = Math.cos(this.angleX);

        let yx = ball.ypos * cosx - ball.zpos * sinx;
        let zx = ball.ypos * sinx + ball.zpos * cosx;


        ball.zpos = zx;
        ball.ypos = yx;
    }
    rotateY(ball){

        let cosy = Math.cos(this.angleY);
        let siny = Math.sin(this.angleY);

        let x = ball.xpos * cosy + ball.zpos * siny;
        let z = ball.zpos * cosy - ball.xpos * siny;

        ball.xpos = x;
        ball.zpos = z;
    }
    render(ball){

        let scale = this.focalLength / (this.focalLength  + ball.zpos);
        ball.x = this.cenx + ball.xpos * scale;
        ball.y = this.ceny + ball.ypos * scale;
        ball.radius = this.ballR*scale;
        // console.log(cosy,ball.zpos, ball.xpos,siny)

        document.getElementById('scale').innerHTML = `${scale}---angle:${this.angleY}`;
    }
}

class Scale {
    constructor(){
        this.default = {
            radius:20,
        }
        this.ballR = 25;
        this.ballN = 1;
        this.ballS = [];
        this.cenx = null;
        this.ceny = null;
        this.cenz = 100;
        // 中心偏移量
        this.zpos = 0;
        this.xpos = 0;
        this.ypos = 0;
        this.focalLength = 250;
    }
    createBall(radius){
        let r = (radius === undefined)?this.default.radius:radius;
        return new Ball({
            x:0,
            y:0,
            radius:radius,
        })
    }
    init() {
        this.cenx = canvas.obj.width / 2;
        this.ceny = canvas.obj.height / 2;
        for (let i = 0; i < this.ballN;i++){
            let ball = this.createBall(this.ballR);
            // ball.xpos = Math.random() * this.cenx;
            ball.xpos = 0;
            // ball.ypos = Math.random() * this.ceny;
            ball.ypos = 0;
            // ball.zpos = Math.random() * this.cenz;
            this.ballS.push(ball);
        }
        document.addEventListener('keydown',(e) => {
            if(e.keyCode === 38 ){
                this.zpos += 5;
            }
            if(e.keyCode === 40){
                this.zpos -=5;
            }
        })
        document.querySelector('#world').addEventListener('mousemove',(e) => {
            console.log(e)
            let x = e.screenX + 10;
            let y = e.screenY + 10;
            this.xpos = x - this.cenx;
            this.ypos = y - this.ceny;
        })
        _.raf(this.animate.bind(this));
    }

    animate(){
        ctx.clearRect(0,0,canvas.obj.width,canvas.obj.height)
        this.ballS.forEach(item => {
            this.changeZ(item);
            item.draw(ctx);
        })
        _.raf(this.animate.bind(this))

    }
    changeZ(ball){
        let scale = this.focalLength / (this.focalLength  + this.zpos);
        ball.x = this.cenx + this.xpos*scale;
        ball.y = this.ceny + this.ypos*scale;
        ball.radius = this.ballR*scale;

        document.getElementById('scale').innerHTML = scale;
    }
}
// let S = new Scale();
// S.init();

let R = new Rotate();
R.init();

//
// class Rotate{
//     constructor(){
//         this.angleY = 20;
//         this.focalLength = 250;
//         this.vpx = null;
//         this.vpy = null;
//         this.balls = [];
//         this.ballR = 25;
//         this.ballN = 1;
//
//     }
//     init(){
//         let ball;
//
//         for(let i=0; i< this.ballN;i++){
//             // 创建了多个小球，在 0，0
//             ball = this.createBall(this.ballR);
//             // 给予小球的初始坐标点 得到的是距离画布中心的偏移量
//             ball.xpos = Math.random() *100;
//             ball.ypos = Math.random() *100;
//             ball.zpos = Math.random() *100;
//             this.balls.push(ball);
//         }
//         // 画布中心位置
//         this.vpx = canvas.obj.width/2;
//         this.vpy = canvas.obj.height/2;
//         // 取得相对比中心点的位置
//
//         document.addEventListener("mousemove",(e)=>{
//             // 这里的角度是 鼠标的x坐标距离中心的坐标，因为是跟随中心旋转的  我们根据鼠标位置的多少，来决定角度有多大，
//             // 鼠标划得越远，自然角度就越大
//             console.log(`now：${e.x}`);
//             console.log(`far from center:${e.x-this.vpx}`)
//             // 0.01只是个速度系数
//             // 这里拿到旋转的角度，化为了弧度
//             this.angleY = (e.x -this.vpx) * 0.001;
//             console.log(`result :${this.angleY}`)
//             let obb = this.angleY
//             console.log(`即角度为 :${obb * 180 / Math.PI}度`)
//
//             // 每次新旋转都清空一下画布，免得有轨迹
//             c.clearRect(0,0,canvas.obj.width,canvas.obj.height)
//             window.requestAnimationFrame(this.refresh.bind(this))
//         });
//         // 第一次渲染
//         window.requestAnimationFrame(this.refresh.bind(this))
//     }
//     createBall(radius){
//         radius = (radius === undefined) ? 20: radius;
//         return new Ball({
//             x: 0,
//             y: 0,
//             width: radius * 2,
//         })
//     }
//     // 这个函数的功能就是对每个小球进行旋转处理
//     refresh(){
//         this.balls.forEach( (item)=>{
//             this.rotateY(item)
//         })
//     }
//     // 怎么转的关键就在这里
//
//     rotateY(ball){
//         console.log(`原坐标x: ${ball.xpos}`)
//         // 计算出对应旋转的角度值
//         let cosy = Math.cos(this.angleY),
//             siny = Math.sin(this.angleY),
//             x1 = ball.xpos * cosy - ball.zpos * siny,
//             z1 = ball.zpos * cosy + ball.xpos * siny;
//         console.log(`cos:${cosy}`)
//         console.log(`sin:${siny}`)
//         console.log(`原坐标X${ball.xpos}`)
//         console.log(`ball.xpos * cosy 新坐标距离:${ball.xpos * cosy}`)
//         console.log(`x1:${x1}`)
//         ball.xpos = x1;
//         ball.zpos = z1;
//         // z轴影响系数
//         // let scale = this.focalLength /(this.focalLength + ball.zpos);
//         let scale = 1;
//         console.log(`z轴影响系数 scale:${scale}`)
//
//         ball.x = this.vpx + ball.xpos * scale;
//         ball.y = this.vpy + ball.ypos * scale;
//         ball.width = Math.abs(this.ballR * 2 * scale)
//         ball.draw()
//     }
//
// }
//
