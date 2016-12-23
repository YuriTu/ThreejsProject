const _ = {};

// 勾股定理计算 参数必须为number类型
_.pythagoras = (side1,side2,hypotenuse) => {
    let rs;
    if(!hypotenuse){
        rs = Math.sqrt(  Math.pow(+side1,2) + Math.pow(+side2,2)  );
    }else {
        const s1 = +side1 || 0;
        const s2 = +side1 || 0;
        rs = Math.sqrt(  Math.pow(+hypotenuse,2) - Math.pow(s1,2) - Math.pow(s2,2)  );

    }
    return  rs;
}

_.raf = (callback) => {
     window.ranf =  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||

        function (callback) {
            let start,
                finish;
            const self = {};
            window.setTimeout(() => {
                start = +new Date();
                callback(start);
                finish = +new Date();

                self.timeout = 1000 / 60 - (finish - start);

            }, self.timeout);
        };
    return window.ranf(callback);
};

module.exports = _;

