// State Assignemnt
// Akashdeep Khalsa
// April 11 2018
// Extra for expert - Sound
// attemt - Collison of Car
// control- WAD to move the car
// goal -  reach orange button to finish the car game

let state;
let enemy;
let yEnemy;
let levelOne;
let xCar, yCar;
let backImage,carImage;
let background, buttonSound;
let movingUp, movingDown, movingLeft, movingRight;


// load the image before the setup
function preload() {
  background = loadSound("assets/backgroundmusic.mp3");
  buttonSound = loadSound("assets/button.wav");
  backImage = loadImage("images/game-background.jpg");
  carImage = loadImage("images/car.png");
  levelOne = loadImage("images/levelOne.png");
  enemy = loadImage("images/enemy.png");
}

// only do this once
function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  xCar = width/2;
  yCar = height/1.3;
  yEnemy = height/2.5;
  movingUp = false;
  movingDown = false;
  movingLeft = false;
  movingRight = false;
  background.setVolume(0.6);
  background.loop();
  buttonSound.setVolume(0.9);
}

// continus loop
function draw() {
  selectStates();
  movingCar();
}

// function that will select state according to what button is pressed
function selectStates() {
  if (state === 1) {
    image(backImage, 0, 0, [windowWidth], [windowHeight]);
    start();
    setting();
  }
  if (state === 2) {
    image(backImage, 0, 0, [windowWidth], [windowHeight]);
    image(carImage, windowWidth / 2.3, windowHeight / 2);
    characterOne();
    back();
  }

  if (state === 3) {
    image(backImage,0, 0, [windowWidth], [windowHeight]);
    back();
    volumeAssetsOff();
    volumeBackgroundOff();
    volumeAssetsOn();
    volumeBackgroundOn();

  }

  if (state === 4) {
    image(levelOne,0, 0, [windowWidth], [windowHeight]);
    back();
    enemyCollison();
    moveCar();
    finish();
  }

  if (state === 5) {
    image(levelOne,0, 0, [windowWidth], [windowHeight]);
    back();
    textSize(40);
    fill("pink");
    text("Game Finish",windowWidth/2.4,windowHeight/2);
  }
}

// if this button is pressed go to state 2
function start() {
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
      buttonSound.play();
    }
  }
  fill(203, 79, 238);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(28);
  fill(0,0,0);
  text("Start",windowWidth/2.1,windowHeight/1.95);
}



// ifthis button is pressed then chage the state to 3 and go to setting page where you can change the volume
function setting() {
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 1.6 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 3;
      buttonSound.play();
    }
  }

  fill(95, 244, 239);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(28);
  fill(0,0,0);
  text("Setting",windowWidth/2.1,windowHeight/1.55);
}

// if this button is pressed then select that charter  and go to next state (4)
function characterOne(){
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 1.2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 4;
      buttonSound.play();
    }
  }
  fill(226, 29, 29);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(24);
  fill(0,0,0);
  text("Red Car",windowWidth/2.1,windowHeight/1.2);
}

// when the button is pressed go to start screen AKA state 1
function back(){
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 8 - buttonWidth / 2;
  let topSide = height / 8 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 1;
      xCar = windowWidth/2;
      yCar = windowHeight/1.3;
      yEnemy = windowHeight/2.5;
      buttonSound.play();
    }
  }
  fill(198, 56, 100);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(24);
  fill(0,0,0);
  text("Back",windowWidth/9,windowHeight/7);
}

//change the volume of asset when the button is pressed
function volumeAssetsOn(){
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      buttonSound.setVolume(0.0);
    }
  }
  fill(98, 236, 52);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(20);
  fill(0,0,0);
  text("Assets Off",windowWidth/2.13,windowHeight/2);

}

function volumeAssetsOff(){
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 1.7 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      buttonSound.setVolume(0.9);
      buttonSound.play();
    }
  }
  fill(136, 61, 10);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(20);
  fill(0,0,0);
  text("Assets ON",windowWidth/2.13,windowHeight/1.7);

}

// change the volume of background when the button is pressed
function volumeBackgroundOff(){
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 3 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      background.setVolume(0.0);
      buttonSound.play();
    }
  }
  fill(110, 60, 241);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(20);
  fill(0,0,0);
  text("Volume Off",windowWidth/2.13,windowHeight/3);
}

function volumeBackgroundOn(){
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 4 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      background.setVolume(0.6);
      buttonSound.play();
    }
  }
  fill(209, 27, 205);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textSize(20);
  fill(0,0,0);
  text("Volume On",windowWidth/2.13,windowHeight/4);
}


function moveCar(){
  image(carImage,xCar,yCar,[150],[150]);
}
function enemyCollison(){
  image(enemy,xCar,yEnemy,[50],[50]);
  if(yEnemy < windowHeight/1 ){
    yEnemy = yEnemy + 2;
  }
  if (yEnemy === yCar){
    state =5;
  }
}

// if key is pressed then moving is true
function keyPressed() {
  if (key === "w" || key === "W") {
    movingUp = true;
  }
  else if (key ==="s"|| key === "S") {
    movingDown = true;
  }
  if (key === "a" || key === "A") {
    movingLeft = true;
  }
  else if (key === "d" || key === "D") {
    movingRight = true;
  }
}

// if key is not pressed then dont move
function keyReleased() {
  if (key === "w" || key === "W") {
    movingUp = false;
  }
  else if (key === "s" || key === "S") {
    movingDown = false;
  }
  if (key === "a" || key === "A") {
    movingLeft = false;
  }
  else if (key === "d" || key === "D") {
    movingRight = false;
  }
}

// how much pixel to move the image when moving is True
function movingCar() {
  if (movingUp) {
    yCar -= 2;
  }
  if (movingDown) {
    yCar += 2;
  }
  if (movingLeft) {
    xCar -= 2;
  }
  if (movingRight) {
    xCar += 2;
  }
}

function finish(){
  let buttonWidth = 100;
  let buttonHeight = 50;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 3 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (yCar <= topSide) {
    state = 5;
    buttonSound.play();
  }
  fill(238, 125, 50);
  rect(leftSide, topSide, buttonWidth, buttonHeight);

}
