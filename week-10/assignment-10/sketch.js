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
  // create objects
  layout = new Game();
  score = new Game();
  lives = new Game();
  // size canvas
  createCanvas(1000, 500);
}

function draw() {
  var RGBcolor = color(255, 0, 0);
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
}

// layout Class
function Game() {

}

function keyPressed() {

}
