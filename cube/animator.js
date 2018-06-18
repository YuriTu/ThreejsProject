/**
 * @file Describe the file
 * @author 涂强（tuqiang01）
 */
import * as THREE from 'three';

export class Animator {
    constructor(props){
        this.scene = props.scene;
        let geo = new THREE.PlaneBufferGeometry(50,50);
        let mat = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        let plane = new THREE.Mesh(geo,mat);
        plane.rotateX(Math.PI / 2);
        this.scene.add(plane);

    }

    update(){

    }
}
