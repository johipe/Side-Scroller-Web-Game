/// <reference path="objects/asteroid.ts" />
/// <reference path="objects/allien.ts" />
// CreateJS Boilerplate for COMP397


// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // Reference to the HTML 5 Canvas element
var stage: createjs.Stage; // Reference to the Stage
//var helloText: createjs.Text; // Holds my Hello World! Text
//var buttonBitmap: createjs.Bitmap;
var assets: createjs.LoadQueue;
var allien: objects.Allien;
var asteroid: objects.Asteroid;
var manifest = [
    { id: "allien", src: "assets/images/allien2.png" },
    { id: "asteroid", src: "assets/images/asteroid.png" }
];
// FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function preload() {
    assets = new createjs.LoadQueue(true);
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    //queue.loadFile({ id: "sound", src: "" });
    assets.loadManifest(manifest);

}

function init() {


    //asas
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events

    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}


// GAMELOOP
function gameLoop() {
    allien.update();
    asteroid.update();

    stage.update();
}

/*
function buttonClicked() {
    //helloText.text = "Goodbye!";
}

function buttonOut() {
    //buttonBitmap.alpha = 1;
}

function buttonOver() {
    //buttonBitmap.alpha = 0.5;
}
*/

function main() {
    //var bitmap = assets.getResult("allien");
    // console.log(bitmap);
    allien = new objects.Allien(); 
    asteroid = new objects.Asteroid();

    stage.addChild(asteroid);

    stage.addChild(allien);
    
   // var myBitmap: createjs.Bitmap = new createjs.Bitmap(assets.getResult("allien"));
   /* // This is where all the work happens
    helloText = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    stage.addChild(helloText); // First Child Object that we add to the stage

    // Green Button
    buttonBitmap = new createjs.Bitmap("assets/images/button-small.png");
    buttonBitmap.x = 100;
    buttonBitmap.y = 100;
    buttonBitmap.addEventListener("click", buttonClicked);
    buttonBitmap.addEventListener("mouseout", buttonOut);
    buttonBitmap.addEventListener("mouseover", buttonOver);

    stage.addChild(buttonBitmap);
*/


}



