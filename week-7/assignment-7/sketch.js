/**
*
* Author: Elohim Guevara Varela
*
* Assignment 7: Typography
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Note: the code dosen´t run on browser like Crhome, Chrome Canary
* just run on Mozilla Firefox and Microsoft Edge.
*
* Platform: https://www.kadenze.com/
*
*/

var kim;

function preload() {
  // load an image
  kim = loadImage("kim.jpg");
}

function setup() {
  // size of the canvas
  createCanvas(300, 400);
}

function draw() {
  image(kim);
  fill(240, 70, 218, 130);
  rect(0, 0, 300, 400);
  letter_look_1()
  /**
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33); // 1
  vertex(107.33, 274.59); // 2
  vertex(129.33, 274.59); // 3
  vertex(129.33, 229); // 4
  vertex(141, 215.67); // 5
  vertex(183, 274.59); // 6
  vertex(210.67, 274.59); // 7
  vertex(157.33, 202.33); // 8
  vertex(203.67, 151.5); // 9
  vertex(176.67, 151.5); // 10
  vertex(129.67, 208.67); // 11
  vertex(129.67, 94.33); // 12
  vertex(107.33, 94.33); // 13
  endShape();
  */
}

function letter_look_1() {
  // letter "K" shape
  var counter = 0;
  var space = 5;
  while (counter < 5) {
    counter++;
    fill(244 + (counter * space), 070 + (counter * space), 017 + (counter * space));
    noStroke();
    beginShape();
    vertex(107.33 + (counter * space), 94.33 + (counter * space));
    vertex(107.33 + (counter * space), 274.59 + (counter * space));
    vertex(129.33 + (counter * space), 274.59 + (counter * space));
    vertex(129.33 + (counter * space), 229 + (counter * space));
    vertex(141 + (counter * space), 215.67 + (counter * space));
    vertex(183 + (counter * space), 274.59 + (counter * space));
    vertex(210.67 + (counter * space), 274.59 + (counter * space));
    vertex(157.33 + (counter * space), 202.33 + (counter * space));
    vertex(203.67 + (counter * space), 151.5 + (counter * space));
    vertex(176.67 + (counter * space), 151.5 + (counter * space));
    vertex(129.67 + (counter * space), 208.67 + (counter * space));
    vertex(129.67 + (counter * space), 94.33 + (counter * space));
    vertex(107.33 + (counter * space), 94.33 + (counter * space));
    endShape();
  }
}

function letter_look_2() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_3() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_4() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_5() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_6() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_7() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_8() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_9() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_10() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_11() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}

function letter_look_12() {
  // letter "K" shape
  fill(244, 070, 017);
  noStroke();
  beginShape();
  vertex(107.33, 94.33);
  vertex(107.33, 274.59);
  vertex(129.33, 274.59);
  vertex(129.33, 229);
  vertex(141, 215.67);
  vertex(183, 274.59);
  vertex(210.67, 274.59);
  vertex(157.33, 202.33);
  vertex(203.67, 151.5);
  vertex(176.67, 151.5);
  vertex(129.67, 208.67);
  vertex(129.67, 94.33);
  vertex(107.33, 94.33);
  endShape();
}
