/**
*
* Author: Elohim Guevara Varela
*
* Assignment 10: Minimal Game
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Platform: https://www.kadenze.com/
*
*/

// vars to load sounds
var soundMovement;
var soundHit;
// var to load an image background
var backgroundImage;
// delcare objects
var layout = [];
var play;
// vars to display GAME OVER
var x_Position;
var y_Position;
var speed;
// vars intro button
var buttonIn;
var x_buttonIn;
var y_buttonIn;
var w_buttonIn;
var h_buttonIn;
var radiusIn;
// vars game over button
var buttonGO;
var x_buttonGO;
var y_buttonGO;
var w_buttonGO;
var h_buttonGO;
var radiusGO;

var state = 0;

var lives;

function preload() {
  backgroundImage = loadImage("back_image.jpg");
}

function setup() {
  // size canvas
  createCanvas(1000, 500);
  // create objects
  for (var i = 0; i < 5; i++) {
    layout.push(new Game());
  }

  play = new Game();
  // display GAME OVER
  x_Position = width / 2 - 200;
  y_Position = height / 2 + 25;
  speed = 3;
  // vars intro button
  buttonIn = false;
  x_buttonIn = 345;
  y_buttonIn = 202;
  w_buttonIn = 300;
  h_buttonIn = 100;
  // game over button
  buttonGO = false;
  x_buttonGO = 500 - 61;
  y_buttonGO = 390 - 20;
  w_buttonGO = 122;
  h_buttonGO = 40;

  radius = 5;

  lives = 3;
}

function draw() {
  // intro();
  startGame();
  // gameOver();
}

function intro() {
  // background image
  image(backgroundImage);
  // black transparent color
  fill(0, 0, 0, 180);
  rect(0, 0, 1000, 500);
  // if statement button to control boolean state
  if ((mouseX > x_buttonIn && mouseX < x_buttonIn + w_buttonIn) &&
    (mouseY > y_buttonIn && mouseY < y_buttonIn + h_buttonIn)) {
    buttonIn = true;
  } else {
    buttonIn = false;
  }
  // if statement button to control color
  if (buttonIn) {
    fill(0, 155, 0);
  } else {
    noFill();
  }
  // display a rect "button START"
  stroke(255);
  strokeWeight(2);
  rect(x_buttonIn, y_buttonIn, w_buttonIn, h_buttonIn, radius);
  // write word "START"
  textFont("Helvetica");
  textSize(60);
  fill(255);
  text("START", width / 2 - 100, height / 2 + 25);
}

function startGame() {
  // background image
  image(backgroundImage);
  // call obstacles() method
  for (var i = 0; i < layout.length; i++) {
    layout[i].obstacles();
  }
  // call ball() method
  play.ball();
  // write lives
  fill(255);
  text("lives: " + lives, 10, 40);
}

function gameOver() {
  // background image
  image(backgroundImage);
  // black transparent color
  fill(0, 0, 0, 180);
  rect(0, 0, 1000, 500);
  // game over message
  textFont("Helvetica");
  textSize(60);
  fill(255);
  text("GAME OVER ):", x_Position, y_Position);
  // if statement to create a motion
  if (x_Position > 1100) {
    x_Position = -370;
  }
  x_Position += speed;
  // Would you like to play a game? message
  textSize(30);
  text("Would you like to play a game?", width / 2 - 210, height / 2 + 100 );
  // if statement button to control boolean state
  if ((mouseX > x_buttonGO && mouseX < x_buttonGO + w_buttonGO) &&
    (mouseY > y_buttonGO && mouseY < y_buttonGO + h_buttonGO)) {
    buttonGO = true;
  } else {
    buttonGO = false;
  }
  // if statement button to control color
  if (buttonGO) {
    fill(0, 155, 0);
  } else {
    noFill();
  }
  // display a rect "button yes"
  stroke(255);
  strokeWeight(2);
  rect(x_buttonGO, y_buttonGO, w_buttonGO, h_buttonGO, radius);
  // write word "yes"
  textAlign(CENTER);
  noStroke();
  fill(255);
  text("yes", width / 2, 396);
}

function keyPressed() {
  // the variable keyCode is used to detect special keys such as
  // BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL,
  // OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
  if (keyCode === LEFT_ARROW) {
    // move left
    play.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    // move right
    play.moveRight();
  } else if (keyCode === UP_ARROW) {
    // move up
    play.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    // move down
    play.moveDown();
  }
}
