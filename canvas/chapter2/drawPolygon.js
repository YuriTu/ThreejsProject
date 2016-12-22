const _ = require("../../until/until");
let c;

class Polygon {
    constructor(props){
        c = this.context = props.ctx;
        this.canvas = props.obj;

        this.mousedown = {
            x:null,
            y:null,
        }
        this.isdrop = false;

        // 获取相对于canvas 的坐标
        this.windowToCanvas = (e) => {
            // clent 相对于浏览器当前窗口
            let x = e.x || e.clientX,
                y = e.y || e.clientY;
            // 绝对宽高 this.canvas  而 box 是可以被 转换的 ，
            let box = this.canvas.getBoundingClientRect();

            // 真实canvasleft坐标 = box left 相对坐标 * 横向缩放比例
            return {
                x: x - box.left * (this.canvas.width/box.width),
                y: y - box.top * (this.canvas.height/box.height)
            };
        }

        this.updateCanvas = (loc,sides,startAngle) => {
            this.drawRubberbandShape(loc,sides,startAngle);
        }
        this.drawRubberbandShape = (loc,sides,startAngle) => {
            let length = _.pythagoras(loc.x - this.mousedown.x,loc.y - this.mousedown.y,null);

            c.save()
            c.beginPath();
            let origin = {
                x:this.mousedown.x,
                y:this.mousedown.y,
            }
            c.moveTo(this.mousedown.x,this.mousedown.y);
            // c.lineTo(origin.x - length,origin.y);
            let angle = 2 * Math.PI / sides;
            for(let i =0;i<=sides;i++){
                console.log(angle *i)

                c.lineTo(
                    origin.x + Math.sin(angle * i) * length,
                    origin.y + Math.cos(angle * i) * length,
                )
            }
            c.stroke();
            c.closePath();
            c.restore();
            c.fill();
        }

        this.drawGuidewires = (x,y) => {
            c.save();
            c.strokeStyle = "#999";
            c.lineWidth = 0.5;
            this.drawVertical(x);
            this.drawHorizontal(y);
            c.restore();
        }
        this.drawVertical = (x) => {
            c.beginPath();
            c.moveTo(x,0);
            c.lineTo(x,this.canvas.height)
            c.stroke();
        }
        this.drawHorizontal = (y) => {
            c.beginPath();
            c.moveTo(0,y);
            c.lineTo(this.canvas.width,y);
            c.stroke();
        }
    }
    init(){
        this.canvas.onmousedown = (e) => {
            const loc = this.windowToCanvas(e);

            e.preventDefault();

            this.mousedown.x = loc.x;
            this.mousedown.y = loc.y;
            this.isdrop = true;

        }
        this.canvas.onmousemove = (e) => {
            if( this.isdrop) {
                e.preventDefault();

                let loc = this.windowToCanvas(e)

                this.drawGuidewires(loc.x,loc.y)

            }
        }
        this.canvas.onmouseup = (e) => {
            const loc = this.windowToCanvas(e);
            this.isdrop = false;

            this.updateCanvas(loc,9,0)

        }

    }
}

module.exports = Polygon;

