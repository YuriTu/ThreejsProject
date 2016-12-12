/**
 * Created by renren on 16/6/24.
 */
const canvas = {};
canvas.obj = document.getElementById("world");
canvas.ctx = canvas.obj.getContext("2d");
const pi = Math.PI;




const Grid = require("./common/drawGrid");
const grid = new Grid(canvas);
grid.draw("lightgray", 10, 10);

// const Clock = require("./chapter2/clock");
// const newClock = new Clock(canvas);
// newClock.draw();







