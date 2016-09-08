/**
 * Created by renren on 16/6/24.
 */

let ca = document.getElementById('world');
let c = ca.getContext("2d");
c.b =()=> c.beginPath();
const pi = Math.PI;
const config = {
    margin : 40,
    origin : {x:40,y:(c.canvas.height-40)},
    verticalSpace:10,
    horizontalSpace:10,
    tickWidth:10,
    tickLineWidth:0.5,
    tickColor:'navy',
    axisLineWidth:1,
    axisColor : "red",
}
config.top = config.margin;
config.right = c.canvas.width - config.margin;
config.width = config.right - config.origin.x,
config.height = config.origin.y - config.top;
config.verticalTicks = config.height/config.verticalSpace;
config.horizontalTicks = config.width/config.horizontalSpace;

class Canvas {
    constructor(){
        this.shadowColor = 'rgba(0,0,0,0.7)';
        this.red = 'rgba(255,0,0,1)';
    }

    drawDefault(){
        c.font = '24px arial';
        c.lineWidth = '2';
        c.strokeStyle = '#ff0000'
    }
    drawGrid(width,color,stepx,stepy){
        c.lineWidth = width;
        c.strokeStyle = color;
        // width
        for(let i = stepx;i<c.canvas.width;i+= stepx){
            c.b();
            c.moveTo(i,0);
            c.lineTo(i,c.canvas.height)
            c.stroke()
        }
        for(let i = stepy;i<c.canvas.height;i+= stepy){
            c.b();
            c.moveTo(0,i);
            c.lineTo(c.canvas.width,i);
            c.stroke();
        }

    }
    drawAxes(){
        const d = config;
        c.save()
        c.strokeStyle = d.axisColor;
        c.lineWidth = d.axisLineWidth;
        this.drawHorAxis()
        this.drawVerAxis()

        c.lineWidth = 0.5;
        c.strokeStyle = d.tickColor;
        this.drawHorTick()
        this.drawVerTick()
        c.restore()
    }
    drawHorAxis(){
        c.b();
        c.moveTo(config.origin.x,config.origin.y)
        c.lineTo(config.right,config.origin.y)
        c.stroke();
    }
    drawVerAxis(){
        c.b()
        c.moveTo(config.origin.x,config.origin.y)
        c.lineTo(config.origin.x,config.top)
        c.stroke()
    }
    drawVerTick(){
        let x;
        for(let i = 1;i< config.verticalTicks;i++){
            c.b()
            if( i % 5 === 0){
                x = config.tickWidth
            }else{
                x = config.tickWidth / 2;
            }
            c.moveTo(config.origin.x - x,
                config.origin.y - i * config.verticalSpace

            )
            c.lineTo(config.origin.x + x,
                config.origin.y - i * config.verticalSpace,

            )
            c.stroke()
        }
    }
    drawHorTick(){
        let y;
        for (let i = 1;i< config.horizontalTicks;i++){
            c.b()
            if( i % 5 === 0){
                y = config.tickWidth;
            }else{
                y = config.tickWidth/2;
            }
            c.moveTo(config.origin.x + i * config.horizontalSpace,
                config.origin.y - y
            );
            c.lineTo(
                config.origin.x + i * config.horizontalSpace,
                config.origin.y + y
            )
            c.stroke()
        }


    }

    shadow(){
        c.shadowColor = 'rgba(0,0,0,0.5)';
        c.shadowOffsetX = 10;
        c.shadowOffsetY = 10;
        c.shadowBlur = 10;
    }
}

class Print {
    constructor(){
        //记录整个画布的所有像素数据
        this.imageData = null;
        // 拖动flag
        this.dragging = false;
        // 起始坐标
        this.mousedown = {
            x:null,
            y:null,
        };
        this.activeRect = {
            width:null,
            height:null,
        }
    }

