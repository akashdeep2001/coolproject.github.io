//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let state;
let swich;
let timenow;
let start time;

function setup() {
  createCanvas(600, 600);
  state = 1;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  movelight();
  timenow = millis();
  print(timenow);
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function movelight() {

  if (state === 1) {
    timenow = 90000;
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
    state = 3;
  }
  else if (state === 2) {
    timenow = 9000;
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
    state = 1;
  }
  else if (state === 3) {
    timenow = 9000;
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
    state = 2;
  }
}

function switch() {
    if (state ===1){
      // green
      if(millis() > timenow +)
    }

}
