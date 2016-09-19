// require("./basicLib")

let canvas = {};
canvas.obj = document.getElementById("world");
canvas.ctx = canvas.obj.getContext("2d")
let c = canvas.obj.getContext("2d")

let image = {};

let img = new Image();
window.requestNextAnimationFrame = () =>{
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame
}

class BasicConfig {
    drawBackground(){
        c.save();
        c.beginPath();
        c.rect(0,0,canvas.obj.width,canvas.obj.height);
        c.fillStyle = "#99CCFF";
        c.fill();
        c.closePath();
        c.restore();
    }
    drawBG(){
        window.requestAnimationFrame(this.drawBackground);
    }
}
let Basic = new BasicConfig();
// Basic.drawBG();
// let stage = new Stage(canvas.obj);
// rotate3d学习
class Ball{
    constructor(data){
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.angleY = 0;
    }
    draw(){
        c.save();
        let r = (Math.random() * 28).toFixed(0);
        // console.log(r)
        let g = (Math.random() * 124).toFixed(0);
        let b = (Math.random() * 200  + 50).toFixed(0);
        let a = (Math.random().toFixed(0))
        // console.log(b)
        c.beginPath();
        c.arc(this.x,this.y,this.width/2,0,Math.PI * 2,true);
        c.closePath();
        // c.fillStyle = `rgba(${r},${g},0,1)`;
        // c.fillStyle = `rgba(${r},${g},${b},${Math.max(0.5,a)})`;
        c.fillStyle = `rgba(155,155,155,1)`;
        // console.log(c.fillStyle)
        c.fill();
    }
}


class Rotate{
    constructor(){
        this.angleY = 20;
        this.focalLength = 250;
        this.vpx = null;
        this.vpy = null;

    }
    createBall(radius){
        radius = (radius === undefined) ? 20: radius;
        return new Ball({
            x: 0,
            y: 0,
            width: radius * 2,
        })
    }

    init(){
        let ballR = 25,
            ballN = 20,
            balls = [];
        let ball;

        for(let i=0; i< ballN;i++){
            ball = this.createBall(ballR);
            ball.xpos = Math.random() *600;
            ball.ypos = Math.random() *800 - 500;
            ball.zpos = Math.random() *300;
            balls.push(ball)
        }
        // 画布中心位置
        this.vpx = canvas.obj.width/2;
        this.vpy = canvas.obj.height/2;
        // 取得相对比中心点的位置

        document.addEventListener("mousemove",(e)=>{
            this.angleY = (e.x -this.vpx) * 0.001;

            // c.clearRect(0,0,canvas.obj.width,canvas.obj.height)
            window.requestAnimationFrame(this.refresh.bind(this))
        });

        window.requestAnimationFrame(this.refresh.bind(this))
    }
    refresh(balls){
        balls.forEach( (item)=>{
            this.rotateY(item)
        })
    }
    rotateY(ball,){
        let cosy = Math.cos(this.angleY),
            siny = Math.sin(this.angleY),
            x1 = ball.xpos * cosy - ball.zpos * siny,
            z1 = ball.zpos * cosy + ball.xpos * siny;
        ball.xpos = x1;
        ball.zpos = z1;

        let scale = this.focalLength /(this.focalLength + ball.zpos);

        ball.x = this.vpx + ball.xpos * scale;
        ball.y = this.vpy + ball.ypos * scale;
        // console.log(scale)
        ball.width = Math.abs(25 * 2 * scale)
        ball.draw()
    }

}

let R = new Rotate();
//
R.init()