    // 获取相对于画布的坐标
    windowToCanvas(x,y){
        let table = ca.getBoundingClientRect()
        // x-实际高度 table.left 画布距离client的距离
        // ca.width 画布大小 / table.width 当前元素大小  应该是指缩放率
        return {
            x : x - table.left * (ca.width / table.width),
            y : y - table.top  * (ca.height / table.height)
        }
    }
    saveState(){
        // 将当前的状态打到 imgdata中去,准备绘制
        // 记录整个画布的所有像素数据
        this.imageData = c.getImageData(0,0,ca.width,ca.height)
    }
    update(loc){
        this.updateLine(loc)
        this.updateFill(loc)
    }
    // 保存所有经过的坐标
    saveMove(){
        c.putImageData(this.imageData,0,0)
    }
    // 绘制拖动路径片段
    updateLine(loc){
        // loc为目前的坐标 mousedown 为第一次坐标
        this.activeRect.width = Math.abs(loc.x - this.mousedown.x);
        this.activeRect.height = Math.abs(loc.y - this.mousedown.y);
        // 往右边画
        if(loc.x > this.mousedown.x ){
            this.activeRect.left = this.mousedown.x;
        }else{
            this.activeRect.left = loc.x
        }
        if(loc.y > this.mousedown.y){
            this.activeRect.top = this.mousedown.y;
        }else{
            this.activeRect.top = loc.x;
        }
        c.save();
        c.strokeStyle = 'red';
        c.restore();
    }
    // 划线
    updateFill(loc){
        c.b();
        c.lineWidth = 1;
        c.strokeStyle = '#000'
        c.moveTo(this.mousedown.x,this.mousedown.y)
        c.lineTo(loc.x,loc.y)
        c.stroke();
    }
    // 画圆
    updateFill(loc){

    }

    // 画跟随坐标线
    drawGuidewires(x,y){
        c.save();//保存目前的状态因为要新开一个了 可以理解成图层
        c.strokeStyle = 'red';
        c.lineWidth = 0.5
        this.drawVertical(x)
        this.drawHor(y)
        c.restore();
    }
    drawVertical(x){
        c.b()
        c.moveTo(x,0)
        c.lineTo(x,c.canvas.height)
        c.stroke()
    }
    drawHor(y){
        c.b();
        c.moveTo(0,y)
        c.lineTo(c.canvas.width,y)
        c.stroke();
    }



}
// 绘制画布坐标
let C = new Canvas();
C.drawDefault();

C.drawGrid(0.5,'lightgray',10,10)
C.drawAxes()

// 曲线绘制
//
//
// let P = new Print();
// ca.onmousedown =(e)=>{
//     // 获得相对比画布的坐标
//     let loc = P.windowToCanvas(e.clientX,e.clientY)
//     // 阻止默认事件,例如鼠标的选中,拖放
//     e.preventDefault();
//     // 保存当前的状态
//     P.saveState();
//     P.mousedown.x = loc.x;
//     P.mousedown.y = loc.y;
//     P.dragging = true;
// }
// ca.onmousemove =(e)=>{
//     if(P.dragging){
//         e.preventDefault()
//         // 拿到目前的坐标
//         let loc = P.windowToCanvas(e.clientX,e.clientY);
//         // 如果报错所有线段，就会画出所有的路径
//         // P.saveState();
//         // 如果只是记录，就是一条
//         P.saveMove()
//         // 划线
//
//
//         P.drawGuidewires(loc.x,loc.y)
//
//         P.update(loc)
//
//     }
// }
// ca.onmouseup = (e) =>{
//     let loc = P.windowToCanvas(e.clientX,e.clientY);
//     P.saveMove()
//     P.update(loc);
//     P.dragging = false;
// }
//
//


class RoundRect {
    drawRound(cornerX,cornerY,width,height,radius){
        c.arcTo(cornerX + width,cornerY,);
    }
    test(){
        c.b()
        //
        c.moveTo(100, 100)

        c.arcTo(10,10,30,20,10)
        // c.lineTo(130,100)
        c.strokeStyle = 'red'
        c.fillStyle = 'pink'
        c.stroke()
        c.fill()
    }
}

let RR = new RoundRect();

RR.test()

