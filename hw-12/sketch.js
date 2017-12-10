let ball = [];
let init_numBalls = 3;
let bg_color;
let canCreateNewBall = true;

function setup(){
  createCanvas(windowWidth, windowHeight);

  let init_x = 100;
  let init_y = 100;
  let init_size = random(50, 100);

  for (let i = 0; i < init_numBalls; i++) {
          ball.push (
              new Ball(init_x, init_y, init_size, randomColor())
          );
          init_x += init_size + random(50, 150);
          if (init_x >= width) {
              init_x = 100;
              init_y += init_size + random(10, 30);
          }
          init_size = random(20, 150);
      }
  }

function draw(){
  background(255, 255, 255, 5);

  canCreateNewBall = true;

  for (let i = 0; i < ball.length; i++){
    ball[i].frame(ball, i);
    if (ball[i].mouseCheck()) {
      ball[i].delta.x = -ball[i].delta.x;
    }
  }
}

function randomColor(){
  return color( floor(random(256)), floor(random(256)), floor(256) );
}

function CreateNewBall(){
  for (let i = 0; i < 2; i++) {
    ball.push
      new Ball(random(width), random(height), random(20, 150), randomColor());
  }
}

function killBall(idx){
  ball.splice(idx, 1);
}

class Ball{

  constructor(init_x, init_y, size, color) {

    this.loc =  {
      x: init_x,
      y: init_y
    };
    this.size = size;
    this.rad = this.size * 0.5;
    this.angle = 0;
    this.color = color;
    this.delta = {
      x: map(this.size, 40, 150, 10, 0.5) * map(round(random(1, 2)), 1, 2, -1, 1),
      y: 0,
      gravity: 0.1
    };
  }

frame(objArr, myIdx){
  this.bounce();
  this.checkCollisions(objArr, myIdx);
  this.display();
}

display() {
  push();
  translate(this.loc.x, this.loc.y);
  rotate(this.angle);

  fill(this.color);

  noStroke();
  ellipse(0, 0, this.size, this.size);

  pop();
}

bounce(){
  this.loc.x += this.delta.x;
        if (this.loc.x + this.rad >= width) {
            this.loc.x = width - 1 - this.rad;
            this.delta.x *= -1;
        } else if (this.loc.x - this.rad <= 0) {
            this.loc.x = 1 + this.rad;
            this.delta.x *= -1;
}

      this.delta.y += this.delta.gravity;
      this.loc.y += this.delta.y;
      if (this.loc.y + this.rad >= height) {
          this.loc.y = height - 1 - this.rad;
          this.delta.y *= 0.9;
          this.delta.y *= -1;
      }
  }

  mouseCheck() {

    let d = floor(dist(this.loc.x, this.loc.y, mouseX, mouseY));

    if (d < this.rad){
      return true;
    } else {
      return false;
    }
  }

  checkCollisions( objArr, myIdx) {
    for (var i = 0; i < objArr.length; i++) {
      if (myIdx !== i) {
        var obj = objArr[i];
        var objDist = dist(this.loc.x, this.loc.y, obj.loc.x, obj.loc.y);
        var maxDist = this.rad + obj.rad;
        if (objDist <= maxDist) {
          this.delta.x *= -1;
          this.delta.y *= -1;
          if (canCreateNewBall) {
            CreateNewBall();
            canCreateNewBall = false;
          }
  //        killBall(myIdx);
          }
        }
      }
    }
  }
