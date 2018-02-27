// Basic Interaction Demo
// Feb 7, 2018
// Akashdeep Singh Khalsa

function setup() {
  createCanvas(1350, 495);

}

function draw() {
  triangle1();

}

function triangle1() {
  size = 100;
  x = random(windowWidth);
  y = random(windowHeight);
  if ( mouseIsPressed && key === "s"){
    triangle(x,y,size,size,x3,y3);

  }
}
