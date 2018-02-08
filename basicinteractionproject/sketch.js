// Basic Interaction Demo
// Akashdeep Singh Khalsa
// Feb 7, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function deviceShaken(){
  textSize(32);
  text("Shaken, not stirred.",width/2,height/2);
}

function keyPressed(){
  noStroke()
  fill(random(255),random(255),random(255),[random(255)])
  ellipse(random(0, [width]), random(0, height), random(50,200), random(50,100));

}

function mouseClicked() {
  noStroke()
  fill(random(255),random(255),random(255),[random(255)])
  rect(mouseX, mouseY, random(50,200), random(50,100));
}
