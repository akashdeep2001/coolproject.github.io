let a = 80;

function setup() {
  createCanvas(1350, 495);
  background("white");
  background(0);
  stroke(random(255,255,255));
  noLoop();
}

function draw() {
  line(a, 0, a, height);

  for (let a = 120; a < 200; a += 2){
    line(a,0, a, height);
  }
}
