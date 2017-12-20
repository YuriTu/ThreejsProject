/**
 * @file 基础类
 * @author 涂强（tuqiang01@baidu.com）
 */

class BasicParticle {
    constructor(config){
        this.x = config.x;
        this.y = config.y;
        this.z = config.z;
        this.group = config.group;
        this.size = config.size;
        this.color = config.color;
        this.opacity = config.opacity;

        this.create();
    }
    create(){
        this.geometry = new THREE.SphereBufferGeometry(1,8,8);
        this.material = new THREE.MeshBasicMaterial({
            color: this.color,
            transparent: true,
            opacity: this.opacity,
        })
        this.mesh = new THREE.Mesh(this.geometry,this.material);

        this.mesh.position.x = this.x;
        this.mesh.position.y = this.y;
        this.mesh.position.z = this.z;

        this.mesh.scale.set(this.size,this.size,this.size);

    }
}
