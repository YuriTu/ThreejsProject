import * as THREE from 'three';

import Status from 'stats.js';

const stats = new Status();
import _ from '../../until/until';
const SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight;
let windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2;
let renderer,camera, scene;

let url = './blender2.json'



class Main {
    constructor(){
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
        this.createParticlesSystem = () => {
            let loader = new THREE.JSONLoader();
            loader.load(url, (geometry, materials) => {
                let mat = new THREE.PointsMaterial({
                    size:3,
                    // vertexColors:true,
                    color:0xffffff,
                    opacity:.5,
                    transparent:true,
                    // 这个好像没生效
                    blending: THREE.AdditiveBlending,
                    map:this.createSprite(),
                })
                this.system = new THREE.Points(geometry, mat)
                this.system.sortParticles = true;
                this.system.scale.set(20,20,20)

                scene.add(this.system)
                console.log(this.system)
            })
        }
        this.createParticles = () => {
            let mat = new THREE.SpriteMaterial();
            for (let x = -5;x < 5;x++){
                for (let y = -5; y < 5;y++){
                    let particle = new THREE.Sprite(mat);
                    particle.position.set(x*10,y*10,0);
                    scene.add(particle);
                }
            }
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
        this.createParticlesSystemtest = () => {
            let geom = new THREE.Geometry();
            let mat = new THREE.PointsMaterial({
                size:3,
                // vertexColors:true,
                // color:0xffffff,
                opacity:.5,
                transparent:true,
                blending: THREE.AdditiveBlending,
                map:this.createSprite(),
            })
            // let range = 500;
            // for(let i = 0;i < 5000;i++){
            //     let particle = new THREE.Vector3(
            //         Math.random() * range - range / 2,
            //         Math.random() * range - range / 2,
            //         Math.random() * range - range / 2
            //     )
            //     geom.vertices.push(particle);
            //     let color = new THREE.Color(0x00ff00);
            //     color.setHSL(
            //         color.getHSL().h,
            //         color.getHSL().s,
            //         Math.random() * color.getHSL().l
            //     );
            //     geom.colors.push(color);
            // }
            this.system = new THREE.Points(geom,mat);
            this.system.sortParticles = true;
            scene.add(this.system)
        }

        this.handleEvent = () => {

            document.addEventListener('mousemove',(e) => {
                this.mouseX = e.clientX - windowHalfX;
                this.mouseY = e.clientY - windowHalfY;

                this.mouse.x = (e.clientX / SCREEN_WIDTH) * 2 -1;
                this.mouse.y = -(e.clientY / SCREEN_HEIGHT) * 2 +1;
                // console.log(e.clientX,this.mouseX,e.clientY,this.mouseY)
            })

            this.antiResize();
        }

        this.action = () => {
            // console.log(!!this.system.geometry,typeof this.system.geometry.vertices.map)
            this.step += .001;
            this.system.rotation.y = this.step;
            let list = this.system.geometry.vertices
            // this.system.geometry.vertices
            this.system.geometry.vertices.forEach(i => {
                // console.log(typeof i.x)
                i && (i.x += 1)

            })
            this.setCamera();
            this.setRaycaster();

        }
        this.setCamera = () => {
            // if( Math.abs(camera.position.x ) < 50){
                camera.position.x += (this.mouseX - camera.position.x) * .00001;
            // }
            // if(Math.abs(camera.position.y) < 50){
                camera.position.y += (-this.mouseY - camera.position.y) * .00001;
            // }


            // console.log(camera.position)
         }
         this.setRaycaster = () => {

            this.raycaster.setFromCamera(this.mouse,camera);
            let interactive = this.raycaster.intersectObjects(scene.children);
            console.log(interactive)
             interactive.forEach(i => {
                 i.object.material.color.set( 0xffffff );
             })
         }
    }
    init(){
        // init stats
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        const container = document.querySelector('.ani-container');
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 1000);
        camera.position.z = 100;
        // camera.position.x = 10;
        // camera.position.y = 10;

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
        // pati
        this.createParticlesSystem();
        console.log(scene)
        // scene.add()
        this.handleEvent();
    }
    animate(){
        stats.update();
        this.render();
        _.raf(this.animate.bind(this));

    }
    render(){
        camera.lookAt(scene.position);
        renderer.render(scene,camera);
        this.system && this.action();

    }
}

const m = new Main();
m.init();
m.animate();
