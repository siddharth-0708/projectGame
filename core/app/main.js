const app = new PIXI.Application({
    width: 1280, height: 720, backgroundColor: 0x000000, autoResize: true, resolution: window.devicePixelRatio > 1 ? 2:1 
});
/* with the help of autosize true, the pixel
density will be increased within the 1280x720 width. Each CSS or logical pixel will take 2 physical pixels*/
var scriptsArray = ["../games/game1/src/code.js"];
var view = app.view;
var canvasContainer = document.createElement("div");
canvasContainer.setAttribute("id", "canvasContainer");
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(view);
canvasContainer.style.position = "absolute"; //check this
view.style.position = "absolute";
document.getElementsByTagName("head")[0].style.margin = "0px";

//pixi
const container = new PIXI.Container();
app.stage.addChild(container);

PIXI.loader
    .add('spritesheet', '/games/game1/dist/menu0.json')
    .load(onAssetsLoaded);

function onAssetsLoaded(){
    loadScripts();
}
function loadScripts(){
    for(let i = 0; i < scriptsArray.length; i++){
        loadSingleScript(scriptsArray[i]);
    }
}

let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 50, fill : 0xff1010, align : 'center'});
container.addChild(text);

var resizeCanvasContainer = function () {
    /* our scaling is based on 1280x720*/
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
    var x = (window.innerWidth - ratio * maxWidth) / 2 - 5;
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
function loadSingleScript(path, callback, eCallback) {
    var el = document.createElement("script");
    //getElementsByTagName("body") returns all the elements with the tag name in array. Since there can only be one body in HTML, we are sure it will be the first element
    document.getElementsByTagName("body")[0].appendChild(el);
    el.onload = function (data) {
        if (callback) {
            callback(data);
        }
    };
    el.onerror = function (data) {
        if (eCallback) {
            eCallback(data);
        }
    }
    el.src = path;
    el.type = 'text/javascript';
}
function AddEvent(element, callback, type) {
    if (type === undefined || type === 'click' || type === 'tap') {
        element.on('pointertap', callback);
    } else if (type === 'mousedown' || type === 'touchstart') {
        element.on('pointerdown', callback);
    } else if (type === 'mouseup' || type === 'touchend') {
        element.on('pointerup', callback);
    } else if (type === 'mousemove' || type === 'touchmove') {
        element.on('pointermove', callback);
    } else if (type === 'mouseout' || type === 'pointerout'){
        element.on('pointerout', callback);
    }
}
