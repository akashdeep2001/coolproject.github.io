// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
let boxsize;
let isfilled;

function setup() {
  createCanvas(400, 400);
  boxsize = width / 8;
  isfilled = false;
}

function draw() {

  background("black");
  checkboard();
}

function checkboard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if(isfilled){
        fill(43, 254, 66);
      }
      else{
        fill();
      }
      rect(boxsize * j,boxsize * i, boxsize, boxsize);
      isfilled = !isfilled;
    }
    isfilled = !isfilled;
  }
}
