/**
*
* Author: Elohim Guevara Varela
*
* Assignment 5: Synthesis A, Nonlinear Narrative
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Platform: https://www.kadenze.com/
*
*/

// variables for change to state to state
var state = 0;
var nextState = 0;
// variable to delay change image to another with function tint()
var counter = 0;

// variables for load images
var thread;
var drawing;
var art;
var colors;
var flowers;

// variables for texts
var t1_1, t1_2, t1_3, t2_1, t2_2, t2_3, t3_1, t3_2, t4_1, t4_2, t5_1, t5_2;

// variables for words
var w1, w2, w3, w4, w5;

function preload() {
  thread = loadImage("0-thread.png");
  drawing = loadImage("1-draw.png");
  art = loadImage("2-art.png");
  colors = loadImage("3-colors.png");
  flowers = loadImage("4-flowers.png");
}

function setup() {
  createCanvas(1024, 660);
  textFont("Arial");
  textSize(50);
  textAlign(CENTER);

  w1 = "crisis";
  w2 = "drawing";
  w3 = "experiences";
  w4 = "colors";
  w5 = "flower";

  t1_1 = "All begins with confusion without knowing where to go.";
  t1_2 = "In a point in our lives we need to define what to do.";
  t1_3 = "In fact I decided what to do.";
  t2_1 = "I decided to draw my adventures in the life.";
  t2_2 = "Walk without fears, walk and walk. When I am standing";
  t2_3 = "in front of a fear...fight against it.";
  t3_1 = "I want to be part of a good life experiences,";
  t3_2 = "be filled with enriching experiences.";
  t4_1 = "And that's what I've been doing... filling my life";
  t4_2 = "with colors, red, yellow, blue...";
  t5_1 = "How Keane said: everybody's changing.";
  t5_2 = "The world is in constant movement.";
}

function draw() {
  background(255);
  // thickness of lines
  strokeWeight(0.1);
  // loops for create a background with lines
  for (var i = 0; i < 600; i += 20) {
    line(20, i, i , 20);
  }

  for (var i = 0; i < 1000; i += 25) {
    line(i, 650, 1024 + i, 20);
  }

  // code for create a shape
  noStroke();
  fill(117, 236, 240, 60);
  quad(600, 20, 1004, 20, 20, 630, 20, 590);

  // variable for text size
  var SizeT = 16;

  // conditions for chage to state to state
  if (state == nextState) {
    if (state == 0){
      image(thread, 40, 40);
      fill(255);
      text(w1, 730, 80);
      fill(0);
      strokeWeight(0);
      textSize(SizeT);
      text(t1_1, 800, 400);
      text(t1_2, 800, 420);
      text(t1_3, 800, 440);
    } else if (state == 1) {
      image(drawing, 40, 40);
      fill(255);
      text(w2, 730, 80);
      fill(0);
      strokeWeight(0);
      textSize(SizeT);
      text(t2_1, 800, 400);
      text(t2_2, 800, 420);
      text(t2_3, 800, 440);
    } else if (state == 2) {
      image(art, 40, 40);
      fill(255);
      text(w3, 730, 80);
      fill(0);
      strokeWeight(0);
      textSize(SizeT);
      text(t3_1, 800, 400);
      text(t3_2, 800, 420);
    } else if (state == 3) {
      image(colors, 40, 40);
      fill(255);
      text(w4, 730, 80);
      fill(0);
      strokeWeight(0);
      textSize(SizeT);
      text(t4_1, 800, 400);
      text(t4_2, 800, 420);
    } else if (state == 4) {
      image(flowers, 40, 40);
      fill(255);
      text(w5, 730, 80);
      fill(0);
      strokeWeight(0);
      textSize(SizeT);
      text(t5_1, 800, 400);
      text(t5_2, 800, 420);
    }
  } else {
    counter++;
    if (counter == 30) {
      state = nextState;
      counter = 0;
    }

    // map() - Re-maps a number from one range to another.
    var a = map(counter, 0, 30, 0, 255);
    // function to apply transparency between images change
    tint(255, a);

    if (nextState == 0) {
      image(thread, 40, 40);
    } else if (nextState == 1) {
      image(drawing, 40, 40);
    } else if (nextState == 2) {
      image(art, 40, 40);
    } else if (nextState == 3) {
      image(colors, 40, 40);
    } else if (nextState == 4) {
      image(flowers, 40, 40);
    }

    tint(255, 255 - a);

    if (state == 0) {
      image(thread, 40, 40);
    } else if (state == 1) {
      image(drawing, 40, 40);
    } else if (state == 2) {
      image(art, 40, 40);
    } else if (state == 3) {
      image(colors, 40, 40);
    } else if (state == 4) {
      image(flowers, 40, 40);
    }
  }
}

function keyTyped() {
  // conditions... if letter a, b, c, d or f is pressed, active the corresponding nextState
  if (key == 'a' || key == 'A') {
    nextState = 0;
  } else if (key == 'b' || key == 'B') {
    nextState = 1;
  } else if (key == 'c' || key == 'C') {
    nextState = 2;
  } else if (key == 'd' || key == 'D') {
    nextState = 3;
  } else if (key == 'f' || key == 'F') {
    nextState = 4;
  }
}
