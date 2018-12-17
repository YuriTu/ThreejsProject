
import {AnimationLoop} from 'luma.gl';


const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const HALF_WIDTH = SCREEN_WIDTH / 2;
const HALF_HEIGHT = SCREEN_HEIGHT / 2;
const ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;


let canvas = document.querySelector('canvas');
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

let VERTEX_SHADER = `
    attribute vec3 positions;
    
    uniform mat4 u_MvpMatrix;
    uniform mat4 u_PositionMatrix;
    
    void main(void){
        gl_Position = u_MvpMatrix * u_PositionMatrix * vec4(positions,1.0);
    }

`;

let FRAGMENT_SHADER = `

`;

let gl;

class Main {
    constructor(){

    }

    init(){
        this.animator = new AnimationLoop({
            debug:true,
            onInitialize({gl}){

            },
            onRender({tick}){

            }
        })
    }
    draw(){
        this.animator.start({id:'world'});
    }
}
