var circleMin = 2;
var circleMax = 0;
var circleNoise = 0;
var multDelta;
function setup() {

noCursor();

}

function draw() {

  bgColor = color(0, 0, 0);

  createCanvas( windowWidth, windowHeight);
  background(bgColor);

var red = floor(random(1,256));
var green = floor(random(1,256));
var blue = floor(random(1,256));

var circleSize = random( 10, circleMax);
frameRate(30);
fill(red, green, blue, );



push();
translate(0, random(10, -10));
noStroke();
ellipse( width/2 , height/2 , circleSize, circleNoise);
circleNoise = noise(0.89236 * frameCount);
circleNoise = circleNoise + map(circleNoise, 1, 50 , -5, -20);
circleMax += circleNoise;
circleMax = constrain(circleMax, -2000, 2000);
//circleMax = width;
pop();

textSize(10);
fill(red, green, blue);
text("WHERE IS THE LINE?", width/2, height/2- circleNoise);

push();

var posX = random(0, 100) + mouseX;
var posY = random(0, 100) + mouseY;

textSize(10);
fill(255);
text("I CAN'T DECIDE.", posX, posY);
}
