/**
*
* Author: Elohim Guevara Varela
*
* Assignment 6: Audio Visualizer
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Platform: https://www.kadenze.com/
*
*/

var angle = 0;
// change the position of the wave in "axis y"
// if increment the offset value, "axis y" increment and vice versa
var offset = 300;
// amplitud of the wave
var scalar = 35;
// speed of the motion
var speed = 0.05;
// size X baLL
var sizeX_ball = 10;
// size Y ball
var sizeY_ball = 10;
// boolean var to activate increase and decrease the ball
var state = true;
// var move to ball x axis
var moveX;

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

  // ball moves on sine curve
  var y = offset + (sin(angle) * scalar);
  // condition to increase the ball if is true
  if (state == false) {
    ellipse(mouseX + 20, y, sizeX_ball, sizeY_ball);
  }
  // condition to increase the ball if is false
  // and avoid to disappear the ball when RIGHT_ARROW key is pressed
  if (state == true) {
    ellipse(mouseX + 20, y, sizeX_ball, sizeY_ball);
  }

  noFill();
  strokeWeight(3);
  rect(0, 0, width, height);
}

function keyPressed() {
  loop();
  state = !state;
  // decision to increase the ball
  if (keyCode == RIGHT_ARROW) {
    sizeX_ball += 10;
    sizeY_ball += 10;
  // decision to decrease the ball
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
