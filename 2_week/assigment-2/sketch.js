/**
*
* Author: Elohim Guevara Varela
*
* Assignment 2: Patterns with Loops - Focus on parameters
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Platform: https://www.kadenze.com/
*
* Song: This one Life by Keith Merrill
*
*/

var vertical;
var diagonal;
var arcSize;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // change the values to obtain other results
  for (vertical = 0; vertical < width; vertical += 10) {
    for (diagonal = 0; diagonal < 1600; diagonal += 20) {
      for (var rectSize = 600; rectSize > 0; rectSize -= 20) {
        stroke(160);
        line(vertical, 0, vertical, 600);
        stroke(245);
        line(0, diagonal, diagonal, 0);
        noFill();
        rect(0, 0, rectSize, rectSize);
      }
    }
  }
  // change the values to obtain other results
  for (arcSize = 0; arcSize < 1200; arcSize += 30) {
    var color = 235;
    stroke(color);
    noFill();
    arc(400, 300, 10 + arcSize, 10 + arcSize, 0 + arcSize, HALF_PI + arcSize);
  }
}
