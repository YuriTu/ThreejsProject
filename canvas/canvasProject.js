/**
 * Created by renren on 16/6/24.
 */

let ca = document.getElementById('world')
let c = ca.getContext("2d")
c.b =()=> c.beginPath();
const pi = Math.PI;
class Canvas {
    constructor(){
        this.shadow = 'rgba(0,0,0,0.7)';
        this.red = 'rgba(255,0,0,1)';
    }

    draw(){
        c.strokeStyle = this.red;
        c.shadowColor = this.shadow;
        c.shadowOffsetX = 5;
        c.shadowOffsetY = -5;
        c.shadowBlur = 10;
        c.strokeRect(75,100,200,200);
    }
    drawDefault(){
        c.font = '24px arial';
        c.lineWidth = '2';
    }
    drawStrokeText(text){
        c.strokeStyle = '#ff0000';
        c.strokeText(text,100,100);
    }
    drawFillText(text){
        c.fillStyle = '#00ff00';
        c.fillText(text,300,100);
    }
    drawFillStrokeText(text){
        c.fillStyle = '#0000ff';
        c.strokeStyle= '#00ff00';
        c.fillText(text,600,100);
        c.strokeText(text,600,100)
    }
    fillRect(){
        c.beginPath();
        c.rect(100,300,100,100);
        c.rect(300,300,150,150);
        c.stroke()
        c.fill();
    }
    strokeRect(){
        c.lineWidth = '5';
        c.beginPath();
        c.rect(300,300,150,50);
        c.closePath();
        c.stroke()
        c.fill()
    }
    fillCirCle(){
        c.b();
        c.arc(100,500,20,0,Math.PI*3/2);
        c.fill();
    }
    strokeCirCle(){
        c.b();
        c.arc(300,500,100,0,pi*2,false);
        c.arc(300,500,80,0,pi*2,true);
        // c.closePath();
        // c.stroke();
        this.shadCir()
        c.fill();
    }
    shadCir(){
        c.shadowColor = 'rgba(0,0,0,0.5)';
        c.shadowOffsetX = 10;
        c.shadowOffsetY = 10;
        c.shadowBlur = 10;
    }
}

let C = new Canvas();
C.drawDefault();
C.drawStrokeText('hello world stroke');
// C.drawFillText('the world - fill');
// C.drawFillStrokeText('dio! - fill stroke');
// C.fillRect();
// C.strokeRect();
// C.fillCirCle();
C.strokeCirCle();
//
// var context = document.getElementById('canvas').getContext('2d');
//
// // Functions..........................................................
//
// function drawGrid(context, color, stepx, stepy) {
//     context.save()
//
//     context.strokeStyle = color;
//     context.lineWidth = 0.5;
//
//     for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
//         context.beginPath();
//         context.moveTo(i, 0);
//         context.lineTo(i, context.canvas.height);
//         context.stroke();
//         context.closePath();
//     }
//     for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
//         context.beginPath();
//         context.moveTo(0, i);
//         context.lineTo(context.canvas.width, i);
//         context.stroke();
//         context.closePath();
//     }
//     context.restore();
// }
//
// // Initialization.....................................................
//
// drawGrid(context, 'lightgray', 10, 10);
//
