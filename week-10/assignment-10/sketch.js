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
var marker;
// vars for ellipse
var x;
var y;
var size;
var whiteColor;
var redColor;

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
  marker = new Game();
  // setup vars for ellipse
  whiteColor = color(255, 255, 255);
  x = 40;
  y = height / 2;
  size = 50;
}

function draw() {
  // background image
  image(backgroundImage);
  // circle color
  fill(whiteColor);
  // to display circle
  ellipse(x, y, size, size);
  // method display()
  fill(whiteColor);
  for (var i = 0; i < layout.length; i++) {
    layout[i].display();
  }
  // method board()
  marker.board();
}

// Game class
function Game() {
  /** instance variables */
  // vars for display method
  // up
  this.x_up = 100;
  this.y_up = 0;
  this.sizeWidthUp = 50;
  this.sizeHeightUp = 200;
  // down
  this.x_down = 100;
  this.y_down = 300;
  this.sizeWidthDown = 50;
  this.sizeHeightDown = 200;
  // vars for board method
  this.score = "0";
  this.lives = "0";

  // instance methods
  this.display = function() {
    for (var i = 1000; i > 0; i -= 200) {
      rect(this.x_up + i, this.y_up, this.sizeWidthUp, this.sizeHeightUp);
      rect(this.x_down + i, this.y_down, this.sizeWidthDown, this.sizeHeightDown);
    }
  };

  this.board = function() {
    fill(255);
    // write score
    text("score", 10, 20);
    text(this.score, 50, 20);
    // write lives
    text("lives", 10, 40);
    text(this.lives, 50, 40);
  };
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 2;
    size = 50;
  } else if (keyCode === RIGHT_ARROW) {
    x += 2;
    size = 50;
  } else if (keyCode === UP_ARROW) {
    y -= 2;
    size = 50;
  } else if (keyCode === DOWN_ARROW) {
    y += 2;
    size = 50;
  }
}
