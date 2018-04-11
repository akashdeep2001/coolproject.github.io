// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

let grid = [[0, 1, 0],[1, 1, 0],[0, 0, 1]];
let rows = 3;
let cols = 3;
let cellsize;

function setup() {
  createCanvas(600, 600);
  cellsize = width / cols;
}

function draw() {
  background(255);
  displaygrid();

}

function displaygrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y, rows; y++){
      if(grid[x][y] === 0) {
        fill (0);
      }
      else{
        fill(255);
      }
      rect(x*cellsize,y*cellsize, cellsize,cellsize);
    }
  }
}







function clicked()
