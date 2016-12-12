// const
let c;
class Clock {
    constructor(props) {
        c = this.ctx = props.ctx;
        this.canvas = props.obj;
        this.init = () => {
            this.cen_ss = "rgba(0, 0, 0, 0.5)";
            this.cen_fs = "rgba(80, 190, 240, 0.6)";
            this.cen_radius = 10;


            this.guide_ss = "goldenrod";
            this.guide_fs = "rgba(250, 250, 0, 0.6)";

            this.tick_long_ss = "rgba(100, 140, 230, 0.9)";
            this.tick_sh_ss = "rgba(100, 140, 230, 0.7)";
            this.tick_dial_ss = "rgba(100, 140, 230, 0.5)";

            this.tick_width = 10;

            this.ring_outer = 55;

            this.ring_inner = 35;
            this.circle = {
                x      : this.canvas.width / 2,
                y      : this.canvas.height / 2,
                radius : 150,
            };
            this.loc = {
                x : this.circle.x,
                y : this.circle.y,
            };
        };
    }
    draw(){
        this.init();
        this.drawCentroid();
        this.drawCenGuide(this.loc);
        this.drawRing();
        this.drawTickInnerCircle();
        this.drawTicks();
        this.drawText()
    }
    drawCentroid(){
        c.beginPath();
        c.save();
        c.strokeStyle = this.cen_ss;
        c.fillStyle = this.cen_fs;
        c.arc(this.circle.x, this.circle.y, this.cen_radius, 0, Math.PI * 2, false);

        c.stroke();
        c.fill();
        c.restore();
    }
    drawCenGuide(loc){
        const angle = -Math.PI / 4 * 3 ;
        const radius = this.circle.radius + this.ring_outer;
        let endpt;

        if (loc.x >= this.circle.x){
            endpt = {
                x : this.circle.x + Math.cos(angle) * radius,
                y : this.circle.y + Math.sin(angle) * radius,
            };
        } else {
            // 其实应该是走不到的，应为loc是固定的
            endpt = {
                x : this.circle.x - Math.cos(angle) * radius,
                y : this.circle.y - Math.sin(angle) * radius,
            };
        }
        c.save();

        c.strokeStyle = this.guide_ss;
        c.fillStyle = this.guide_fs;

        c.beginPath();
        c.moveTo(this.circle.x, this.circle.y);
        c.lineTo(endpt.x, endpt.y);
        c.stroke();

        c.beginPath();
        c.strokeStyle = this.tick_long_ss;
        c.arc(endpt.x, endpt.y, 5, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();

        c.restore();
    }
    drawRing(){
        this.drawRingOuterCircle();
        c.strokeStyle = "rgba(0, 0, 0, 0.1)";
        c.arc(this.circle.x, this.circle.y, this.circle.radius + this.ring_inner, 0, Math.PI * 2, false);
        c.fillStyle = "rgba(100, 140, 230, 0.1)";
        c.fill();
        c.stroke();

    }
    drawRingOuterCircle(){
        c.shadowColor = "rgba(0, 0, 0, 0.7)";
        c.shadowOffsetX = 3;
        c.shadowOffsetY = 3;
        c.shadowBlur = 6;
        c.strokeStyle = this.tick_dial_ss;
        c.beginPath();
        c.arc(this.circle.x, this.circle.y, this.circle.radius + this.ring_outer, 0, Math.PI * 2, true);
        c.stroke();
        c.restore();
    }
    drawTickInnerCircle(){
        c.save();
        c.beginPath();
        c.strokeStyle = "rgba(0, 0, 0, 0.1)";
        c.arc(this.circle.x, this.circle.y, this.circle.radius + this.ring_inner - this.tick_width, 0, Math.PI * 2, false);
        c.stroke();
        c.restore();
    }

    drawTick(angle, radius, cnt){
        const tickWidth = cnt % 4 === 0 ? this.tick_width : this.tick_width / 2;

        c.beginPath();

        c.moveTo(
            this.circle.x + Math.cos(angle) * (radius - tickWidth),
            this.circle.y + Math.sin(angle) * (radius - tickWidth)
        );
        c.lineTo(
            this.circle.x + Math.cos(angle) * (radius),
            this.circle.y + Math.sin(angle) * (radius)
        );
        c.strokeStyle = this.tick_sh_ss;
        c.stroke();
    }

    drawTicks(){
        let radius = this.circle.radius + this.ring_inner,
            angle_max = Math.PI * 2,
            angle_delta = Math.PI / 64,
            tickWidth;
        c.save();
        let cnt = 0
        for (let angle = 0;angle < angle_max;cnt++){
            angle += angle_delta;
            this.drawTick(angle, radius, cnt++);
        }
        c.restore();
    }

    drawText(){
        const radius = this.circle.radius + this.ring_inner;
        c.save();
        const ANNOTATIONS_FILL_STYLE = "rgba(0, 0, 230, 0.9)",
              ANNOTATIONS_TEXT_SIZE = 12;
        c.fillStyle = ANNOTATIONS_FILL_STYLE;
        c.font = ANNOTATIONS_TEXT_SIZE + "px";
        for(let angle =0;angle < 2*Math.PI; angle += Math.PI/4){
            c.beginPath();
            c.fillText((angle*180 /Math.PI).toFixed(0),
            this.circle.x + Math.cos(angle) * (radius - this.tick_width *2),
            this.circle.y + Math.sin(angle) * (radius - this.tick_width *2)
            )
        }
        c.restore()
    }
}


module.exports = Clock;