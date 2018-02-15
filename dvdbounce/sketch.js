let x, y, radius;
let dx, dy;
let dvd;

function preload() {
  dvd = loadImage("images/logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
}

function draw() {
  background(255);
  moveThing();
  displayThing();

}

function moveThing(){
  x += dx;
  y += dy;

  if (y + radius >= height || y - radius <=0){
    dy = dy * -1;
  }

  if ((x + radius >= width || x - radius <=0)){
    dx = dx * -1;
  }


}

function displayThing(){
  fill(0);
  // ellipse(x,y,radius*2,radius*2)
  imageMode(CENTRE);
  image(dvd,x,y);
}
