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
// var to control if the ball is moving or stopping
var stopBall = true;
// var move to right the ball and increase
var moveToRightIncreaseBall = true;
// var move to left the ball and decrease
var moveToLeftDecreaseBall = true;

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
  if (moveToRightIncreaseBall == false) {
    sizeX_ball++;
    sizeY_ball++;
    ellipse(mouseX + 20, y, sizeX_ball, sizeY_ball);
  }
  // condition to increase the ball if is false
  if (moveToRightIncreaseBall == true) {
    sizeX_ball++;
    sizeY_ball++;
    ellipse(mouseX + 20, y, sizeX_ball, sizeY_ball);
  }

  noFill();
  strokeWeight(3);
  rect(0, 0, width, height);
}

function mousePressed() {
  loop();
  moveToRightIncreaseBall = !moveToRightIncreaseBall;
}

function mouseReleased() {
  noLoop();
}
