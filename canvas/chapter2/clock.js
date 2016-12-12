// const

class Clock {
    constructor(props) {
        this.c = props;
        this.x = 100;
        this.y = 100;
        this.width = 30;
        this.height = 20;
        this.degrees = 45;
    }
    init(){
        // c === canvas.context
        const c = this.c;
        c.fillStyle = "reb(80,80,120)";
        c.strokeStyle = "red";

        c.fillRect(this.x,this.y,this.width,this.height);

        c.save();

        c.rotate(this.degrees * Math.PI / 180);
        c.scale(1,1);

        c.translate(1,1);
        c.restore();
        c.fillStyle = "gold";
        c.fillRect(this.x,this.y,this.width,this.height);
    }
}

module.exports = Clock;