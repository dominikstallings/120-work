

var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;



    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
push();
    if (mouseIsPressed) {
      background(0, 0, 0);
      noStroke();
      fill('rgb(255, 0, 170)')
      textSize(42);
      textAlign(CENTER);
      text("PLEASE NO TOUCHY TOUCH", width/2, height/2);



    } else {
        background(255,255,255);
        noStroke();
        fill('rgb(241, 101, 12)')
        textSize(20);
        textAlign(CENTER);
        text("Don't even think about touchy touch!!!", width/2, height/2);
    }
pop();

ball.width = random(20, 40);

red = (random(1, 255));
green = (random(1, 255));
blue = (random(1, 255));


if (mouseIsPressed) {
    fill (red, green, blue);
} else {
    fill(255);
}

  ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.1, 10);
    ball.scale_y = map(mouseY, 0, height, 0.1, 10);
}
