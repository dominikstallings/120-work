// I wanted to call these "boxes" cubes instead of "boxes" but this stupid code is stupid so they're called boxes now I suppose UGH

var boxes = [];
var boxNum = 30;


function setup() {
  createCanvas( windowWidth, windowHeight );
  background("rgb(64, 227, 139)");


  for (let i = 0; i < boxNum; i++) {
    boxes.push( new Box( width/2, height/2, random(2,20), (random(150,255), random(255), random(255))) );
  }

}

function draw() {

  for (var i = 0; i < boxes.length; i++) {
        boxes[i].frame();
    }

}

class Box {

  constructor( x, y, size, color ) {

    this.size = random( 60, 60 );
    this.width = size;
    this.height = size;
    this.posX = x;
    this.posY = y;
    this.deltaX = random( -10, 10 );
    this.deltaY = random( -10, 10 );
    this.boxColor = (random(150, 255), random(100, 255), random(0,255));

    // why THE HECK are my CUBES not different colors????????????
  }


  frame() {
    this.display();
    this.move();
    this.edgeCheck();
  }


  display() {
    push();

    fill( this.boxColor );

    noStroke();

    rotate(PI/ 4.0);

    translate( this.posX, this.posY );

    rect( 0, 0, this.width, this.height );
    pop();
  }


  move() {
    this.posX += this.deltaX;
    this.posY += this.deltaY;
  }


  edgeCheck() {
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
