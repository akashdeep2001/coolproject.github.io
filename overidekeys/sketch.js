let lightSwitch;

function setup() {
  createCanvas(1350, 495);
  background("white");
  lightSwitch = true;
}

function draw() {
  drawLight();
}

function keyTyped() {
  if (key === ' ') {
    lightSwitch = !lightSwitch;
    return false;
  }
}

function drawLight() {
  if (lightSwitch === true) {
    fill(255);
  } else {
    fill(0);
  }
  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 200);
}
