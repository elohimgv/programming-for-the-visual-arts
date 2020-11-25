/**
*
* Author: Elohim Gueleta
*
* Assignment 4: Collage
*
*/

// Image var
let img;
// Color vars
let bermellon;
let yellow;
let blue;
// Rectangle sizes 
let sizeX,sizeY,sizeX2,sizeY2,sizeX3,sizeY3 = 0;
// Rectangle positions
let x,y,x2,y2,x3,y3 = 0;

function preload() {
  img = loadImage('wilkinson_afterglow.jpg');
}

function setup() {
  createCanvas(1365, 569);
  frameRate(10);
  textFont("Adorable");

  // Colors with transparency 
  bermellon = color(230, 46, 0, 100);
  yellow = color(255, 233, 0, 100);
  blue = color(0, 0, 255, 100);
}

function draw() {
  //noLoop();
  image(img, 0, 0, width, height);
  // colors with transparency of alpha 90
  let backBermellon = color(230, 46, 0, 90);
  let backYellow = color(255, 233, 0, 90);
  let backBlue = color(0, 0, 255, 90);

  // Before image it has a color with alpha value
  // that it act like filter and it changes 
  // through the movement of mouse in "X" axis
  let leftSpace = pmouseX < width/3;
  let middleSpace = pmouseX > width/3 && pmouseX < (width/3)*2;
  let rightSpace = pmouseX > (width/3)*2 && pmouseX < width + 1;
  strokeWeight(0);
  if (leftSpace) {
    fill(backBermellon);
  }
  else if (middleSpace) {
    fill(backYellow);
  }
  else if (rightSpace) {
    fill(backBlue);
  }
  rect(0, 0, width, height);

  fill(bermellon);
  rect(x, y, sizeX, sizeY);
  fill(yellow);
  rect(x2, y2, sizeX2, sizeY2);
  fill(blue);
  rect(x3, y3, sizeX3, sizeY3);

  // For display random text
  fill(255);
  textSize(50);
  let str = " I still thinking about you";
  text(str, random(width), random(height), random(width), random(height));
}

function mouseReleased() {
  // Random rectangle sizes
  sizeX = random(45, 437);
  sizeY = random(50, 300);
  sizeX2 = random(10, 500);
  sizeY2 = random(15, 666);
  sizeX3 = random(20, 830);
  sizeY3 = random(18, 787);
  
  // Random rectangle positions
  x = random(5, 1200);
  y = random(10, 400);
  x2 = random(10, 1100);
  y2 = random(15, 410);
  x3 = random(20, 950);
  y3 = random(5, 380);
}
