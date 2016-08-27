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

// variable for background image
var kim;
// variable for function letter_look_4()
var k;
// variable for function letter_look_5()
var x = 5;
// variable for function letter_look_6()
var  k_1;
// variables for function letter_look_7()
x_1 = 80;
y_1 = 94;
x_2 = 107;
y_2 = 274;
x_3 = 80;
y_3 = 180;
x_4 = 130;
y_4 = 115;
x_5 = 80;
y_5 = 180;
x_6 = 135;
y_6 = 274;
// variable for function letter_look_10()
var k_2;
// variable for function letter_look_11()
var letterK_1;
// variable for function letter_look_12()
var letterK_2;

function preload() {
  // load an images
  kim = loadImage("images/kim.jpg");
  k = loadImage("images/k.png");
  k_1 = loadImage("images/k_1.png");
  k_2 = loadImage("images/k_2.png");
}

function setup() {
  // size of the canvas
  createCanvas(300, 400);
  // features for font function letter_look_11()
  textFont("Baloo Paaji");
  textAlign(CENTER);
  letterK_1 = "k";
  // features for font function letter_look_12()
  textFont("Pacifico");
  letterK_2 = "k!";
}

function draw() {
  // image background
  image(kim);
  // color to image background with alpha value (transparency)
  fill(240, 70, 218, 130);
  rect(0, 0, 300, 400);
  letter_look_12();
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
  // if repet is "something value" will be the half of "K shapes" (e.g. repet = 10 - will be 5 K)
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
  // letter "K" shape 3
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
  // letter "K" shape 4
  var x = random(-5, 5);
  var y = random(-5, 5)
  return (image(k, x, y));
}

function letter_look_5(x) {
  // letter "K" shape 5
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
  // letter "K" shape 6
  var offset = 0;
  var easing = 0.05;
  // Display at full opacity
  image(k_1, width / 2, height / 2);
  var dx = (mouseX-k_1.width/2) - offset;
  offset += dx * easing;
  // Display at half opacity
  tint(255, 127);
  image(k_1, offset, 0);
}

function letter_look_7() {
  // letter "K" shape 7
  // var to set back
  var back = 100;
  line(x_1, y_1, x_2, y_2);
  line(x_3, y_3, x_4, y_4);
  line(x_5, y_5, x_6, y_6);
    x_1++; // begin in 80px
    y_1++; // begin in 94px
    x_2++; // begin in 107px
    y_2++; // begin in 274px
    x_3++; // begin in 80px
    y_3++; // begin in 180px
    x_4++; // begin in 130px
    y_4++; // begin in 115px
    x_5++; // begin in 80px
    y_5++; // begin in 180px
    x_6++; // begin in 135px
    y_6++; // begin in 274px
    // condition to set back letter k shape
  if (y_2 == 400 && y_6 == 400) {
    x_1 -= back;
    y_1 -= back;
    x_2 -= back;
    y_2 -= back;
    x_3 -= back;
    y_3 -= back;
    x_4 -= back;
    y_4 -= back;
    x_5 -= back;
    y_5 -= back;
    x_6 -= back;
    y_6 -= back;
  }
}

function letter_look_8() {
  // letter "K" shape 8
  var counter1;
  var counter2;
  var counter3;
  fill(255);
  noStroke();
  // vertical triangles
  for (counter1 = 0; counter1 < 170; counter1 += 3) {
    triangle(89, 125 + counter1, 107, 144 + counter1, 126, 125 + counter1);
    // right top triangles
    for (counter2 = 62; counter2 > 0; counter2 -= 3) {
      triangle(169 - counter2, 122 + counter2, 166 - counter2, 148 + counter2, 192 - counter2, 150 + counter2);
      // right bottom triangles
      for (counter3 = 62; counter3 > 0; counter3 -= 3) {
        triangle(109 + counter3, 234 + counter3, 108 + counter3, 208 + counter3, 134 + counter3, 207 + counter3);
      }
    }
  }
}

function letter_look_9() {
  // letter "K" shape 8
  // I used translate() function instead of reset all coordinates
  fill(255, 150);
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
  // translate() function
  translate(-20, -20);
  endShape();

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
  // translate() function
  translate(20, 20);
  endShape();

  // lines
  line(107.33, 94.33, 87.33, 74.33);
  line(107.33, 274.59, 87.33, 254.59);
  line(129.33, 274.59, 109.33, 254.59);
  line(129.33, 229, 109.33, 209);
  line(141, 215.67, 121, 195.67);
  line(183, 274.59, 163, 254.59);
  line(210.67, 274.59, 190.67, 254.59);
  line(157.33, 202.33, 137.33, 182.33);
  line(203.67, 151.5, 183.67, 131.5);
  line(176.67, 151.5, 156.67, 131.5);
  line(129.67, 208.67, 109.67, 188.67);
  line(129.67, 94.33, 109.67, 74.33);
}

function letter_look_10(position_x, position_y, size_x, size_y, repet) {
  // loop, var repet count how many times run the loop
  for (var i = 0; i < repet; i++) {
    // it works with module operator
    // image on the top-center position
    if (i % repet == 1) {
      image(k_2, position_x + i , position_y, size_x, size_y);
    }
    // image on the left
    else if (i % repet == 3) {
      image(k_2, position_x - i - 70, position_y + i + 50, size_x, size_y);
    }
    // image on the right
    else if (i % repet == 5) {
      image(k_2, position_x + i + 70, position_y + i + 50, size_x, size_y);
    }
    // penultimate image
    else if (i % repet == 7) {
      image(k_2, position_x, position_y + i + 100, size_x, size_y);
    }
    // image on the bottom position
    else if (i % repet == 9) {
      image(k_2, position_x, position_y + i + 200, size_x, size_y);
    }
  }
}

function letter_look_11() {
  fill("#E23D23");
  textSize(300);
  text(letterK_1, width / 2, 300);
}

function letter_look_12() {
  fill("#ED225D");
  textSize(200);
  text(letterK_2, width / 2, 300);
}
