import * as THREE from 'three';

import Status from 'stats.js';
const stats = new Status();
import _ from './christina';
const SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight;
let windowHalfX = window.innerHeight / 2,
    windowHalfY = window.innerWidth / 2;
let renderer,camera, scene;

class Main {
    constructor(){
        this.antiResize = () => {
            window.addEventListener('resize',() => {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
                renderer.setSize(window.innerWidth,window.innerHeight);
            },false)
        }
    }
    init(){
        // init stats
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        const container = document.querySelector('.ani-container');
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 1000);
        camera.position.z = 1000;
        camera.position.x = 10;
        camera.position.y = 10;

        renderer = new THREE.WebGLRenderer( {antialias:true} )
        renderer.setSize(SCREEN_WIDTH,SCREEN_HEIGHT);
        // 设置画布比例，防止 出现模糊画布
        renderer.setPixelRatio( window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        // axes
        let axes = new THREE.AxisHelper(2000);
        scene.add(axes);
        // scene.add()

        this.antiResize();




    }
    animate(){
        stats.update();
        this.render();
        console.log(_)
        _.raf(this.animate.bind(this));

    }
    render(){
        camera.lookAt(scene.position);
        renderer.render(scene,camera);

    }
}

const m = new Main();
m.init();
m.animate();
