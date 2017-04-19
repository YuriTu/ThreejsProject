const PIXI = require("pixi.js")

let render =    PIXI.autoDetectRenderer(265,265);

document.body.appendChild(render.view)
render.view.style.border = "1px dashed black";
render.backgroundColor = "#999999";

render.autoResize = true;
render.resize(window.innerWidth,window.innerHeight)
let stage = new PIXI.Container();

render.render(stage);

