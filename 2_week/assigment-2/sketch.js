/**
*
* Author: Elohim Guevara
*
* Assignment 2: Patterns with Loops - Focus on parameters
*
*/

// Global vars
let w;
let h;
let c;

function setup () {
  // Canvas size
  createCanvas(displayWidth, 280); 
  c = color(234, 12, 12);
}

function draw() {
  // Background color - some red color
  background(c);
  // Yellow lines
  stroke(254, 255, 23);
  // Pattern
  for (h = 0; h < height; h+=20) { // Change h+=?
    // Backslash
    for (w = width; w > 0; w-=20) {
      line(w, h, w-20, h+20);
    }
    // Forward slash
    for (w = width; w > 0; w-=40) { // Change h-=?
      line(w, h, w+20, h+20);
    }
  }
}