class Sprite {
    constructor(name,painter,behaviors){
        this.name = name || null
        // 应为 对象 包含一个paint（sprite， context） 方法
        this.painter = painter || undefined
        // 应为对象 包含一个execute（sprite，context，time）方法
        this.behaviors = behaviors || []

        this.left = 0;
        this.top = 0;
        this.width = 0;
        this.height = 0;

        this.velocityX = 0;
        this.velocityY = 0;
        this.visible = true;
        this.animating = false;
    }
    paint(context){
        if(this.visible && !!this.painter ){
            // 绘制器与绘制器对象之间是解耦的 具体的绘制动作是通过construct的时候传进来的
            this.painter.paint(this, context);
        }
    }
    update(context, time){
        for (let i = this.behaviors.length; i> 0;i--){
            this.behaviors[i -1].execute(this, context, time);
        }
    }
}
// 渲染一张图片，呈献给sprite
class ImagePainter {
    constructor(imageUrl){
        this.image = new Image;
        this.image.src = imageUrl;
    }
    paint(sprite,context){
        if(!!this.image.src){
            if(!this.image.complete){
                this.image.onload = (e) => {
                    sprite.width = e.width;
                    sprite.height = e.height;
                    context.drawImage(this.target, sprite.left, sprite.top, sprite.width, sprite.height)

                }
            } else {
                context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height)
            }
        }
    }
}


class SpriteSheetPainter {
    constructor(cells){
        this.cells = cells  || [];
        this.cellIndex = 0;
    }
    // 循环调用每个项目
    advance(){
        if(this.cellIndex === this.cells.length -1){
            this.cellIndex = 0;
        } else {
            this.cellIndex++;
        }
    }
    // 理论上这个函数是用不到的，一般在业务逻辑内部直接使用，
    // 而且sheet是个全局变量，渲染逻辑里面并没有
    paint(sprite, context){
        const cell = this.cells[this.cellIndex];
        context.drawImage(spritesheet,cell.x,cell.y,cell.w,cell.h,
            sprite.left,sprite.top,cell.w,cell.h);
    }
}
// 动画执行

// 其有一个依次执行的painter，没经过一段时间提供给sprite
// 使用start方法开始
class SpriteAnimator {
    constructor(painters, elapsedCallback){
        this.painters = painters || [];
        this.elapsedCallback = elapsedCallback || undefined;
        // 持续时间
        this.duration = 1000;
        this.startTime = 0;
        this.index = 0;
    }
    end(sprite, originalPainter){
        sprite.animating = false;

        if(this.elapsedCallback) {
            this.elapsedCallback(sprite)
        } else {
            sprite.painter = originalPainter;
        }
    }
    start(sprite, duration){
        let endTime = +new Date() + duration,
            // 时期期间
            period = duration / (this.painters.length),
            interval = undefined,
            animator = this,
            originalPainter = sprite.painter;
        this.index = 0;
        sprite.animating = true;
        sprite.painter = this.painters[this.index];

        // 此处存疑，raf倾向
        // interval = setInterval(function() {
        //     if (+new Date() < endTime) {
        //         sprite.painter = animator.painters[++animator.index];
        //     }
        //     else {
        //         animator.end(sprite, originalPainter);
        //         clearInterval(interval);
        //     }
        // }, period);
        interval = requestAnimationFrame(() => {
            if(endTime > (+new Date() + period) ){
                if(+new Date() < endTime){
                    sprite.painter = animator.painters[++animator.index];
                } else {
                    animator.end(sprite,originalPainter);
                    cancelAnimationFrame(interval);
                    return;
                }
            }
        })
    }
}


module.exports =
    Sprite,
    ImagePainter,
    SpriteSheetPainter,
    SpriteAnimator
;