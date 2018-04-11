// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  angleMode(DEGREES);
  translate(100,100);
  rotate(frameCount);

  fill(0);
  rect(100,100,300,50);

}
