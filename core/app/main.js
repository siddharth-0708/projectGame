const app = new PIXI.Application({
    width: 640, height: 360, backgroundColor: 0x000000, resolution: window.devicePixelRatio || 1,
});
var view = app.view;
var canvasContainer = document.createElement("div");
canvasContainer.setAttribute("id", "canvasContainer");
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(view);
canvasContainer.style.position = "absolute";
view.style.position = "absolute";
document.getElementsByTagName("head")[0].style.margin = "0px";

var resizeCanvasContainer = function () {
    var maxWidth = 640;
    var maxHeight = 360;
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    var canvasMargin = 0.9;
    var ratio = Math.min(window.innerWidth / maxWidth, window.innerHeight / maxHeight) * canvasMargin;
    var x = (window.innerWidth - ratio * maxWidth) / 2;
    var y = (window.innerHeight - ratio * maxHeight) / 2;

    if (window.innerWidth * canvasMargin < maxWidth || window.innerHeight * canvasMargin < maxHeight) {
        document.getElementById("canvasContainer").style.margin = "initial";
        document.getElementById("canvasContainer").style.transform = "translate(" + x + "px, " + y + "px) scale(" + ratio + ")";
    } else {
        document.getElementById("canvasContainer").style.margin = "auto";
        document.getElementById("canvasContainer").style.transform = "translate(0, 0)";
    }
};

resizeCanvasContainer();
window.onresize = function(){
    resizeCanvasContainer();
}
// const container = new PIXI.Container();

// app.stage.addChild(container);

// // Create a new texture
// const texture = PIXI.Texture.from('../games/game1/dist/mario.png');

// // Create a 5x5 grid of bunnies
// for (let i = 0; i < 25; i++) {
//     const bunny = new PIXI.Sprite(texture);
//     bunny.anchor.set(0.5);
//     bunny.scale.set(0.2);
//     bunny.x = (i % 5) * 40;
//     bunny.y = Math.floor(i / 5) * 40;
//     container.addChild(bunny);
// }

// // Move container to the center
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;

// // Center bunny sprite in local container coordinates
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;

// // Listen for animate update
// app.ticker.add((delta) => {
//     // rotate the container!
//     // use delta to create frame-independent transform
//     container.rotation -= 0.01 * delta;
// });