var gameState,playerCount;
var game, form, player;
var allPlayers;
var Rocket1, Rocket2, Rockets
var allPlayers;


gameState = 0
playerCount = 0;

function preload(){
  bgImg = loadImage("images/BackgroundImg.jpg")
  endImg = loadImage("images/EndingImg.png")
  rocket1Img = loadImage("images/rocket1.png")
  rocket1fireImg = loadImage("images/rocket1-fire.png")
  rocket2Img = loadImage("images/rocket2.png")
  rocket2fireImg = loadImage("images/rocket2-fire.png")

}

function setup() {
  createCanvas(displayWidth-150, displayHeight-5);
  database = firebase.database();
  game = new Game(); 
  game.start();
}

function draw() {
  //background();
  
   if (playerCount === 2) {
     game.update(1);
     console.log("checking")
     
   }
   if (gameState === 1 || playerCount === 2) {
     clear(); 
     game.play();
     
   }
   /*
   if (gameState === 2) {
    
     game.end();
   }
   */
  
}