function setup(){
    createCanvas(windowWidth, windowHeight);
    noFill();
  }

  function draw(){
    background(0);
    for (var y = 15; y <= height; y += 8) {
    		for (var x = 12; x <= width; x += 20) {
    			fill(random(175, 255), random(175, 255), random(175, 255));
    			ellipse(x + y, x + y, 13 - y/10.0, 13 - y/10.0);
    			}
        }
      }
