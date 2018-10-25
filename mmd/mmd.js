



import {TGALoader} from "../libs/TGALoader";
import {MMDLoader} from "../libs/MMDLoader";
import {OutlineEffect} from "../libs/OutlineEffect"
import {CCDIKSolver} from "../libs/CCDIKSolver";
import {MMDPhysics} from "../libs/MMDPhysics";


import { MMDAnimationHelper }from "../libs/MMDAnimationHelper";

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const HALF_WIDTH = SCREEN_WIDTH / 2;
const HALF_HEIGHT = SCREEN_HEIGHT / 2;


let container, stats;

let camera, scene, renderer, effect;
let mesh;



THREE.MMDLoader = MMDLoader;
THREE.TGALoader = TGALoader;
THREE.OutlineEffect = OutlineEffect;
THREE.CCDIKSolver = CCDIKSolver;
THREE.MMDPhysics = MMDPhysics;

THREE.MMDAnimationHelper = MMDAnimationHelper;

class Main {
    constructor(){
        this.helper = new THREE.MMDAnimationHelper();
        this.vpds = [];

        this.initCommon = () => {
            container = document.querySelector('.container');

            camera = new THREE.PerspectiveCamera( 45, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 2000);
            camera.position.z = 25;

            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xffffff );

            let ambient = new THREE.AmbientLight( 0x666666 );
            scene.add( ambient );

            let directionalLight = new THREE.DirectionalLight( 0x887766 );
            directionalLight.position.set( - 1, 1, 1 ).normalize();
            scene.add( directionalLight );

            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight);
            container.appendChild( renderer.domElement );


            effect = new THREE.OutlineEffect( renderer );
        }

        this.initAssets = () => {
            let modelFile = './models/miku_v2.pmd';
            let vpdFiles = [
                './motionData/vpd/01.vpd',
                // './motionData/vpd/02.vpd',
                './motionData/vpd/03.vpd',
                // './motionData/vpd/04.vpd',
                './motionData/vpd/05.vpd',
                // './motionData/vpd/06.vpd',
                // './motionData/vpd/07.vpd',
                // './motionData/vpd/08.vpd',
                //'motionData/vpdds/09.vpd',
                //'motionData/vpdds/10.vpd',
                // './motionData/vpd/11.vpd'
            ];

            let onProgress = ( xhr ) => {

                if ( xhr.lengthComputable ) {

                    let percentComplete = xhr.loaded / xhr.total * 100;
                    console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

                }

            };

            let onError = ( xhr ) => {
                console.error("xhr error")
            };


            this.loader = new THREE.MMDLoader();

            this.loader.load( modelFile, ( object ) => {

                mesh = object;
                mesh.position.y = - 10;
                mesh.position.x = - 1;
                mesh.scale.set(0.8, 0.8, 0.8);

                scene.add( mesh );

                let vpdIndex = 0;

                let loadVpd = () => {

                    let vpdFile = vpdFiles[ vpdIndex ];

                    this.loader.loadVPD( vpdFile, false,  ( vpd ) => {

                        this.vpds.push( vpd );

                        vpdIndex ++;

                        if ( vpdIndex < vpdFiles.length ) {

                            loadVpd();

                        } else {

                            // initGui();

                        }

                    }, onProgress, onError );

                }

                loadVpd();

            }, onProgress, onError );
        }

        this.initGui = () => {

        }

        this.initEventHandle = () => {
            let doms = document.querySelectorAll('.btn');
            let plans = [
                `
                <div>座位安排</div>
                <div>姓名：xxx</div>
                <div>桌号：xxx</div>
                <div>还有什么想知道的？</div>
                <img src="./img/chat.png" alt="#">
                <div>
                    <input type="text" value="利用知秋的NLP来做智能助手"/>  <span>提交</span>
                </div>
                `,
                `
                <div>大会议程</div>
                <div>第一项：xxx</div>
                <div>第二项：xxx</div>
                <div>还有什么想知道的？</div>
                <img src="./img/chat.png" alt="#">
                <div>
                    <input type="text" value="利用知秋的NLP来做智能助手"/>  <span>提交</span>
                </div>
                
                `,
                `
                <div>参会信息</div>
                <div>时间：xxx</div>
                <div>地点：xxx</div>
                <div>还有什么想知道的？</div>
                <img src="./img/chat.png" alt="#">
                <div>
                    <input type="text" value="利用知秋的NLP来做智能助手"/>  <span>提交</span>
                </div>
                `
            ]

            doms.forEach((item,index) => {
                item.addEventListener('click', (e) => {
                    let value = e.target.value;
                    this.helper.pose(mesh, this.vpds[value]);
                    document.querySelector('.planContainer').innerHTML = plans[index];
                });
            })

        }
    }

    init(){
        this.initCommon();
        this.initAssets();
        this.initEventHandle();

    }
    animate(){
        requestAnimationFrame(this.animate.bind(this));
        this.render();
    }
    render(){
        effect.render(scene, camera);
    }
}

const M = new Main();
M.init();
M.animate();
