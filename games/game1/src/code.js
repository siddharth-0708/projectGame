const texture = new PIXI.Sprite(PIXI.Texture.fromFrame("mMenu_normal"));
container.addChild(texture);
texture.y = 550;

//AddEvent(texture, enableRules(), 'click')
texture.interactive = true;
texture.buttonMode = true;
texture.on('click', enableRules); // mouse-only

//show texts
//scroll

var gameRules = document.createElement("div");
gameRules.setAttribute("id", "gameRules");
gameRules.setAttribute("style", "../../../css/style.css");
canvasContainer.appendChild(gameRules);
gameRules.style = "display: block";
gameRules.onclick = closeRules(); //check this

var para = document.createElement("p");
para.setAttribute("id", "para");
para.setAttribute("style", "../../../css/style.css");
gameRules.appendChild(para);
para.innerHTML = "Hello Siddharth LOL hahaha ajdkjdos iknwddwn w dwojdwoljdwodwndw dwojmdwojdwbdwndwkdw dwdojwdodndodw"

function enableRules(){
    if(document.getElementById("gameRules")){
        document.getElementById("gameRules").style.visibility = "visible";
    }
}
function closeRules(){
    if(document.getElementById("gameRules")){
        document.getElementById("gameRules").style.visibility = "hidden";
    }
}
