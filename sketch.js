/*
var player;
var startButton;
var caveImage;
var invisibleGround;

var gameState = 0;

function preload() {
  caveImg = loadImage("images/cave image.jpg");
  startingCaveImg = loadImage("images/cave opening image.jpg");
  flockOfBats1 = loadImage("images/flock of bats 1.jpg");
  flockOfBats2 = loadImage("images/flock of bats 2.jpg");
  flockOfBats3 = loadImage("images/flock of bats 3.jpg");
  //playerAnimation = loadAnimation("images/player image 1.png","images/player image 2.png","images/player image 3.png","images/player image 4.png");
  playerImg= loadImage("images/player image 4.png");
  startButtonImg = loadImage("images/start button.png");
}

function setup() {
  createCanvas(770,500);

  caveImage = createSprite(390,250,770,500);
  caveImage.addImage(caveImg);
  caveImage.scale = 1.3;
  caveImage.x = caveImage.width/2;
  caveImage.visible = false;

  startButton = createSprite(350,400);
  //startButton.addImage(startButtonImg);
  startButton.scale = 0.25;
  startButton.visible = true;
  
  invisibleGround = createSprite(370,450,770,10);
  invisibleGround.visible = true;
  
  player = createSprite(200,350);
  player.addImage(playerImg);
  player.scale = 0.5;
  player.visible = false;
}

function draw() {
  drawSprites();
  background("blue");

  player.collide(invisibleGround);

  if(gameState === 0) {
    textSize(24);
    fill("black");
    text ("Avoid the obstacles to reach the treasure!", 150,200);
    textSize(20);
    text ("Click the start button to start",210,250);
    startButton.visible = true;
  
    if(mousePressedOver(startButton)) {
      console.log("start is working");
      gameState = 1;
    }
  }
  if(gameState === 1) {
    console.log("gameState changed");
    //startButton.visible = false;
    player.visible = true;
    player.collide(invisibleGround);

    if(caveImage.x < 225) {
      caveImage.x = caveImage.width/2;
    }

    caveImage.velocityX = -3;

    if(keyDown("space") && player.y>200) {
      player.velocityY = -6;
    }

    player.velocityY = player.velocityY + 0.8
  }
}
*/

var player;
var startButton;
var invisibleGround;

gameState = 0;

function preload() {
  caveImg = loadImage("images/cave image.jpg");
  startingCaveImg = loadImage("images/cave opening image.jpg");
  flockOfBats1 = loadImage("images/flock of bats 1.jpg");
  flockOfBats2 = loadImage("images/flock of bats 2.jpg");
  flockOfBats3 = loadImage("images/flock of bats 3.jpg");
  playerImg = loadImage("images/player image 4.png");
  startButtonImg = loadImage("images/start button.png");
}

function setup() {
  createCanvas(800,500);
  startButton = createSprite(400,320);
  startButton.addImage(startButtonImg);
  startButton.scale = 0.25;

  invisibleGround = createSprite(400,420,800,10);
}

function draw() {
  background(caveImg);

  if(gameState === 0) {
    textSize(24);
    fill("white");
    text ("Avoid the obstacles to reach the treasure!", 200,200);
    textSize(20);
    text ("Click the start button to start", 275,250);
  }
  
  
  if(mousePressedOver(startButton)) {
    gameState = 1;
    startButton.visible = false;
  }
  if(gameState === 1) {
    player = createSprite(200,330);
    player.addImage(playerImg);
    player.collide(invisibleGround);
    player.scale = 0.5;

    if(keyDown("space") && player.y>200) {
      player.velocityY = -6;
    }

    player.velocityY = player.velocityY + 0.8
  }

  drawSprites();
}