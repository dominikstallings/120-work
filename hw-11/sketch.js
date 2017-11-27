let cube = [];
let numOfCube = 25;
let bgColor;

function setup(){
  createCanvas(windowWidth, windowHeight);
  bgColor = color("rgb(64, 227, 139)")

  for (let i = 0; i < numOfCube; i++) {
    cube.push( new Cube() );
  }
}

function draw(){
  background(bgColor);




class Cube {

constructor(x,y) {
  this.size = random(20,60);
  this.posX = x;
  this.posY = y;
  this.moveX = random(-3, 3);
  this.moveY = random(-3, 3);
  this.cubeColor = color(random(150, 255), random(100, 255), random(255));
}

frame() {
  this.display();
  this.move();
}


display() {

  push();

  noStroke();

  fill(this.cubeColor);

  translate(this.posX, this.posY);

  rotate(PI/3.0);

  quad(0, 0, this.size, this.size);

  pop();
}

move(){
  this.posX += this.moveX;
  this.posY += this.moveX;

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
