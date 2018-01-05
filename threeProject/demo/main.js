import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'
import Status from 'stats.js';

import {Picker} from 'hi-ui'
console.log(Picker)
const stats = new Status();
import _ from '../../until/until';
import Particle from './components/particle'
const SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight;
let windowHalfX = SCREEN_WIDTH / 2,
    windowHalfY = SCREEN_HEIGHT / 2;
let renderer,camera, scene;

const pi = Math.PI;
const pis = pi / 50;
let url = ['./blender1.json','./blender2.json']

const config = {
    cameraX:0,
    cameraY:0,
    cameraZ:50,
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
        this.particles = [];
        this.particleOpts = {
            rings:8,
            radius:2,
            radiusStep: 1.5
        };
        this.particleGroup = new THREE.Object3D();
        this.particleGroup.scale.set(2,2,2)
        this.elapsedMilliseconds = 0;

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
        this.createBufferPoints = () => {

            let geometry = new THREE.BufferGeometry();
            let opts = {
                radius:10,
                angle:0,
                count:50,
                baseSize: 10,
            }
            let module = {
                position:new Float32Array(opts.count * 3),
                size:new Float32Array(opts.count),
            }

            for (let i = 0;i < opts.count;i++){
                let angle = (i / opts.count) * Math.PI * 2;
                let x = Math.cos(angle) * opts.radius
                let y = Math.sin(angle) * opts.radius
                let z = 0;
                let size = Math.abs(Math.cos(angle) * opts.baseSize)
                // let size = 1 * opts.baseSize;
                module.position[i * 3] = x;
                module.position[i * 3 + 1] = y;
                module.position[i * 3 + 2] = z;
                module.size[i] = 5


            }
            console.log(module.size)
            geometry.addAttribute('position',new THREE.BufferAttribute(module.position,3));
            geometry.addAttribute('size',new THREE.BufferAttribute(module.size,1));

            // let material = new THREE.PointsMaterial({color:'#ffffff'});
            let material = new THREE.ShaderMaterial( {

                uniforms: {
                    color: {
                        value: new THREE.Color(0xff0000)
                    },
                    texture: {
                        value: new THREE.TextureLoader().load('./textures/sprites/disc.png')
                    }

                    // time: { value: 1.0 },
                    // resolution: { value: new THREE.Vector2() }

                },

                vertexShader: document.getElementById( 'vertexshader' ).textContent,

                fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
                alphaTest: 0.9

            } );
            let points = new THREE.Points(geometry,material);
            points.name = 'buffer'
            this.buffer = points;
            scene.add(points);



            // let buffPosition = new Float32Array(position);
            // let buffScale = new Float32Array(scale)
            //
            // geo.addAttribute('position',new THREE.Float32BufferAttribute(position,3));
            // geo.addAttribute('size',new THREE.Float32BufferAttribute(scale,1).setDynamic( true ));
            // geo.addAttribute('alpha',new THREE.Float32BufferAttribute(alpha,1));
            //
            // console.log(geo,scale)
            // geo.scale(5,5,5)
            // let mat = new THREE.PointsMaterial();
            //
            //
            // let uniforms = {
            //
            //     color: { type: "c", value: new THREE.Color( 0xeeeeee ) },
            //
            // };
            // var shaderMaterial = new THREE.ShaderMaterial( {
            //
            //     uniforms:       uniforms,
            //     vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            //     fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
            //     transparent:    false
            //
            // });
            //
            //
            //
            // this.parField = new THREE.Points(geo,shaderMaterial);
            // this.parField = new THREE.Points(geo,mat);
            // this.parField.name = 'circlePoints'
            // // this.parField.scale.set(5,5,5)
            // scene.add(this.parField);
        }
        this.createPointMap = () => {
            let opts = this.particleOpts;
            // let geo = new THREE.BufferGeometry();
            let geo = new THREE.Geometry();
            let position = [];
            let scale = [];
            let alpha = [];
            for (let i = 2;i < opts.rings;i++){
                let count = ( i === 0? 1 : 1 + Math.ceil( i * 6));

                for (let j = 0; j < count;j++){
                    let angle = (j / count) * pi * 2;
                    let x = Math.cos(angle) * opts.radius;
                    let y = Math.sin(angle) * opts.radius;
                    let z = 0;
                    let size = _.analogy(i,0,opts.rings,.2,.05);
                    this.particles.push(new Particle({
                        x:x,
                        y:y,
                        z:z,
                        size: size,
                        radius:opts.radius,
                        angle: angle,
                        color: 0xffffff,
                        opacity: 1,
                        group: this.particleGroup
                    }))
                }
                opts.radius += opts.radiusStep;

            }

        }
        this.setSize = () => {
            let freeScale = Math.cos(this.elapsedMilliseconds * .005 - this.particleOpts.radius * .6);
            let lockScale = Math.abs(freeScale)
            // 要fps是为了在非正常fps下也能流畅播放
            this.particles.forEach(i => i.update(this.elapsedMilliseconds,this.deltaTimeNormal))

        }
        this.setBufferSize = () => {
            // debugger
            let module = scene.children[3]
            // console.log(module.geometry.getAttribute('size'))

            let size = module.geometry.attributes.size
            let length = size.array.length;
            let newList = new Float32Array(length)
            for (let i = 0;i < length;i++){
                newList[i] = size.array[i] + Math.sin(this.elapsedMilliseconds) * 2
            }
            scene.children[3].geometry.attributes.size.array = newList;
            scene.children[3].geometry.attributes.size.needsUpdate = true;


        }
        this.createModule = () => {
            // this.createPointMap()
            this.createBufferPoints()
            Promise.all([this.moduleLoader(url[0]),this.moduleLoader(url[1])])
                .then(rs => {
                this.module1 = rs[0].module;
                this.module2 = rs[1].module;
                scene.add(this.module1);
                // 模型变换动画
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
                x:20,
                y:50 * Math.random()
            },2000).start()

            console.log(scene)
        }
        this.action = () => {
            this.setCamera();
            // this.setRaycaster();
            // this.move();
            // this.setSize();
            this.setBufferSize()
            this.buffer.geometry.attributes.size.needsUpdate = true
            // this.module1.geometry.verticesNeedUpdate=true;
            // this.buffer.geometry.size.needsUpdate = true;
            // this.parField.geometry.verticesNeedUpdate=true;
            this.count++;
        }
        this.initTimer = () => {
            this.timescale = 1;
            this.clock = new THREE.Clock();
            // 变动秒数
            this.deltaTimeSeconds = this.clock.getDelta() * this.timescale;
            console.log(this.clock.getDelta())
            // 变动毫秒数
            this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
            // 经过的帧数
            this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
            this.elapsedMilliseconds = 0;
        }
        this.updateTimer = () => {
            this.deltaTimeSeconds = this.clock.getDelta();
            this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
            this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
            this.elapsedMilliseconds += this.deltaTimeMilliseconds;
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
        scene.add(this.particleGroup)

        this.handleEvent();
        this.createModule();
        this.initTimer();
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
        this.updateTimer()
        renderer.render(scene,camera);
    }
}

const m = new Main();
m.init();
