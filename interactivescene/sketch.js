// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Interactice Scence Assignement
// //Akashdeep Singh Khalsa
// //Febuary 14, 2018
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// //always draw white shape unless the colour is changed by assiugned keys
// let fillShape = "white";
// let value = 100;
//
// //creates windown to draw stuff on
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// // this function excecute whatever is written inside drawSquareAndCircle
// function draw() {
//   drawSquareAndCircle();
//   noStroke();
//
// }
//
// // change the shape colour depending on which assigned key you press
// // function keyTyped() {
// //   if (key === "w") {
// //     fillShape = "white";
// //   }
// //   else if (key === "b") {
// //     fillShape = "blue";
// //   }
// //   else if (key === "g") {
// //     fillShape = "green";
// //   }
// //   else if (key === "y") {
// //     fillShape = "yellow";
// //   }
// //   else if (key === "p") {
// //     fillShape = "pink";
// //   }
// // }
//
// function drawSquareAndCircle() {
//   // if key (s) is pressed then rotate the shape and draw rectangele and fill the shape with the colour that was set before
//   if (key === "s") {
//     square();
//   }
//   // if s is not pressed but c is pressed then do exact same things like traslate, roate, change colour except it will draw a circle
//   else if (key === "c") {
//     circle();
//   }
//
//   else if (key === "r"){
//     tsc();
//   }
// }
//
// function tsc(){
//   triangleR();
//   square();
//   circle();
// }
//
// function square(){
//   // teleporting the entire grid to centre
//   translate(width / 2, height / 2);
//   //rotate the shape
//   rotate(PI / random(0.1, 3));
//   // change the colour of the shape with pressing the assigned keys
//   fill(random(255), random(255), random(255));
//
//   //draw the shape
//   rect(random(windowWidth), random(windowHeight), random(100, 200), random(100, 200));
//
// }
//
// function circle(){
//   translate(width / 2, height / 2);
//   rotate(PI / random(0.1, 3));
//   fill(random(255), random(255), random(255));
//
//   ellipse(random(windowWidth), random(windowHeight), random(100, 200), random(100, 200));
// }
//
// function triangleR(){
//   translate(random(windowWidth), random(windowHeight));
//   rotate(PI / random(0.1, 3));
//
//   beginShape();
//   fill(random(255), random(255), random(255));
//
//   vertex(random(40,80), random(50,100));
//   vertex(random(200,400), random(70,140));
//   vertex(random(65,130), random(155,310));
//
//   endShape(CLOSE);
//
// }
//
// function mousePressed() {
//   clear();
// }
let value = 0;
function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){

  background(250);
  normalMaterial();

  push();
  rotateZ(frameCount * 0.11);
  rotateX(frameCount * 0.11);
  rotateY(frameCount * 0.11);
  box(100, 100, 100);    pop();
}

function mousePressed() {
  if (value === 0) {

    translate(value,value);
  }
  else {
    value = 0;
  }
}
