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
var score;
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
  score = new Game();
  lives = new Game();
}

function draw() {
  var RGBcolor = color(255, 255, 255);
  var score = "0";
  var lives = "0";
  // background image
  image(backgroundImage);
  // write score
  text("score", 10, 20);
  text(score, 50, 20);
  // write lives
  text("lives", 10, 40)
  text(lives, 50, 40);
  // circle color
  fill(RGBcolor);
  // to display circle
  ellipse(40, 500 / 2, 50, 50);
  // score and live board
  // rect(7, 5, 50, 50);
  for (var i = 0; i < layout.length; i++) {
    layout[i].display();
  }
}

// Game class
function Game() {
  // instance variables
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

  // instance methods
  this.display = function() {
    for (var i = 1000; i > 0; i -= 200) {
      rect(this.x_up + i, this.y_up, this.sizeWidthUp, this.sizeHeightUp);
      rect(this.x_down + i, this.y_down, this.sizeWidthDown, this.sizeHeightDown);
    }
  }
}

function keyPressed() {

}
