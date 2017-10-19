var bgColor;
var centerX, centerY;
var strom = {};
strom.pos1x = 100;
strom.pos1y = 100;
strom.pos2x = 200;
strom.pos2y = 200;
strom.pos3x = 0;
strom.pos3y = 0;
var multMax = 0.01;
var multDelta;
var mult;
var blueFill = 255;
var alphaAMt = 40;
var alphaNoise;

function setup() {
  bgColor = color(0, 0, 0);
  createCanvas( windowWidth, windowHeight);
  background(bgColor);

  strom.pos1x = random(width);
  strom.pos1y = random(height);
  strom.pos2x = strom.pos1x + 2;
  strom.pos2y = strom.pos1y - 2;
}

function draw(){

  centerX = width * 0.5;
  centerY = height * 0.5;

  multDelta = noise(0.01 * frameCount + pow(2, 8));
  multDelta = map(multDelta, 0, 1, -0.0001, 0.0001);
  multMax = constrain(multMax + multDelta, 0.005, 0.2);
  mult = random (-multMax + multMax);
  strom.pos3x = abs(((width * mult) + strom.pos2x) % width);
  mult = random(-multMax, multMax);
  strom.pos3y = abs(((height * mult) + strom.pos2y) % height);

  mult = noise(frameCount * 0.001) * 255;
  blueFill = constrain(mult, 0, 255);

  noStroke();
  alphaNoise = noise(0.1 * frameCount + 1000);
  alphaNoise + map(alphaNoise, 0, 2, -5, 2);
  alphaAMt += alphaNoise
  alphaAMt = constrain(alphaAMt, 20, 100);
  fill(blueFill, 255 - blueFill, 175, 30);

  triangle(strom.pos1x, strom.pos1y, strom.pos2x, strom.pos2y, strom.pos3x, strom.pos3y);

  strom.pos1x = strom.pos2x;
  strom.pos1y = strom.pos2y;
  strom.pos2x = strom.pos3x;
  strom.pos2y = strom.pos3y;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bgColor);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}
