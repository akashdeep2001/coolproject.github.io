// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
let fillShape = "white";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawSquare();
}


function keyTyped() {
  if (key === "w") {

    fillShape = "white";
  }
  else if (key === "g") {
    fillShape = "black";
  }
  else if (key === "b") {
    fillShape = "blue";
  }
  else if (key === "g") {
    fillShape = "green";
  }
}

function drawSquare() {
  if (key === "d") {
    fill(fillShape);
    rectMode(CENTER);
    rect(width / 2, height / 2, 200, 200);
  }
}
