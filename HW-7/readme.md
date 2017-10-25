Dominik Stallings, 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing
lines 1 - 10 are variables concerning the ball dimensions

line 12 sets up the sketch
l 13 creates the canvas for the sketch
l 14 decides the background is white
l 19 states that we are starting a draw function (the magic of the sketch)
l 21 states that the ball posx is balldeltax * ballscalex which determine the angle of the ball
l 22 states that the ball y pos is the balldeltay * ballscaley which determine the speed of the ball
l 25 states that if the ball posx is larger or equal to the width of the canvas then it is made true that the posx is larger than 0.
l26 states that the speed equals -1 * ball deltax which is -1 * 1

l28 states essentially the same thing as l25, the only change is  that this concerns the angle rather than speed
l29 is the same as l26, just concerning the angle
l32 makes the ball white
l33 makes a ball
l36 maps the mousex to ballscalex (which concerns the speed of the ball)
l37 maps the mousey to ballscaley which concerns the angle of the ball
## How did you alter the sketch?
I added an if/else funtion that states if mouseIsPressed then text showing "PLEASE NO TOUCHY TOUCH" enters, if the screen hasn't been touchy touched, text showing " don't even think about touchy touch" appears. The ball also changes colors randomly and its size changes between 20 and 40 pixels randomly. Why not?

I also made the ball more responsive to the mouse being pressed by changing the 0.5 in the ball.scale mapping to 0.1. This feels much more fluid.
