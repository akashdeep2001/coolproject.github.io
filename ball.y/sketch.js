let ball = {
  x:200,
  y:300,
  radius:50,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(0);
  //folow the mouse
  noCursor();
  ball.x = mouseX;
  ball.y = mouseY;

  ellipse(ball.x,ball.y,ball.radius,ball.radius);
}
