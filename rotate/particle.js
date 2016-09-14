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
        console.log(b)
        c.beginPath();
        c.arc(this.x,this.y,this.width/2,0,Math.PI * 2,true);
        c.closePath();
        // c.fillStyle = `rgba(${r},${g},0,1)`;
        c.fillStyle = `rgba(${r},${g},${b},${Math.max(0.5,a)})`;
        console.log(c.fillStyle)
        c.fill();
    }
}


class Rotate{
    createBall(radius){
        radius = (radius === undefined) ? 20: radius;
        return new Ball({
            x: 0,
            y: 0,
            width: radius * 2,
        })
    }

    init(){
        let xpos = 0,
            ypos = 0,
            zpos = 0,
            focalLength = 250,
            // 焦距
            ballR = 25,
            ballN = 80,
            balls = [],
            vpx,
            vpy,
            angleY = 20;
        let ball;

        for(let i=0; i< ballN;i++){
            ball = this.createBall(ballR);
            ball.xpos = Math.random() *600;
            ball.ypos = Math.random() *800 - 500;
            ball.zpos = Math.random() *300;
            balls.push(ball)
        }
        // 画布中心位置
        vpx = canvas.obj.width/2;
        vpy = canvas.obj.height/2;
        // 取得相对比中心点的位置

        document.addEventListener("mousemove",(e)=>{
            angleY = (e.x -vpx) * 0.001;

            c.clearRect(0,0,canvas.obj.width,canvas.obj.height)
            window.requestAnimationFrame(refresh)
        });
        let rotateY = (ball)=> {
            // console.log(angleY)

            let cosy = Math.cos(angleY),
                siny = Math.sin(angleY),
                x1 = ball.xpos * cosy - ball.zpos * siny,
                z1 = ball.zpos * cosy + ball.xpos * siny;
            ball.xpos = x1;
            ball.zpos = z1;

            let scale = focalLength /(focalLength + ball.zpos);

            ball.x = vpx + ball.xpos * scale;
            ball.y = vpy + ball.ypos * scale;
            // console.log(scale)
            ball.width = Math.abs(ballR * 2 * scale)
            ball.draw()
        }

        let refresh = () =>{
            balls.forEach( (item)=>{
                rotateY(item)
            })

        }
        window.requestAnimationFrame(refresh)
    }
    refresh(balls,angleY){

    }

}

let R = new Rotate();
//
// R.init()

class Dot{
    constructor(centerX,centerY,centerZ,radius){
        // 粒子目的地位置   //保存原来的位置
        this.dx = centerX;
        this.dy = centerY;
        this.dz = centerZ;
        //保存粒子聚合后又飞散开的位置
        this.tx = 0;
        this.ty = 0;
        this.tz = 0;
        // 粒子现在的位置
        this.x = centerX;
        this.y = centerY;
        this.z = centerZ;
        this.radius = radius;
    }
    print(focallength){
        let r = (33 * (Math.random().toFixed(2)/2)).toFixed(0)
        let g = (125 * Math.random().toFixed(2)).toFixed(0)
        let b = (198 * Math.random().toFixed(2)).toFixed(0)
        c.save();
        c.beginPath();
        let scale = focallength/(focallength + this.z);
        let x = canvas.obj.width/2 + (this.x - canvas.obj.width/2) * scale;
        let y = canvas.obj.height/2 + (this.y - canvas.obj.height/2) * scale;
        c.arc(x,y,this.radius*scale,0,Math.PI * 2);
        c.fillStyle = `rgba(33,125,198,${scale})`;

        // c.shadowBlur = 2;
        // c.shadowOffsetX = 0.1;
        // c.shadowOffsetY = 0.2;
        // c.shadowColor = "#666";
        c.fill()
        c.restore();
    }
}
class ParticleText{
    constructor(){
        // 焦距
        this.focallength = 250;
        this.dots = [];
        this.pause = false;
        this.derection = true;
        this.count = 1;
    }

    init(){
        // 取得文字信息
        this.dots = this.getImgData("人人FED");
        let dots = this.dots;
        // 绘制随机点
        dots.forEach((item)=>{
            item.x = Math.random() * canvas.obj.width;
            item.y = Math.random() * canvas.obj.height;
            item.z = Math.random() * this.focallength * 2 - this.focallength;

            item.tx = Math.random() * canvas.obj.width;
            item.ty = Math.random() * canvas.obj.height;
            item.tz = Math.random() * this.focallength * 2 - this.focallength;
            item.print();
        })
        // 动画模拟
        this.animate()
    }
    animate(){
        c.clearRect(0,0,canvas.obj.width,canvas.obj.height);
        this.dots.forEach((item)=>{
            // 判断飞散的粒子是否回到了原位
            // let flag = Math.abs(item.dx - item.x) < 0.1 && Math.abs(item.dy - item.y) < 0.1 && Math.abs(item.dz - item.z) < 0.1;
            let flag = item.dx === item.x && item.dy === item.y && item.dz === item.z;
            // 粒子是否回到了飞散后的位置
            let flagSecond = Math.abs(item.tx - item.x) < 0.1 && Math.abs(item.ty - item.y)<0.1 && Math.abs(item.tz - item.z) < 0.1;
            const speed = 0.1;
            if(this.derection){
                // 如果粒子与目的地的位置相差0.1，也就是约等于到了目的地，使粒子的运动方向反向，也就是粒子张开再收缩的效果
                // console.log(flag)
                if(flag){
                    // 粒子回到了目的地 准备返回
                    item.x = item.dy;
                    item.y = item.dy;
                    item.z = item.dz;
                    this.derection = false;
                }else {
                    // 粒子没到目的地呢，继续走
                    // 控制行进的坐标， 0.5是速度系数
                    item.x = item.x + (item.dx -item.x) * speed;
                    item.y = item.y + (item.dy -item.y) * speed;
                    item.z = item.z + (item.dz -item.z) * speed;
                }
            }else{
                // 飞回到了飞散后的位置
                if(flagSecond){
                    item.x = item.tx;
                    item.y = item.ty;
                    item.z = item.tz;
                    // this.pause = true;
                    this.derection = true;
                } else {
                    // 没飞到，继续飞
                    item.x = item.x + (item.tx -item.x) * speed;
                    item.y = item.y + (item.ty -item.y) * speed;
                    item.z = item.z + (item.tz -item.z) * speed;
                    // this.pause = false
                }
            }
            item.print(this.focallength);
        })
        window.requestAnimationFrame(this.animate.bind(this));
    }
    getImgData(text){
        this.drawText(text);
        let imgData = c.getImageData(0,0,canvas.obj.width,canvas.obj.height)
        // 清楚画布，因为要抹去文字，开始粒子化
        c.clearRect(0,0,canvas.obj.width,canvas.obj.height)

        let dots = [];
        let baseNum =5;
        // 在所有的点中，取1/6 之后筛选出符合要求的点
        for( let i = 0;i < imgData.width;i += baseNum){
            for(let j = 0;j < imgData.height; j += baseNum){
                // 取得img中的a
                let a = ((j) * imgData.width + i) * 4;
                if(imgData.data[a] >= 128){
                    let dot = new Dot(i-3,j-3,0,2);
                    dots.push(dot);
                }
            }
        }
        return dots;
    }

    drawText(text){
        c.save();
        c.font = "250px 微软雅黑 bold";
        c.fillStyle = "rgba(168,168,168,1)";
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText(text, canvas.obj.width/2,canvas.obj.height/2);
        c.restore();
    }
}

let Par = new ParticleText();
Par.init();



