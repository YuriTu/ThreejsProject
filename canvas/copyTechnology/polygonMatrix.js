let c = {},
    ctx,
    tick = 0,
    w,
    h,
    lines = [];
    opts = {
        count:50,
        spawnChance:1,//产生线条的几率
        repaintAlpha:0.04,//重绘的透明度
    }
    ;



class Line {
    constructor(){

    }
    reset(){
        this.x = 0;
        this.y = 0;
        this.addedX = 0;
        this.addedY = 0;
        this.rad = 0;
        this.beginPhase();
    }
    beginPhase(){

    }
    step(){

    }

}


class Matrix {
    constructor(props){
        ctx = c.ctx = props.ctx;
        c.obj = props.obj;
        w = props.obj.width;
        h = props.obj.height;
    }
    step(){
        requestAnimationFrame(this.step.bind(this));
        tick++;
        ctx.globalCompositeOperation = "source-over";
        ctx.shadowBlur = 0;//清楚模糊

        // 尾部效果  透明度是0.4 所以是遮挡了部分
        ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`;
        ctx.fillRect(0,0, w,h);

        //再次更改覆盖方式，为之后的绘制做准备  ???
        ctx.globalCompositeOperation = "lighter";

        if(lines.length < opts.count
            && Math.random() < opts.spawnChance
        ){
            lines.push(new Line);
        }
        lines.map((line) => {
            line.step();
        })



    }
    init(){
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    }
}