let canvas = {};
canvas.obj = document.getElementById("world");
canvas.ctx = canvas.obj.getContext("2d")
let c = canvas.obj.getContext("2d")

window.requestNextAnimationFrame = () =>{
    return window.requestAnimationFrame ||10
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame
}


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
            //告诉各个粒子现在应该所在的位置
            item.x = Math.random() * canvas.obj.width;
            item.y = Math.random() * canvas.obj.height;
            // 焦距，利用二维方式模拟三维效果
            item.z = Math.random() * this.focallength * 2 - this.focallength;
            //报存粒子飞散后的位置
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
        console.log(this.dots.length)
        this.dots.forEach((item)=>{
            // 判断飞散的粒子是否回到了原位
            let flag = Math.abs(item.dx - item.x) < 0.1 && Math.abs(item.dy - item.y) < 0.1 && Math.abs(item.dz - item.z) < 0.1;
            // let flag = item.dx === item.x && item.dy === item.y && item.dz === item.z;
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
        console.log("1")
        window.requestAnimationFrame(this.animate.bind(this));
    }
    getImgData(text){
        this.drawText(text);
        let imgData = c.getImageData(0,0,canvas.obj.width,canvas.obj.height)
        // 清楚画布，因为要抹去文字，开始粒子化
        // c.clearRect(0,0,canvas.obj.width,canvas.obj.height)

        let dots = [];
        let baseNum =3;
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



