/**
 * Created by renren on 16/6/24.
 */

const ca = document.getElementById("world");
const c = ca.getContext("2d");
c.b = () => c.beginPath();

const pi = Math.PI;

const Clock = require("./chapter2/clock");

const newClock = new Clock(c);

newClock.init();
