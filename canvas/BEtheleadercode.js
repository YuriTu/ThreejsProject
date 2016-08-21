/**
 * Created by renren on 16/6/24.
 */


var ca = document.getElementById('world')
var c = ca.getContext("2d")

var sides = 5,
    size = 200,
    x = 400,
    y = 400;

window.requestAnimationFrame = function () {
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function (callback) {
            window.setTimeout(callback,24)//1000/60
        }
}
var init;
var stats;
init = {
    init:function () {
        stats = new Stats();
        stats.setMode(0) //0 fps 帧数 1ms毫秒 2mb

        stats.domElement.style.position



    },
    stars :[],

    draw:function () {
        stats.begin();


    },
    // 用es6的class多方便
    Star:function () {
        this.x;
        this.y;
        this.radius;
        this.opacity;
        this.loopNum;
        this.draw = function (c) {
            c.save();
            // drawit
            c.fillStyle = "#fff"
            c.beginPath()
            c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
            c.closePath()
            c.fill()//填充
            // 上色
            c.restore()
        }
    }

}


function generateStars() {
    for (var i = 0;i < 50;i++){

    }
}

if(ca.getContext){
    var c = ca.getContext("2d")
    c.beginPath()


    // c.moveTo(x + size * Math.sin(0),y + size * Math.cos(0))
    //
    // for (var i= 1; i<= sides;i++){
    //     c.lineTo(
    //         x + size * Math.sin(i * 2 * Math.PI /sides ),
    //         y + size * Math.cos(i * 2 * Math.PI /sides )
    //     )
    // }
    // c.closePath()
    // c.strokeStyle = "#ff0000"
    // c.lineWidth = 1
    // c.stroke()

    // c.moveTo(400,400)//中心 72°
    // c.lineTo(400,100)
    // c.arc(400,400,300,0,0,false)
    // c.closePath()
    // c.fillStyle = "#ff0000"
    // c.lineWidth = 1
    // c.stroke()

    // c.beginPath()
    // c.arc(100,100,300,0,Math.PI * 2,true)
    // c.lineWidth = 8;
    // c.strokeStyle = "#000"
    // c.stroke();


    // c.moveTo(200,200)
    // c.font = 'bold 50px Arial'
    // c.textAlign = 'left'
    // c.fillStyle = "#ff0000"
    // c.fillText("the world",25,25)//实心
    // c.strokeText('dio',50,50)//空心

    // c.beginPath()
    // c.moveTo(20,20)
    // c.lineTo(100,100)
    // c.lineTo(150,300)
    // c.lineTo(200,20)
    // c.closePath()
    //
    // c.lineWidth = 5
    // c.strokeStyle = "#ff0000"
    // c.stroke()

    // var img = new Image()
    // img.onload = function () {
    //     cxt.drawImage(img,0,0)
    // }
    // img.src = "img1.jpg"

    // var grd = cxt.createLinearGradient(150,75,150,225)
    // grd.addColorStop(0,"#ff0000")
    // grd.addColorStop(1,"#00ff00")
    // grd.addColorStop(0.5,"#0000ff")
    // grd.addColorStop(0.25,"#0000ff")
    // cxt.fillStyle = grd;
    // cxt.fillRect(0,0,300,300)
}