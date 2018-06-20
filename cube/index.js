// import * as THREE from 'three';
import Status from 'stats.js';
const stats = new Status();
// import _ from "christina";
import Physijs from './lib/physi'
import TrackballControls from 'three-trackballcontrols';
import {Animator} from "./animator";

const SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight;
let windowHalfX = window.innerHeight / 2,
    windowHalfY = window.innerWidth / 2;
let renderer,camera, scene;

window.Physijs.scripts.worker = './physijs_worker.js';
window.Physijs.scripts.ammo = './ammo.js';


class Main {
    constructor(){
        this.antiResize = () => {
            window.addEventListener('resize',() => {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
                renderer.setSize(window.innerWidth,window.innerHeight);
            },false)
        }

        this.initScene = () =>{
            // init stats
            stats.showPanel(0);
            document.body.appendChild(stats.dom);

            const container = document.querySelector('.ani-container');
            // scene = new THREE.Scene();
            scene = new window.Physijs.Scene();
            scene.setGravity(new THREE.Vector3(0, -10 ,0));
            camera = new THREE.PerspectiveCamera(45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 1000);
            window.scene = scene;
            camera.position.z = 100;
            camera.position.x = 0;
            camera.position.y = 0;

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(SCREEN_WIDTH,SCREEN_HEIGHT);
            // 设置画布比例，防止 出现模糊画布
            renderer.setPixelRatio( window.devicePixelRatio);
            container.appendChild(renderer.domElement);
            // scene.add()

            this.antiResize();

        }
        this.initDevTool = () => {
            // axes
            scene.add(new THREE.AxesHelper(2000));

            this.controls = new TrackballControls(camera);
            this.controls.rotateSpeed = 1.0;
            this.controls.zoomSpeed = 1.2;
            this.controls.panSpeed = 0.8;
            this.controls.noZoom = false;
            this.controls.noPan = false;
            this.controls.staticMoving = true;
            this.controls.dynamicDampingFactor = 0.3;
            this.controls.keys = [65, 83, 68];
            this.controls.addEventListener('change', () => {
                this.render();
            });
        };
    }


    init (){
        this.initScene();
        this.initDevTool();
        this.animator = new Animator({
            scene:scene
        });
    }
    animate(){
        stats.update();
        this.render();
        // _.raf(this.animate.bind(this));
        this.controls && this.controls.update();
        this.animator.update();

        requestAnimationFrame(this.animate.bind(this));


    }
    render(){
        camera.lookAt(scene.position);
        renderer.render(scene,camera);
        scene.simulate(undefined, 1);

    }
}

const m = new Main();
m.init();
m.animate();
