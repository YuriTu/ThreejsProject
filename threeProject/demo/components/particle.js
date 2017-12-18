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
        // this.geometry = new THREE.SphereBufferGeometry( 1, 8, 8 );
        this.geometry = new THREE.SphereBufferGeometry( 1, 8, 8 );

        this.material = new THREE.MeshBasicMaterial({
            color: this.color,
            transparent: true,
            opacity: this.opacity,
            depthTest: false,
            precision: 'lowp'
        })
        this.mesh = new THREE.Mesh(this.geometry,this.material);

        this.mesh.position.x = this.x;
        this.mesh.position.y = this.y;
        this.mesh.position.z = this.z;

        this.mesh.scale.set(this.size,this.size,this.size);
        this.group.add(this.mesh);
    }
    update(eltime,delta){
        this.angle -= (Math.cos(eltime *  0.0025 - this.radiusBase * 0.15) * 0.02) * delta;
        this.mesh.position.x = Math.cos(this.angle) * this.radiusBase;
        this.mesh.position.y = Math.sin(this.angle) * this.radiusBase;
        // z的作用是加深xy的效果
        // radius是为了让不同的粒子有不同的启动时间，交错感更强
        this.mesh.position.z = Math.cos(eltime * 0.005 - this.radiusBase * 0.3) * 5;

        // 因为每个粒子的初始大小radiuis不一样，所以要加
        // eltime是mm，所以。005是其速率
        let freeScale = Math.cos(eltime * 0.005 - this.radiusBase * 0.6);
        // 把数据限制至 在 0-1 。。。何必呢，cos必然在 加个绝对值不就结了
        let lockScale = Math.abs(freeScale);
        let scale = this.sizeBase + lockScale * 0.3;
        this.mesh.scale.set(scale, scale, scale);
    }
}

