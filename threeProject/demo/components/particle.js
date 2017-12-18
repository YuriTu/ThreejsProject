/**
 * @file Describe the file
 */

export default class Particle {
    constructor(config){
        this.x = config.x;
        this.y = config.y;
        this.z = config.z;
        this.size = config.size;
        this.color = config.color;
        this.opacity = config.opacity;
        this.group = config.group;

        this.angle = config.angle;
        this.radiusBase = config.radius;
        this.sizeBase = config.size;

        this.createMesh();
    }
    createMesh(){
        this.geometry = new THREE.Geometry();

        this.material = new THREE.MeshBasicMaterial({
            color:this.color,
            transparent:true,
            opacity:this.opacity,

        })
        this.mesh = new THREE.Mesh(this.geometry,this.material);

        this.mesh.position.x = this.x;
        this.mesh.position.y = this.y;
        this.mesh.position.z = this.z;

        this.mesh.scale.set(this.size,this.size,this.size);
        this.group.add(this.mesh);
    }
    update(eltime,delta){
        // this.angle -= (Math.cos(eltime *  0.0025 - this.radiusBase * 0.15) * 0.02) * delta

    }
}

