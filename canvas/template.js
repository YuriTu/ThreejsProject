let ctx;

class Temp {
    constructor(props){
        ctx = this.ctx = props.ctx;
        this.canvas = props.obj;
    }
}

module.exports = Temp;