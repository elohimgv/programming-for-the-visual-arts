/**
*
* Author: Elohim Guevara 
*
* Assignment 6: Audio Visualizer
*
*/

var sound;

var angle = 0;
// Change the position of the wave in "axis y"
// if increment the offset value, "axis y" 
// increment and vice versa
var offset = 300;
// Amplitud of the wave
var scalar = 35;
// Speed of the motion
var speed = 0.05;
// Size X baLL
var sizeX_ball = 10;
// Size Y ball
var sizeY_ball = 10;
// Boolean var to activate increase 
// and decrease the ball
var state = true;
// Var move to ball x axis
var moveX;

function preload() {
  sound = loadSound('song.mp3');
}

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background(255);

  for (var x = 20; x <= width - 20; x += 5) {
    var y = offset + (sin(angle) * scalar);
    point(x, y);
    angle += (TWO_PI / 60) / 4;
  }

  // RGB - GREEN color
  var G = map(mouseX, 0, width, 0, 255);
  // RGB - BLUE color
  var B = map(mouseY, 0, height, 0, 255);
  // Ball moves on sine curve
  var y = offset + (sin(angle) * scalar);
  // Condition to increase the ball if is true
  if (state == false) {
    fill(234, G, B);
    ellipse(mouseX + 20, y, sizeX_ball, sizeY_ball);
  }
  // Condition to increase the ball if is true
  // and avoid to disappear the ball when 
  // RIGHT_ARROW key is pressed
  if (state == true) {
    fill(234, G, B);
    ellipse(mouseX + 20, y, sizeX_ball, sizeY_ball);
  }

  noFill();
  strokeWeight(3);
  rect(0, 0, width, height);
}

function keyPressed() {
  loop();
  state = !state;
  // Decision to increase the ball
  if (keyCode == RIGHT_ARROW) {
    sizeX_ball += 10;
    sizeY_ball += 10;
  // Decision to decrease the ball
  } else if (keyCode == LEFT_ARROW) {
    sizeX_ball -= 10;
    sizeY_ball -= 10;
  }
}

function keyReleased() {
  noLoop();
}

function mouseMoved() {
  loop();
  moveX = mouseX;
}

function mousePressed()
{
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}
