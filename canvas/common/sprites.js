class Sprite {
    constructor(name,painter,behaviors){
        this.name = name || null
        this.painter = painter || null
        this.behaviors = behaviors || null

        this.left = 0;
        this.top = 0;
        this.width = 0;
        this.height = 0;

        this.velocityX = 0;
        this.velocityY = 0;
        this.visible = true;
        this.animating = false;
        // 应为 对象 包含一个paint（sprite， context） 方法
        this.painter = undefined;
        // 应为对象 包含一个execute（sprite，context，time）方法
        this.behaviors = [];
    }
    paint(context){
        if(this.visible && !!this.painter ){
            this.painter.paint(this, context);
        }
    }
    update(context, time){
        for (let i = this.behaviors.length; i> 0;i--){
            this.behaviors[i -1].execute(this, context, time);
        }
    }

}

module.exports = Sprite;