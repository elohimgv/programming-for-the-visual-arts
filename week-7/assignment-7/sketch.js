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

var kim, k, k_1;
var x = 5;

function preload() {
  // load an images
  kim = loadImage("kim.jpg");
  k = loadImage("k.png");
  k_1 = loadImage("k_1.png");
}

function setup() {
  // size of the canvas
  createCanvas(300, 400);
}

function draw() {
  image(kim);
  fill(240, 70, 218, 130);
  rect(0, 0, 300, 400);
  letter_look_6();
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
  // letter "K" shape 1
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
  // letter "K" shape 2
  // if repet is "X" value will be the half of K (e.g. repet = 10 - will be 5 K)
  var repet = 10;
  var n = 2;
  var plus = 10;
  for (var i = 0; i < repet; i++) {
    // down K
    for (var downK  = repet - 1; downK > 0; downK--) {
      fill(230 + downK * 6);
      beginShape();
      vertex((107.33 / n) + (downK + plus), (94.33 / n) + (downK + plus));
      vertex((107.33 / n) + downK, (274.59 / n) + downK);
      vertex((129.33 / n) + (downK + plus), (274.59 / n) + (downK + plus));
      vertex((129.33 / n) + downK, (229 / n) + downK);
      vertex((141 / n) + (downK + plus), (215.67 / n) + (downK + plus));
      vertex((183 / n) + downK, (274.59 / n) + downK);
      vertex((210.67 / n) + (downK + plus), (274.59 / n) + (downK + plus));
      vertex((157.33 / n) + downK, (202.33 / n) + downK);
      vertex((203.67 / n) + (downK + plus), (151.5 / n) + (downK + plus));
      vertex((176.67 / n) + downK, (151.5 / n) + downK);
      vertex((129.67 / n) + (downK + plus), (208.67 / n) + (downK + plus));
      vertex((129.67 / n) + downK, (94.33 / n) + downK);
      vertex((107.33 / n) + (downK + plus), (94.33 / n) + (downK + plus));
      endShape();
    }
    // above K
    for (var aboveK = 0; aboveK <= i + 1; aboveK++) {
      fill(244, 070, 017);
      beginShape();
      vertex((107.33 / n) - (aboveK + plus), (94.33 / n) - (aboveK + plus));
      vertex((107.33 / n) - aboveK, (274.59 / n) - aboveK);
      vertex((129.33 / n) - (aboveK + plus), (274.59 / n) - (aboveK + plus));
      vertex((129.33 / n) - aboveK, (229 / n) - aboveK);
      vertex((141 / n) - (aboveK + plus), (215.67 / n) - (aboveK + plus));
      vertex((183 / n) - aboveK, (274.59 / n) - aboveK);
      vertex((210.67 / n) - (aboveK + plus), (274.59 / n) - (aboveK + plus));
      vertex((157.33 / n) - aboveK, (202.33 / n)- aboveK);
      vertex((203.67 / n) - (aboveK + plus), (151.5 / n) - (aboveK + plus));
      vertex((176.67 / n) - aboveK, (151.5 / n) - aboveK);
      vertex((129.67 / n) - (aboveK + plus), (208.67 / n) - (aboveK + plus));
      vertex((129.67 / n) - aboveK, (94.33 / n) - aboveK);
      vertex((107.33 / n) - (aboveK + plus), (94.33 / n) - (aboveK + plus));
      endShape();
    }
  }
}

function letter_look_3() {
  // letter "K" shape
  strokeWeight(5);
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

  // ellipses
  fill(255);
  ellipse(107.33, 94.33, 15, 15);
  ellipse(107.33, 274.59, 15, 15);
  ellipse(129.33, 274.59, 15, 15);
  ellipse(129.33, 229, 15, 15);
  ellipse(141, 215.67, 15, 15);
  ellipse(183, 274.59, 15, 15);
  ellipse(210.67, 274.59, 15, 15);
  ellipse(157.33, 202.33, 15, 15);
  ellipse(203.67, 151.5, 15, 15);
  ellipse(176.67, 151.5, 15, 15);
  ellipse(129.67, 208.67, 15, 15);
  ellipse(129.67, 94.33, 15, 15);
}

function letter_look_4() {
  // letter "K" shape
  var x = random(-5, 5);
  var y = random(-5, 5)
  return (image(k, x, y));
}

function letter_look_5(x) {
  // letter "K" shape
  if (x > 1) {
    // create a random numbers between 0 and 1
    var r = random(0, 1.0);
    strokeWeight(5);
    // 95% chance this will happen
    if (r > 0.05) {
      line(107, 94, 107, 274);
      line(107, 180, 160, 115);
      line(107, 180, 165, 274);
    }
    // 5% chance this will happen
  } else {
      line(80, 94, 107, 274);
      line(80, 180, 130, 115);
      line(80, 180, 135, 274);
  }
}

function letter_look_6() {
  var offset = 0;
  var easing = 0.05;
  // Display at full opacity
  image(k_1, 0, 0);
  var dx = (mouseX-k_1.width/2) - offset;
  offset += dx * easing;
  // Display at half opacity
  tint(255, 127);
  image(k_1, offset, 0);

}

function letter_look_7() {

}

function letter_look_8() {

}

function letter_look_9() {

}

function letter_look_10() {

}

function letter_look_11() {

}

function letter_look_12() {

}
