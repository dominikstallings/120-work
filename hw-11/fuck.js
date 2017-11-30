let cubes = [];
let numOfCube = 25;
let bgColor;
let Cube;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color("rgb(64, 227, 139)")

  for (let i = 0; i < numOfCube; i++) {
    cubes.push(new Cube(width/2, height/2, random(2,20), random(0,255)) );
  }
}

function draw(){
  background(bgColor);

  for (var i = 0; i < boxes.length; i++) {
          cubes[i].frame();

class Cube {

constructor(x,y, size, color) {
  this.size = random(20,60);
  this.posX = x;
  this.posY = y;
  this.width = size;
  this.height = size
  this.moveX = random(-3, 3);
  this.moveY = random(-3, 3);
  this.cubeColor = (random(150, 255), random(100, 255), random(255));
}

frame() {
  this.display();
  this.move();
  this.edgeCheck();
}


display() {

  push();

  noStroke();

  fill(this.cubeColor);

  translate(this.posX, this.posY);

  rect(0, 0, this.width, this.height);

  pop();
}

move(){
  this.posX += this.moveX;
  this.posY += this.moveX;
}

edgeCheck(){
        if (this.posX >= width) {
            this.moveX *= -1;
            this.posX = width - abs(this.moveX);
        } else if (this.posX <= 0) {
            this.moveX *= -1;
            this.posX = abs(this.moveX);
        } else if (this.posY >= height) {
            this.moveY *= -1;
            this.posY = height - abs(this.moveY);
        } else if (this.posY <= 0) {
            this.moveY *= -1;
            this.posY = abs(this.moveY);
        }
      }
    }
  }
}
