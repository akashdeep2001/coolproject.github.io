// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background("white");
  control();

}

function control(){
  let xs = 0;
  let ys = 0;
  rect(xs,ys,20,20);
  if(xs ===0) {
    xs+=100;

  }
}
