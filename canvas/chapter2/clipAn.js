const _ = require("../../until/until");
let c;

class ClipAn {
    constructor(props){
        c = this.context = props.ctx;
        this.canvas = props.obj;



        this.fillCanvas = (color) => {
            c.save();
            c.fillStyle = color;
            c.fillRect(0,0,this.canvas.width,this.canvas.height);
            c.restore();
        }
        this.drawText = () => {
            c.save();
            c.shadowColor = "rgba(100, 100, 150, 0.8)";
            c.shadowOffsetX = 5;
            c.shadowOffsetY = 5;
            c.shadowBlur = 10;

            c.fillStyle = "cornflowerblue";
            c.fillText("HTML5", 20, 250);
            c.strokeStyle = "yellow";
            c.strokeText("HTML5", 20, 250);
            c.restore();
        }
        this.drawAni = (radius) => {
            c.beginPath();
            c.arc(this.canvas.width/2,this.canvas.height/2,
                radius,0,Math.PI * 2,false
            )
            c.clip()

            this.fillCanvas("#eee")
            this.drawText();
        }
        this.endAni = (loop) => {
            // console.log(loop)
            window.cancelAnimationFrame(loop);

            setTimeout(() => {
                c.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.drawText();
            })
        }
    }

    animate(){
        let radius = this.canvas.width /2;
        let step = this.canvas.width/150;
        // _.raf();c
        let loop;

        const stepFunction = () => {
            radius -= step
            // 先填充
            this.fillCanvas("#000");

            if(radius > 0) {
                c.save();
                this.drawAni(radius)
                c.restore();
            } else {
                this.endAni(loop)
                return;
            }
            loop = window.requestAnimationFrame(stepFunction)
        }

        loop = window.requestAnimationFrame(stepFunction)
    }

    init(){
        this.canvas.onmousedown = (e) => {
                this.animate()
        }
    }
}

module.exports = ClipAn;

