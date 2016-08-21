/**
 * Created by renren on 16/6/24.
 */


let ca = document.getElementById('world')
let c = ca.getContext("2d")

let sides = 5,
    size = 200,
    x = 400,
    y = 400;
// text

c.font = '24px Helvetica'
c.fillText('dio:jojo The World!!!',175,200);

c.textBaseline = 'middle'
c.textAlign = 'center'
// right ract
c.lineJoin = 'round'
c.lineWidth =30;
c.strokeStyle = 'goldenrod'
c.strokeRect(325,100,200,200);
// left reac
let gradient = c.createLinearGradient(0,0,ca.width,0)
gradient.addColorStop(0.5,'#ff0000')
gradient.addColorStop(0.75,'#00ff00')
gradient.addColorStop(1,'#0000ff')

c.fillStyle = gradient;
c.fillRect(75,100,200,200);
c.rect(0,0,100,100);




c.canvas.onmousedown = function () {
    c.clearRect(0,0,500,300);
}


