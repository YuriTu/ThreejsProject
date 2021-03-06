/**
 * @file Describe the file
 * @author 涂强（tuqiang01）
 */
// import * as THREE from 'three';

const SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight;
let windowHalfX = window.innerHeight / 2,
    windowHalfY = window.innerWidth / 2;
let mouse = {};

let raycaster = new THREE.Raycaster()

export class Animator {
    constructor(props){
        this.scene = props.scene;

        // this.group = new THREE.Group();

        this.lx = true;
        this.ly = true;

        this.config = {
            speed:.5,
        }

        this.generatePlane = () => {
            let geo = new THREE.BoxBufferGeometry(50,5,50);
            let mat = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
            let plane = new window.Physijs.BoxMesh(geo,mat,0);
            plane.rotateX(Math.PI / 8);
            this.plane = plane;
            plane.name = 'plane';
            this.scene.add(plane);
        }

        this.generateBall = () => {
            let rad = 2.5;
            let geo = new THREE.SphereBufferGeometry(rad,32,32);
            let mat = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} );

            this.sphere = new window.Physijs.SphereMesh(
                geo,
                new window.Physijs.createMaterial(
                    mat,0,0
                ),
                0);
            // this.sphere = new window.Physijs.SphereMesh(geo,mat,0);
            this.sphere.parent = window.scene;

            let constraint = new window.Physijs.DOFConstraint(
                this.sphere,this.plane,this.sphere.position
            )

            // this.sphere.translateZ(rad);
            // constraint.setAngularLowerLimit({x: 0, y: 0, z: 0});
            // constraint.setAngularUpperLimit({x: 0, y: 0, z: 0});
            this.sphere.position.y = 10;
            console.log(this.scene)
            this.scene.add(this.sphere);
            this.scene.addConstraint(constraint);
            constraint.configureAngularMotor(2, 0.1, 10, 10, 1500);
            constraint.setAngularLowerLimit({x: 0, y: 0.5, z: 0.1});
            constraint.setAngularUpperLimit({x: 0, y: 0.5, z: 0});
            constraint.enableAngularMotor(2);

        }

        this.generateSide = () => {
            let geo = new THREE.BoxBufferGeometry(5,50,50);
            let mat = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
            let positions = [{
                x:-10,y:0,z:0
            }, {
                x:10,y:0,z:0
            }]
            this.sideLis = positions.map(i => {
                let plane = new window.Physijs.BoxMesh(geo,mat,0);
                plane.position.set(i.x,i.y,i.z);
                // plane.rotateY( Math.PI / 2)
                this.scene.add(plane);
                return plane;
            })

        }

        this.setPosition = () => {
            this.group.rotateX(- Math.PI / 3);
        }

        this.handleMouseMove = () => {
            document.addEventListener('mousemove',(e) => {
                mouse.x = (e.clientX / SCREEN_WIDTH) * 2 - 1;
                mouse.y = - (e.clientY / SCREEN_HEIGHT) * 2 + 1;
                // console.log(mouse);
            }, false);
        }

        this.moveBall = () => {
            // if (mouse.x && mouse.y){
            //     this.lx && this.sphere.translateX( mouse.x * this.config.speed);
            //     this.ly && this.sphere.translateY( mouse.y * this.config.speed);
            //     this.sphere.__dirtyPosition = true;
            //     // this.sphere.position.x += mouse.x * this.config.speed;
            // }
        }

        this.checkImpact = () => {
            let originPosition = this.sphere.position.clone();
            let temp = new THREE.Vector3();
            let arr = this.sphere.geometry.attributes.position.array;
            for (let i = 0; i < this.sphere.geometry.attributes.position.count; i++){
                // 原始坐标
                temp.x = arr[i];
                temp.y = arr[i + 1];
                temp.z = arr[i + 2];
                // 变换后坐标
                let global = temp.applyMatrix4(this.sphere.matrix);
                let directionVector = global.sub(this.sphere.position);

                let ray = new THREE.Raycaster(originPosition,directionVector.clone().normalize());

                let intersectList = ray.intersectObjects(this.sideLis);

                if (intersectList.length > 0 && intersectList[0].distance < directionVector.length()){
                    // directionVector.length() 空间两点间距离 距离0.0.0的距离
                    // console.log(intersectList,directionVector,directionVector.length());
                    this.lx = false;
                    break;
                }
                this.lx = true;
            }

        }


        this.generate();
        this.handleMouseMove();
    }

    generate(){
        this.generatePlane();

        this.generateSide();
        this.generateBall();
        // this.scene.add(this.group);

        // this.setPosition();

    }

    update(){
        this.moveBall();
        // this.checkImpact();
    }
}
