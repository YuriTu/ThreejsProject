

let canvas = {};
canvas.obj = document.getElementById("world");
canvas.ctx = canvas.obj.getContext("2d")
let c = canvas.obj.getContext("2d")

window.requestNextAnimationFrame = () =>{
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame
}




class Rotate{
    constructor(){
        this.angleY = 20;
        this.focalLength = 250;
        this.vpx = null;
        this.vpy = null;
        this.balls = [];
        this.ballR = 25;
        this.ballN = 1;

    }
    init(){
        let ball;

        for(let i=0; i< this.ballN;i++){
            // 创建了多个小球，在 0，0
            ball = this.createBall(this.ballR);
            // 给予小球的初始坐标点 得到的是距离画布中心的偏移量
            ball.xpos = Math.random() *100;
            ball.ypos = Math.random() *100;
            ball.zpos = Math.random() *100;
            this.balls.push(ball);
        }
        // 画布中心位置
        this.vpx = canvas.obj.width/2;
        this.vpy = canvas.obj.height/2;
        // 取得相对比中心点的位置

        document.addEventListener("mousemove",(e)=>{
            // 这里的角度是 鼠标的x坐标距离中心的坐标，因为是跟随中心旋转的  我们根据鼠标位置的多少，来决定角度有多大，
            // 鼠标划得越远，自然角度就越大
            console.log(`now：${e.x}`);
            console.log(`far from center:${e.x-this.vpx}`)
            // 0.01只是个速度系数
            // 这里拿到旋转的角度，化为了弧度
            this.angleY = (e.x -this.vpx) * 0.001;
            console.log(`result :${this.angleY}`)
            let obb = this.angleY
            console.log(`即角度为 :${obb * 180 / Math.PI}度`)

            // 每次新旋转都清空一下画布，免得有轨迹
            c.clearRect(0,0,canvas.obj.width,canvas.obj.height)
            window.requestAnimationFrame(this.refresh.bind(this))
        });
        // 第一次渲染
        window.requestAnimationFrame(this.refresh.bind(this))
    }
    createBall(radius){
        radius = (radius === undefined) ? 20: radius;
        return new Ball({
            x: 0,
            y: 0,
            width: radius * 2,
        })
    }
    // 这个函数的功能就是对每个小球进行旋转处理
    refresh(){
        this.balls.forEach( (item)=>{
            this.rotateY(item)
        })
    }
    // 怎么转的关键就在这里

    rotateY(ball){
        console.log(`原坐标x: ${ball.xpos}`)
        // 计算出对应旋转的角度值
        let cosy = Math.cos(this.angleY),
            siny = Math.sin(this.angleY),
            x1 = ball.xpos * cosy - ball.zpos * siny,
            z1 = ball.zpos * cosy + ball.xpos * siny;
        console.log(`cos:${cosy}`)
        console.log(`sin:${siny}`)
        console.log(`原坐标X${ball.xpos}`)
        console.log(`ball.xpos * cosy 新坐标距离:${ball.xpos * cosy}`)
        console.log(`x1:${x1}`)
        ball.xpos = x1;
        ball.zpos = z1;
        // z轴影响系数
        // let scale = this.focalLength /(this.focalLength + ball.zpos);
        let scale = 1;
        console.log(`z轴影响系数 scale:${scale}`)

        ball.x = this.vpx + ball.xpos * scale;
        ball.y = this.vpy + ball.ypos * scale;
        ball.width = Math.abs(this.ballR * 2 * scale)
        ball.draw()
    }

}

class Ball{
    constructor(data){
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
    }
    draw(){
        c.save();
        c.beginPath();
        c.arc(this.x,this.y,this.width/2,0,Math.PI * 2,true);
        c.closePath();
        c.fillStyle = `rgba(155,155,155,1)`;
        c.fill();
    }
}

let R = new Rotate();
R.init()



