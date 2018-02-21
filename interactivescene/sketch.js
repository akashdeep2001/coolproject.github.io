//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Interactice Scence Assignement
//Akashdeep Singh Khalsa
//Febuary 14, 2018
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//always draw white shape unless the colour is changed by assiugned keys
let fillShape = "white";
let value = 100;


//creates windown to draw stuff on
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// this function excecute whatever is written inside drawSquareAndCircle
function draw() {
  drawSquareAndCircle();
  noStroke();

}

function drawSquareAndCircle() {
  // if key (s) is pressed then rotate the shape and draw rectangele and fill the shape with the colour that was set before
  if (key === "s") {
    square();
  }
  // if s is not pressed but c is pressed then do exact same things like traslate, roate, change colour except it will draw a circle
  else if (key === "c") {
    circle();
  }
  else if (key === "r") {
    tsc();
  }
}

function tsc() {
  triangleR();
  square();
  circle();
}

function square() {
  // teleporting the entire grid to centre
  translate(width / 2, height / 2);
  //rotate the shape
  rotate(PI / random(0.1, 3));
  // change the colour of the shape with pressing the assigned keys
  fill(random(255), random(255), random(255));

  //draw the shape
  rect(random(windowWidth), random(windowHeight), random(100, 200), random(100, 200));

}

function circle() {
  translate(width / 2, height / 2);
  rotate(PI / random(0.1, 3));
  fill(random(255), random(255), random(255));

  ellipse(random(windowWidth), random(windowHeight), random(100, 200), random(100, 200));
}

//random 3 side traingle is created which is filled with randolm color.
function triangleR() {
  translate(random(windowWidth), random(windowHeight));
  rotate(PI / random(0.1, 3));

  beginShape();
  fill(random(255), random(255), random(255));

  vertex(random(40, 80), random(50, 100));
  vertex(random(200, 400), random(70, 140));
  vertex(random(65, 130), random(155, 310));

  endShape(CLOSE);

}

//if you press right click then it will change background color randomly
function mouseClicked(RIGHT) {
  colorA = random(255);
  colorB = random(255);
  colorC = random(255);
  background(colorA,colorB,colorC);
}

// if you mouseWheel then the color on the screen will increase by 10 rgb value until it reach 255. After it has reacheached 255 it will reset the colour the the same rgb value you started with.
function mouseWheel(){
  background(colorA+value,colorB+value,colorC+value);
  value = value + 10;
  if (value > 255) {
    value = 0;
  }
}
