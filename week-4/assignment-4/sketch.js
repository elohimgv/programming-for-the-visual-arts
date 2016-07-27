/**
*
* Author: Elohim Guevara Varela
*
* Assignment 4: Collage
* Note: It is not exactly a collage, but I like the form
* in that I´ve attacked the assignment.
* Also the code dosen´t run on browser like Crhome, Chrome Canary
* just run on Mozilla Firefox and Microsoft Edge.
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Platform: https://www.kadenze.com/
*
*/

// variable for load image
var img;
// colors for rect()
var bermellon_100;
var yellow_100;
var blue_100;
// rect sizes
var sizeX;
var sizeY;
var sizeX2;
var sizeY2;
var sizeX3;
var sizeY3;
// rect() positions
var x;
var y;
var x2;
var y2;
var x3;
var y3;

function preload() {
  img = loadImage('wilkinson_afterglow.jpg');
}

function setup() {
  createCanvas(1365, 569);
  textFont("Adorable");

  // colors with transparency of alpha 100
  bermellon_100 = color(230, 46, 0, 100);
  yellow_100 = color(255, 233, 0, 100);
  blue_100 = color(0, 0, 255, 100);

  sizeX = random(45, 437);
  sizeY = random(50, 300);
  sizeX2 = random(10, 500);
  sizeY2 = random(15, 666);
  sizeX3 = random(20, 830);
  sizeY3 = random(18, 787);

  x = random(5, 1200);
  y = random(10, 400);
  x2 = random(10, 1100);
  y2 = random(15, 410);
  x3 = random(20, 950);
  y3 = random(5, 380);
}

function draw() {
  //noLoop();
  image(img, 0, 0, width, height);
  // colors with transparency of alpha 90
  var bermellon_90 = color(230, 46, 0, 90);
  var yellow_90 = color(255, 233, 0, 90);
  var blue_90 = color(0, 0, 255, 90);
  strokeWeight(0);

  if (pmouseX < 455) {
    fill(bermellon_90);
  }
  else if (pmouseX > 455 && pmouseX < 910) {
    fill(yellow_90);
  }
  else if (pmouseX > 910 && pmouseX < width + 1) {
    fill(blue_90);
  }
  rect(0, 0, 1365, 569);

  fill(bermellon_100);
  rect(x, y, sizeX, sizeY);
  fill(yellow_100);
  rect(x2, y2, sizeX2, sizeY2);
  fill(blue_100);
  rect(x3, y3, sizeX3, sizeY3);

  fill(255);
  textSize(50);
  var str = " I still thinking about you";
  text(str, random(width), random(height), random(width), random(height));
}

function mouseReleased() {
  if (sizeX == random(45, 437) && sizeY == random(50, 300) && sizeX2 == random(10, 500) && sizeY2 == random(15, 666)
     && sizeX3 == random(20, 830) && sizeY3 == random(18, 787)) {
    sizeX = random(66, 400);
    sizeY = random(35, 380);
    sizeX2 = random(5, 550);
    sizeY2 = random(10, 68);
    sizeX3 = random(22, 850);
    sizeY3 = random(16, 800);
  }
  else {
    sizeX = random(45, 437);
    sizeY = random(50, 300);
    sizeX2 = random(10, 500);
    sizeY2 = random(15, 666);
    sizeX3 = random(20, 830);
    sizeY3 = random(18, 787);
  }

  if (x == random(5, 1200) && y == random(10, 400) && x2 == random(10, 1100) && y2 == random(15, 410) && x3 == random(20, 950)
     && y3 == random(5, 380)) {
    x = random(25, 1105);
    y = random(30, 390);
    x2 = random(23, 889);
    y2 = random(33, 310);
    x3 = random(10, 100);
    y3 = random(7, 450);
  }
  else {
    x = random(5, 1200);
    y = random(10, 400);
    x2 = random(10, 1100);
    y2 = random(15, 410);
    x3 = random(20, 950);
    y3 = random(5, 380);
  }
}
