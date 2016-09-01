/**
*
* Author: Elohim Guevara Varela
*
* Assignment 8: Terrarium
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Platform: https://www.kadenze.com/
*
*/

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(239, 116, 48);
  // big circle
  ellipse(width / 2, height / 2, 200, 200);
  for (var i = 0; i < 12; i++) {
    /** legs */
    // left leg
    ellipse(353 - i + 2, 347 + i * 11, 63 - i * 2, 63 - i * 2);
    // right leg
    for (var j = 0; j < 12; j++) {
      ellipse(446 + j + 2, 347 + j * 11, 63 - j * 2, 63 - j * 2);
      /** arms */
      // left arm
      for (var k = 0; k < 12; k++) {
        ellipse(305 - k * 9, 216, 45 - k, 45 - k);
        // right arm
        for (var l = 0; l < 12; l++) {
          ellipse(494 + k * 9, 216, 45 - k, 45 - k);
        }
      }
    }
  }
  /** head */
  ellipse(400, 137, 90, 90);
  /** eyes */
  // left eye
  line(373, 123, 384, 141);
  // right eye
  line(426, 123, 415, 144);
  /** mouth */
  line(384, 156, 388, 163);
  line(388, 163, 395, 156);
  line(395, 156, 400, 163);
  line(400, 163, 405, 156);
  line(405, 156, 409, 163);
  line(409, 163, 415, 156);
}
