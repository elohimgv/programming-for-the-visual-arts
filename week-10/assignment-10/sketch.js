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
var boom;
var play;

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
  boom = new Game();
  play = new Game();
}

function draw() {
  // background image
  image(backgroundImage);
  // method display()
  for (var i = 0; i < layout.length; i++) {
    layout[i].obstacles();
  }
  // call method board()
  marker.board();
  // call method ball()
  play.ball();
  // function intro
  intro();
}

function intro() {
  // background image
  image(backgroundImage);
  // black transparent color
  fill(0, 0, 0, 180);
  rect(0, 0, 1000, 500);
  // button
  textFont("Helvetica");
  textSize(60);
  fill(255);
  text("START", width / 2 - 100, height / 2 + 25);
  noFill();
  stroke(255);
  strokeWeight(5);
  rect(345, 202, 300, 100, 5);
}

function startGame() {

}

function gameOver() {

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    play.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    play.moveRight();
  } else if (keyCode === UP_ARROW) {
    play.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    play.moveDown();
  }
}

// Game class
function Game() {
  /** instance variables */
  // vars for obstacles method
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
  // vars for ball method
  this.x = 40;
  this.y = height / 2;
  this.size = 50;
  this.whiteColor = color(255, 255, 255);
  this.redColor = color(255, 0, 0);
  // vars for board method
  this.score = "0";
  this.lives = "0";
  // var for detectCollision method
  this.hit;

  // instance methods
  this.obstacles = function() {
    for (var i = 1000; i > 0; i -= 200) {
      rect(this.x_up + i, this.y_up, this.sizeWidthUp, this.sizeHeightUp);
      rect(this.x_down + i, this.y_down, this.sizeWidthDown, this.sizeHeightDown);
    }
  };

  this.ball = function() {
    // circle white white color
    fill(this.whiteColor);
    // to display circle
    ellipse(this.x, this.y, this.size, this.size);
  };

  this.detectCollision = function() {

  };

  this.moveLeft = function() {
    this.x -= 5;
    this.size = 50;
  };

  this.moveRight = function() {
    this.x += 5;
    this.size = 50;
  };

  this.moveUp = function() {
    this.y -= 5;
    this.size = 50;
  };

  this.moveDown = function() {
    this.y += 5;
    this.size = 50;
  };

  this.board = function() {
    fill(255);
    // write score
    textFont("Arial");
    text("score: " + this.score, 10, 20);
    // write lives
    text("lives: " + this.lives, 10, 40);
  };
}
