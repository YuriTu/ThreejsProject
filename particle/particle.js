// require("./basicLib")

let canvas = {};
canvas.obj = document.getElementById("world");
canvas.ctx = canvas.obj.getContext("2d")
let c = canvas.obj.getContext("2d")

let image = {};
class Draw {
    constructor(){
        this.imageData = c.getImageData(440,50,300,300)
    }
    init(){
        canvas.w = canvas.obj.width = document.body.clientWidth;
        canvas.h = canvas.obj.height = document.body.clientHeight;
        let img = new Image();
        img.src = "../img/logo.png"
        img.onload = ()=>{
            image.obj = img;
            image.w = img.width;
            image.h = img.height;
            image.x = Number.parseInt(canvas.w/2 - image.w/2);
            image.y = 50;
            c.drawImage(image.obj,image.x,image.y,image.w,image.h)

            image.imageData = canvas.ctx.getImageData(image.x,image.y,image.w,image.h)
            let particles = this.makeParticle()

            this.drawParticle(particles)
        }

    }
    makeParticle(){
        let particles = [];

        // 根本没有用到好吗！！！！！
        let length = image.imageData.data.length

        let cols = 200;
        let rows = 200;
        let s_width = Number.parseInt(image.w / cols);
        let s_height = Number.parseInt(image.h / rows);

        let pos = 0;
        let par_x,par_y;
        let data = image.imageData.data;

        for(let i = 1;i <= cols;i ++){
            for(let j = 1;j <= rows;j++){
                pos = [(j *s_height -1)*this.imageData.width + (i *s_width -1)] *4;

                if(data[pos] > 0){
                    // console.log(data[pos])
                    // console.log(data[pos + 1])
                    // console.log(data[pos + 2])
                    // console.log(data[pos + 3])
                    let particle = {
                        x : image.x + i * s_width,
                        y : image.y + j * s_height,
                        fillStyle:`rgba(${data[pos]},${data[pos+1]},${data[pos+2]},${data[pos+3]})`
                    }
                    //
                    // if(data[pos+1] < 175 && data[pos+2] < 10) {
                    //     particle.fillStyle = '#ffa900';
                    // } else if(data[pos+1] < 75 && data[pos+1] > 50) {
                    //     particle.fillStyle = '#ff4085';
                    // } else if(data[pos+1] < 220 && data[pos+1] > 190) {
                    //     particle.fillStyle = '#00cfff';
                    // } else if(data[pos+1] < 195 && data[pos+1] > 175) {
                    //     particle.fillStyle = '#9abc1c';
                    // }
                    particles.push(particle)
                }
            }
        }
        return particles;
    }
    drawParticle(particles){
        canvas.ctx.clearRect(0,0,canvas.w,canvas.h);

        let len = particles.length;
        let curr_particle = null;

        for(let i = 0;i < len; i++){
            curr_particle = particles[i];

            c.fillStyle = curr_particle.fillStyle;

            c.fillRect(curr_particle.x,curr_particle.y,1,1)
        }
    }
}

let D = new Draw();
// 绘画粒子小动画效果
let img = new Image();
// D.init();

window.requestNextAnimationFrame = () =>{
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame
        // ||
        //
        // (callback,element){
        //
        //     let start,finsh;
        //     window.setTimeout(()=>{
        //         start = +new Date();
        //         callback(start)
        //         finsh = +new Date();
        //         this.timeOut = (1000 / 60) - (finsh - start)
        //     },this.timeOut)
        //
        // }


}


// let stage = new Stage(canvas.obj);
// rotate3d学习
class Ball{
    constructor(data){
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;


    }
    draw(){
        debugger;
        c.beginPath();
        c.arc(0,0,40/2,0,Math.PI * 2,true);
        c.closePath();
        c.fillStyle = `rgba(0,0,0,${Math.min(1,40/(2))})`;
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
            draw(){
                debugger;
                c.beginPath();
                c.arc(0,0,this.width/2,0,Math.PI * 2,true);
                c.closePath();
                c.fillStyle = `rgba(0,0,0,${Math.min(1,this.width/(2))})`;
                c.fill();
            }
        })
    }

    init(){
        let xpos = 0,
            ypos = 0,
            zpos = 0,
            focalLength = 250,
            // 焦距
            ballR = 20,
            vpx,
            vpy;
        let ball = this.createBall(ballR);
        // ball.draw();
        // stage.addChild(ball)
        // 画布中心位置
        vpx = canvas.obj.width/2;
        vpy = canvas.obj.height/2;
        // 取得相对比中心点的位置
        document.addEventListener("mousemove",(x,y)=>{
            ypos = y - vpy;
            xpos = x - vpx;
            let scale = focalLength/(focalLength + zpos);

            ball.x = vpx + xpos*scale
            ball.y = vpy + ypos*scale

            ball.width = ballR*2*scale
        });
        document.addEventListener("keydown",(e)=>{
            if(e.keyCode == 38){
                zpos += 5;
            }
            if(e.keyCode == 40){
                zpos -= 5;
            }
        },false);
        // myAnimate(){

        //
        //
        // }
        debugger
        window.requestAnimationFrame(
            ball.draw
        )
        // window.requestAnimationFrame(){
        //     // z对xy的影响比例
        //
        //     console.log(scale)
        // }

        // stage.start();
    }
}

let R = new Rotate();

R.init()
