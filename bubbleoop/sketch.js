// timer oop
// Dan Schellenberg
// Apr 17, 2018


let myTimer;
let myBubble;


function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(3000);
  myBubble = new Bubble(random(width),height,25);

}

function draw() {
  if (myTimer.isDone()) {
    ellipse(random(width), random(height), random(25, 100), random(25, 100));
    myTimer.reset(1000);
  }
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}

class Bubble {
  constructor (x,y,radius){
    this.x=x;
    this.y=y;
    this.radius = radius;
    this.dy = random(-2,-1);
  }

  display(){
    fill(200,100,0,100);
    ellipse(this.x,this.y,this.radius,this.radius);
  }
  move(){
    if(this.y>0+this.radius){
    this.y += this.dy;
  }
  else{
    this.x += random(-3,3);
  }
}
