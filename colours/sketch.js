// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
// circles and rects demo
// Feb 12, 2018
// Dan Schellenberg

let mode;

function setup() {
  createCanvas(1350, 495);
  background("white");
  noStroke();
  mode = 2;
}

function draw() {
  if (mouseX < width/2) {
    //draw rectangles
    fill(random(255), random(255));
    if (mode === 1) {
      rect(random(width), random(height), random(50, 200), random(50, 200));
    }
    else if (mode === 2) {
      rect(random(width/2), random(height), random(50, 200), random(50, 200));
    }
  }
  else {
    fill(random(255), random(255), random(255), random(255));
    if (mode === 1) {
      ellipse(random(width), random(height), random(50, 200));
    }
    else if (mode === 2) {
      ellipse(random(width/2, width), random(height), random(50, 200));
    }
  }
}

function keyTyped() {
  if (key === "1") {
    mode = 1;
  }
  else if (key === "2") {
    mode = 2;
  }
}

function mousePressed() {
  background(255);
}
