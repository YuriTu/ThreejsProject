/**
 * @file Describe the file
 * @author 涂强（tuqiang01@baidu.com）
 */
const pi = Math.PI;
const piStep = 0.02 * pi;

const BG = "#2543aa"
const WHITE = "#FFF"
const basic = {
    baseOnTime:true,
    // 默认25毫秒一帧FPS:40
    fps      : 40,
    focalLength:250,
    // 旋转系数
    path2angle:.001 * piStep,

    // bgStart:BG,
    // bgEnd:WHITE,
}
const bgParticle = {
    radius:25,
    count:100,
    spare:40,
}


export {
    basic,
    bgParticle
}
