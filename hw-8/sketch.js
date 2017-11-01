function setup(){
    createCanvas(windowWidth, windowHeight);
    noFill();
  }

  function draw(){
    background(255);
    for (var y = 15; y <= height; y += 8) {
    		for (var x = 12; x <= width; x += 20) {
    			fill(255);
    			ellipse(x + y, x + y, 13 - y/10.0, 13 - y/10.0);
    			}
        }
      }
