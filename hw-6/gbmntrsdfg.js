// DEFINE GLOBAL VARIABLES
var bgColor; // background-color
var centerX, centerY;
var smoke = {};
smoke.pos1x = 200;
smoke.pos1y = 200;
smoke.pos2x = 150;
smoke.pos2y = 150;
smoke.pos3x = 0;
smoke.pos3y = 0;
var multMax = 0.01;
var multDelta;
var mult;
var blueFill = 1;
var alphaAmt = 10;
var alphaNoise;


function setup() {
    bgColor = random(0,256);
    createCanvas(windowWidth, windowHeight);
    background(bgColor);
    // frameRate(20);
frameRate(60);
    // Set initial position
    smoke.pos1x = random(width);
    smoke.pos1y = random(height);
    smoke.pos2x = smoke.pos1x + 15;
    smoke.pos2y = smoke.pos1y - 15;
}


function draw() {

    centerX = width * 0.5;
    centerY = height * 0.5;

    multDelta = noise(0.1 * frameCount + pow(2, 4));
    multDelta = map(multDelta, 0, 1, -0.1, 0.2);
    multMax = constrain(multMax + multDelta, 0.3, 0.4);
    mult = random(-multMax, multMax);
    smoke.pos3x = abs(((width * mult) + smoke.pos2x) % width);
    mult = random(-multMax, multMax);
    smoke.pos3y = abs(((height * mult) + smoke.pos2y) % height);


    mult = noise(frameCount * 0.3) * 255;
    // mult = map( mult, 0, 1, -10, 10 );
    // redFill = constrain((redFill + mult), 0, 255);
    redFill = constrain(mult, 0, 255);

    noStroke();
    // stroke(200, 20);
    // get a random noise value between (0-1)
    alphaNoise = noise(0.7 * frameCount + 1000);
    alphaNoise = map(alphaNoise, 0, 1, -2, 2);
    alphaAmt += alphaNoise;
    alphaAmt = constrain(alphaAmt, 20, 100);
    fill(blueFill, 254, 254, 5 );

    ellipse(smoke.pos1x, smoke.pos1y, smoke.pos2x, smoke.pos2y, smoke.pos3x, smoke.pos3y);

    smoke.pos1x = smoke.pos2x;
    smoke.pos1y = smoke.pos2y;
    smoke.pos2x = smoke.pos3x;
    smoke.pos2y = smoke.pos3y;
}



/* FULLSCREEN FUNCTIONALITY */
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
