import * as THREE from 'three';
import Status from 'stats.js';
const stats = new Status();

let SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    r = 450,
    mouseX = 0, mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    camera, scene, renderer;

const COUNT = 30000;



class Main {
    constructor(){
        this.createGeometry = () => {
            let geometry = new THREE.Geometry();
            for ( let i = 0; i < COUNT; i ++ ) {
                let vertex1 = new THREE.Vector3();
                vertex1.x = Math.random() * 2 - 1;
                vertex1.y = Math.random() * 2 - 1;
                vertex1.z = Math.random() * 2 - 1;
                vertex1.normalize();
                vertex1.multiplyScalar( r );
                let vertex2 = vertex1.clone();
                vertex2.multiplyScalar( Math.random() * 0.09 + 1 );
                geometry.vertices.push( vertex1 );
                geometry.vertices.push( vertex2 );
            }
            return geometry;
        }
        this.onWindowResize = () => {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
        this.onDocumentMouseMove = (event) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        }
        this.onDocumentTouchStart = (event) => {
            if ( event.touches.length > 1 ) {
                event.preventDefault();
                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }
        this.onDocumentTouchMove = (event) => {
            if ( event.touches.length == 1 ) {
                event.preventDefault();
                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;
            }
        }
    }

    init(){
        // init stats
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        let container = document.querySelector('.ani-container');
        camera = new THREE.PerspectiveCamera( 80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000 );
        camera.position.z = 1000;
        scene = new THREE.Scene();
        let i, line, vertex1, vertex2, material, p,
            parameters = [ [ 0.25, 0xff7700, 1, 2 ], [ 0.5, 0xff9900, 1, 1 ], [ 0.75, 0xffaa00, 0.75, 1 ], [ 1, 0xffaa00, 0.5, 1 ], [ 1.25, 0x000833, 0.8, 1 ],
                [ 3.0, 0xaaaaaa, 0.75, 2 ], [ 3.5, 0xffffff, 0.5, 1 ], [ 4.5, 0xffffff, 0.25, 1 ], [ 5.5, 0xffffff, 0.125, 1 ] ];
        let geometry = this.createGeometry();
        for( i = 0; i < parameters.length; ++ i ) {
            p = parameters[ i ];
            material = new THREE.LineBasicMaterial( { color: p[ 1 ], opacity: p[ 2 ], linewidth: p[ 3 ] } );
            line = new THREE.LineSegments( geometry, material );
            line.scale.x = line.scale.y = line.scale.z = p[ 0 ];
            line.originalScale = p[ 0 ];
            line.rotation.y = Math.random() * Math.PI;
            line.updateMatrix();
            scene.add( line );
        }
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        container.appendChild( renderer.domElement );
        document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', this.onDocumentTouchMove, false );
        //
        window.addEventListener( 'resize', this.onWindowResize, false );
        // test geometry swapability
        setInterval( function () {
            let geometry = this.createGeometry();
            scene.traverse( function ( object ) {
                if ( object instanceof THREE.Line ) {
                    object.geometry.dispose();
                    object.geometry = geometry;
                }
            } );
        }, 1000 );
    }

    animate(){
        stats.begin();
        this.render();
        stats.end();
        requestAnimationFrame(this.animate.bind(this));

    }
    render(){
        camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
        camera.lookAt( scene.position );
        renderer.render( scene, camera );
        let time = Date.now() * 0.0001;
        for ( let i = 0; i < scene.children.length; i ++ ) {
            let object = scene.children[ i ];
            if ( object instanceof THREE.Line ) {
                object.rotation.y = time * ( i < 4 ? ( i + 1 ) : - ( i + 1 ) );
                if ( i < 5 ) object.scale.x = object.scale.y = object.scale.z = object.originalScale * (i/5+1) * (1 + 0.5 * Math.sin( 7*time ) );
            }
        }
    }
}

let m = new Main();
m.init();
m.animate();
//
//
