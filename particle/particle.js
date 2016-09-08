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

let img = new Image();
img.src = "../img/test.png"
img.onload = ()=>{
    image.obj = img;
    image.w = img.width;
    image.h = img.height;
    image.x = Number.parseInt(canvas.w/2 - image.w/2);
    image.y = 50;
    c.drawImage(image.obj,image.x+500,image.y,image.w,image.h)

    image.imageData = canvas.ctx.getImageData(image.x,image.y,image.w,image.h)

}


D.init();
// D.makeParticle();//这样是异步的，会导致拿不到