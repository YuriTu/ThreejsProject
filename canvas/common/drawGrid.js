class Grid {
    constructor(props){
        this.context = props.ctx;
        this.canvas = props.obj;
    }
    draw(color, stepx, stepy){
        const c = this.context;
        const canvas = this.canvas;
        this.color = color || "#000";
        this.stepx = stepx || 10;
        this.stepy = stepy || 10;
        c.save();
        // 清除其他因素的影响
        c.shadowColor = undefined;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.strokeStyle = this.color;
        c.fillStyle = "#fff";
        c.lineWidth = 0.5;
        c.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = this.stepx + 0.5;i < canvas.width; i += this.stepx){
            c.beginPath();
            c.moveTo(i, 0);
            c.lineTo(i, canvas.height);
            c.stroke();
        }

        for (let i = this.stepy + 0.5;i < canvas.height; i += this.stepy){
            c.beginPath();
            c.moveTo(0, i);
            c.lineTo(canvas.width, i);
            c.stroke();
        }
        c.restore();
    }
}

module.exports = Grid;