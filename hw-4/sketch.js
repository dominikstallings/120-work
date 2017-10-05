function setup(){
  createCanvas(600,800);
}

function draw(){

  background('rgb(119, 121, 153)')

  push();

  translate(300,400);

push();
translate(0,-55);

stroke('rgb(236, 125, 24)')
strokeWeight(40);
line(-140,-200,-200,-100);
line(-200,-100,-200,0);

stroke('rgb(53, 119, 172)');
strokeWeight(60);
point(-200,0);

rotate( radians(-50) );
stroke('rgb(236, 125, 24)')
strokeWeight(40);
line(200,100,140,200);
line(200,0,200,100);

stroke('rgb(53, 119, 172)');
strokeWeight(60);
point(140,200);

pop();

push();
noStroke();
fill('rgb(75, 75, 75)');
rect(-150,-280,280,400);

pop();

stroke('rgb(0,0,0)');
strokeWeight(10);
line(0,-280,0,120);

ellipse(20,-265,5,5);
ellipse(20,-240,5,5);
ellipse(20,-200,5,5);
ellipse(20,-160,5,5);
ellipse(20,-120,5,5);
ellipse(20,-80,5,5);
ellipse(20,-40,5,5);
ellipse(20,0,5,5);
ellipse(20,40,5,5);
ellipse(20,80,5,5);

push();
translate(0,200);

fill('rgb(0,0,0)');
stroke('rgb(75,75,75)');
strokeWeight(10);
rect(45,-75,80,300);

fill('rgb(0,0,0)');
stroke('rgb(75,75,75)')
strokeWeight(10);
rect(-145,-75,80,300)

pop();

push();
translate(0,-175);

noStroke();
fill('rgb(246, 216, 177)')
ellipse(0,-130,200,200);
fill(0);
arc(0,-60,250,60,radians(190),radians(350),PIE);

pop();

push();
translate(0,-175)
triangle(0,-120,20,-100,-20,-100);

pop();

push();
translate( -60, -40 );

fill(255);
ellipse( 0,-280, 60, 35 );
noFill();
fill( 'rgb(75, 185, 255)' );
ellipse( 0, -280, 30 );
fill( 0 );
ellipse( 0, -280, 20 );

rotate(PI);
noStroke();
quad( 40, 300, 35, 320, -30, 321, -30, 320 );
pop();

push();
translate( 60, 40 );

fill(255);
ellipse( 0,-360, 60, 35 );
noFill();
fill( 'rgb(75, 185, 255)' );
ellipse( 0, -360, 30 );
fill( 0 );
ellipse( 0, -360, 20 );

rotate(PI);
noStroke();
quad( 30,400,-30,400,-31,380 );
    // 40, 380, 35, 400, -30, 401, -30, 400
pop();
}
