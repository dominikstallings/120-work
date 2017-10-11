function setup() {
    createCanvas( 1920, 1080 );
}

var clockRotationRate = 0;
var secondRotationRate = 0;
var minuteRotationRate = 0;
var hourRotationRate = 0;

function draw(){
  background ('rgb(89, 64, 89)' );

  noCursor();

  clockRotationRate = (mouseY * 0.1) - 20;

  secondRotationRate = (secondRotationRate + 2 );

  minuteRotationRate = (minuteRotationRate + 1 );

  hourRotationRate = (hourRotationRate + 3 );

push();

  translate( mouseX, mouseY );

push();

  fill('rgb(255, 255, 255)' );
  stroke( 0 );
  strokeWeight( 1 );
  ellipse( 0, 0, 120, 120);

text( "12", -7, -75, 20, 20);
text( "3", 62, -3, 20, 20);
text( "6", -2, 61, 20, 20);
text( "9", -69, -3, 20, 20);


push();

  strokeWeight( 2 );
  stroke ( 0 );

push();

  rotate(radians(secondRotationRate) );
  stroke('rgb(0, 0, 0)' );
  line( 0, 0, 48, 0 );
// second timer lol
  rotate(radians(minuteRotationRate) );
  stroke('rgb(0, 0, 0)' );
  line( 0, 0, 55, 0 );
//minute timer haha
  rotate(radians(hourRotationRate) );
  stroke('rgb(171, 0, 0)' );
  line( 0, 0, 58, 0);

  pop();
  pop();
  pop();
  pop();

}
