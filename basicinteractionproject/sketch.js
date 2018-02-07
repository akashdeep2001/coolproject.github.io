// Basic Interaction Demo
// Akashdeep Singh Khalsa
// Feb 7, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed(){
  noStroke()
  fill(random(255),random(255),random(255),[random(255)])
  ellipse(random(0, [width]), random(0, height), random(50,200), random(50,100));

}

function mouseClicked() {
  noStroke()
  fill(random(255),random(255),random(255),[random(255)])
  rect(random(0, [width]), random(0, height), random(50,200), random(50,100));

}
