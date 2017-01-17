let ctx;

class Drawimg {
    constructor(props){
        ctx = this.ctx = props.ctx;
        this.canvas = props.obj;
    }
    init(){
        let img = new Image();
        img.src = "../../img/test.png";
        img.onload = (e) => {
            // if(e.complete){
                ctx.drawImage(img,0,0)
            // }
        }
    }
}

module.exports = Drawimg;