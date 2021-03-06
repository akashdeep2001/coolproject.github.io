// mouse and keyboard interaction
// Akashdeep Singh Khalsa
// Feb 8, 2018


function setup() {
  createCanvas(1350, 495);
  background("white");
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {

}

function mousePressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));

  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(50, 150), random(50, 150));
  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 150), random(50, 150));
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    background(255);
  }
  else if (key === 'b' || key === 'B') {
    background(0);
  }
}
