require('./basic.scss')

const Three = require('three')

let color = {
    red:0xf25346,
    white:0xd8d0d1,
    brown:0x59332e,
    pink:0xF5986E,
    brownDark:0x23190f,
    blue:0x68c3c0
}

window.addEventListener('load',init,false);

function init() {
    createScene();
    createLights();
    createPlane();

    createSea();
    createSky();

    loop();
}

function createScene() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();

    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950)
}