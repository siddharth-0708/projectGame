const app = new PIXI.Application({
    width: 1280, height: 720, backgroundColor: 0x000000, //resolution: window.devicePixelRatio ?2:1 //need to check DPR here, border also not applying
});
var view = app.view;
var canvasContainer = document.createElement("div");
canvasContainer.setAttribute("id", "canvasContainer");
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(view);
canvasContainer.style.position = "absolute"; //check this
view.style.position = "absolute";
document.getElementsByTagName("head")[0].style.margin = "0px";

var resizeCanvasContainer = function () {
    var maxWidth = 1280;
    console.log("maxwidth = " + maxWidth);
    var maxHeight = 720;
    console.log("maxHeight = " + maxHeight);
    var wWidth = window.innerWidth;
    console.log("This is inner Width = "+ wWidth);
    var wHeight = window.innerHeight;
    console.log("This is inner height = " + wHeight);
    var canvasMargin = 0.9;
    console.log("Inner width / maxwidth = "+ window.innerWidth / maxWidth);
    console.log("InnerHeight / maxHeight = "+ window.innerHeight / maxHeight);
    var ratio = Math.min(window.innerWidth / maxWidth, window.innerHeight / maxHeight) * canvasMargin;
    console.log("Math.min(window.innerWidth / maxWidth, window.innerHeight / maxHeight) * canvasMargin = " + ratio);
    var x = (window.innerWidth - ratio * maxWidth) / 2;
    console.log("(x = window.innerWidth - ratio * maxWidth) / 2 = "+ x);
    var y = (window.innerHeight - ratio * maxHeight) / 2;
    console.log("(y = window.innerHeight - ratio * maxHeight) / 2 = "+ y);

    if (window.innerWidth * canvasMargin < maxWidth || window.innerHeight * canvasMargin < maxHeight) {
        console.log("window.innerWidth * canvasMargin < maxWidth || window.innerHeight * canvasMargin < maxHeight");
        document.getElementById("canvasContainer").style.margin = "initial";
        //check this
        document.getElementById("canvasContainer").style.transform = "translate(" + x + "px, " + y + "px) scale(" + ratio + ")";
    } else {
        console.log("other");
        document.getElementById("canvasContainer").style.margin = "auto";
        //check this
        document.getElementById("canvasContainer").style.transform = "translate(0, 0)";
    }
};

resizeCanvasContainer();
window.onresize = function(){
    resizeCanvasContainer();
}
