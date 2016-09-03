/**
 * Created by renren on 16/6/24.
 */

let ca = document.getElementById('world')
let c = ca.getContext("2d")
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
    drawBG(){
        // c.b()
        c.fillStyle = '#666666';
        this.myRect(100,100,500,500)
        // c.fill()

    }
    drawRect(){
        // c.b();
        c.rect(300,150,50,50)
        // c.fill()
        // c.closePath()
    }
    drawCir(){
        // c.b()
        c.arc(400,500,50,0,pi*2)
        // c.fill()
        // c.closePath()
    }

    myRect(x,y,w,h){
        // c.b();
        c.moveTo(x,y)
        c.lineTo(x,y + h)
        c.lineTo(x+w,y + h)
        c.lineTo(x+w,y)
        // c.closePath();
    }
    shadow(){
        c.shadowColor = 'rgba(0,0,0,0.5)';
        c.shadowOffsetX = 10;
        c.shadowOffsetY = 10;
        c.shadowBlur = 10;
    }
}

let C = new Canvas();
C.drawDefault();

C.drawGrid(0.5,'lightgray',10,10)
C.drawAxes()