import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'
import Status from 'stats.js';


const stats = new Status();
import _ from '../../until/until';
const SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight;
let windowHalfX = SCREEN_WIDTH / 2,
    windowHalfY = SCREEN_HEIGHT / 2;
let renderer,camera, scene;

let url = ['./blender1.json','./blender2.json']

const config = {
    cameraX:0,
    cameraY:0,
    cameraZ:200,
    cameraMoveRat:0.001,
    cameraSpeed:.2,
}

class Main {
    constructor(){
        this.count = 0;
        this.step = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();

        this.antiResize = () => {
            window.addEventListener('resize',() => {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
                renderer.setSize(window.innerWidth,window.innerHeight);
            },false)
        }
        this.createSprite = () => {
            let canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            let ctx = canvas.getContext('2d');
            let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
            gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width,canvas.height);

            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }
        this.handleEvent = () => {
            document.addEventListener('mousemove',(e) => {
                this.mouseX = e.clientX - windowHalfX;
                this.mouseY = e.clientY - windowHalfY;

                this.mouse.x = (e.clientX / SCREEN_WIDTH) * 2 -1;
                this.mouse.y = -(e.clientY / SCREEN_HEIGHT) * 2 +1;
            })

            this.antiResize();
        }
        this.setCamera = () => {
            let increX = camera.position.x + (this.mouseX / windowHalfX) * config.cameraSpeed;
            let increY = camera.position.y + (-this.mouseY / windowHalfY) * config.cameraSpeed;

            if(Math.abs(increX) < 15){
                camera.position.x = increX
            }
            if(Math.abs(increY) < 10){
                camera.position.y = increY;
            }

        }
        this.setRaycaster = () => {
            this.raycaster.setFromCamera(this.mouse,camera);
                let interactive = this.raycaster.intersectObjects(scene.children);
                console.log(interactive)
                interactive.forEach(i => {
                i.object.material.color.set( 0xffffff );
            })
        }
        this.moduleLoader = (url) => {
            return new Promise((resolve,reject) => {
                let loader = new THREE.JSONLoader();
                loader.load(url,(geo,mat) => {
                    let material = new THREE.PointsMaterial({
                        size:3,
                        // vertexColors:true,
                        color:0xffffff,
                        opacity:.5,
                        transparent:true,
                        // 这个好像没生效
                        blending: THREE.AdditiveBlending,
                        map:this.createSprite(),
                    })
                    let module = new THREE.Points(geo,material);
                    module.sortParticles = true;
                    module.scale.set(20,20,20);
                    resolve({geometry:geo,material,module});
                })

            })
        }
        this.createModule = () => {
            console.log(typeof Promise.all)
            Promise.all([this.moduleLoader(url[0]),this.moduleLoader(url[1])])
                .then(rs => {
                this.module1 = rs[0].module;
                this.module2 = rs[1].module;
                scene.add(this.module1);

                this.initAnimator();

                this.animate();
            })
        }
        this.initAnimator = () => {
            let m1 = this.module1.geometry.vertices; //400 +
            let m2 = this.module2.geometry.vertices;
            for (let i = 0;i <m1.length;i++){
                let index = (i > m2.length - 1)?( i % m2.length):i;
                // 当然直接 m1 -> m2 也可以，但是害怕merge掉了其他什么东西...
                let ani2 = new TWEEN.Tween(m1[i]).to({
                    x:m2[index].x,
                    y:m2[index].y,
                    z:m2[index].z
                },2000)
                    .easing(TWEEN.Easing.Sinusoidal.InOut)
                    .delay(Math.random() * 1000)
                    .start();
                // 先打散，再重组
                let ani1 = new TWEEN.Tween(m1[i])
                    .to({
                        x:Math.random() * 5,
                        y:Math.random() * 5,
                        z:Math.random() * 5
                    },2000)
                    .delay(500)
                    .start().chain(ani2)

            }
            let position = new TWEEN.Tween(this.module1.position).to({
                x:100,
                y:50 * Math.random()
            },2000).start()

            console.log(scene)
        }
        this.action = () => {
            this.setCamera();
            // this.setRaycaster();
            // this.move();
            this.module1.geometry.verticesNeedUpdate=true;
            this.count++;

        }
    }
    init(){
        // init stats
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        const container = document.querySelector('.ani-container');
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 1000);
        camera.position.z = config.cameraZ;
        camera.position.x = config.cameraX;
        camera.position.y = config.cameraY;

        renderer = new THREE.WebGLRenderer( {antialias:true} )
        renderer.setSize(SCREEN_WIDTH,SCREEN_HEIGHT);
        // 设置画布比例，防止 出现模糊画布
        renderer.setPixelRatio( window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        // axes
        let axes = new THREE.AxisHelper(2000);
        scene.add(axes);
        // plane
        let planeGeometry = new THREE.PlaneGeometry(100,100);
        let planeMaterial = new THREE.MeshLambertMaterial({'color':0xffffff});
        let plane = new THREE.Mesh(planeGeometry,planeMaterial);
        // scene.add(plane);
        // light
        let ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        // scene.add()
        this.handleEvent();
        this.createModule();
    }
    animate(){
        _.raf(this.animate.bind(this));
        stats.update();
        TWEEN.update();
        this.render();
    }
    render(){
        camera.lookAt(scene.position);
        this.action();
        renderer.render(scene,camera);
    }
}

const m = new Main();
m.init();
