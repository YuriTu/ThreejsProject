import * as WHS from 'whs';
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

window.Physijs.scripts.worker = './lib/physijs_worker.js';
window.Physijs.scripts.ammo = './ammo.js';

const opt = {
    sides:{
        conf:[{
            position:[10,0,0]
        },{
            position:[-10,0,0]
        }]

    }

}

class Main {
    constructor(){
        this.buildSilde = () => {
            opt.sides.conf.map((i) => {
                new WHS.Box({
                    geometry:{
                        width:10,
                        height:10,
                        depth:100,
                    },
                    material: new THREE.MeshBasicMaterial({
                        color: 0xffffff
                    }),
                    position:i.position
                }).addTo(this.app)
            })
        }
        this.buildModule = () => {
            const sphere = new WHS.Sphere({
                geometry: {
                    radius:3,
                    widthSegments:32,
                    heightSegments:32,
                },
                material:new THREE.MeshBasicMaterial({
                    color: 0xF2F2F2
                }),
                position:new THREE.Vector3(0,5,0)
            });
            sphere.addTo(this.app);

            const plane = new WHS.Plane({
                geometry: {
                    width:100,
                    height:100
                },
                material: new THREE.MeshBasicMaterial({color:0x447f8b}),
                rotation:{
                    x: -Math.PI / 2
                }
            }).addTo(this.app);

            this.buildSilde();
        }
    }
    init(){
        this.app = new WHS.App([
            new WHS.ElementModule(),
            new WHS.SceneModule(),

            new WHS.DefineModule('camera', new WHS.PerspectiveCamera({
                position: new THREE.Vector3(10,10,75)
            })),

            new WHS.RenderingModule({bgColor:'#000'}),
            new WHS.OrbitControlsModule(),
            new WHS.ResizeModule()
        ])
        this.buildModule();
    }
    start(){
        this.app.start();
    }
}

const m = new Main();
m.init();
m.start();

