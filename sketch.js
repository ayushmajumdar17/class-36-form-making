// var ball;
// var database;
// var position;
// var referenceposition;

// function setup() {
//     createCanvas(500, 500);
//     ball = createSprite(250, 250, 10, 10);
//     ball.shapeColor = "red";
//     database = firebase.database();
//     referenceposition = database.ref("ball/position");
//     referenceposition.on("value", readPosition, readError);
// }
// function writePosition(x, y) {
//     // ball.x = ball.x + x;
//     // ball.y = ball.y + y;
//     database.ref("ball/position").set({
//         'x': position.x + x,
//         'y': position.y + y
//     });


// }
// function readPosition(data) {
//     position = data.val();
//     ball.x = position.x;
//     ball.y = position.y;
// }
// function readError() {
//     console.log("unable to read from the database");
// }
// function draw() {
//     background("white");
//     if (position !== undefined) {
//         if (keyDown(LEFT_ARROW)) {
//             writePosition(-1, 0);
//         }
//         else if (keyDown(RIGHT_ARROW)) {
//             writePosition(1, 0);
//         }
//         else if (keyDown(UP_ARROW)) {
//             writePosition(0, -1);
//         }
//         else if (keyDown(DOWN_ARROW)) {
//             writePosition(0, +1);
//         }
//         console.log(position);
//     }
    

//     drawSprites();
// }

var form;
var player;
var game;
var canvas;
var gameState = 0;
var database;
var playerCount;



function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game= new Game();
    game.getState();
    game.wait();
}

function draw(){
background(255);

}