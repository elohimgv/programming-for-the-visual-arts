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

// declare object
var monster;
/** objects in javascript sintaxis */
// object to create a motion line with a size of width
var linear = {
  "x1": "0",
  "y1": "0",
  "x2": "800",
  "y2": "0"
}
// object to create a motion diagonal ine
var diagonal = {
  "x1": "700",
  "y1": "400",
  "x2": "700",
  "y2": "400",
  popUp: function() {
    var track = 0;
    while (track < 50) {
      line(random(this.x1), random(this.y1), random(this.x2), random(this.y2));
      track++;
    }
  }
}

function setup() {
  // size of canvas 
  createCanvas(800, 500);
  // create object
  monster = new Creature();
}

function draw() {
  background(239, 116, 48);
  diagonal.popUp();
  if (keyIsPressed == true) {
    monster.explotion();
  } else {
    monster.render();
  }
  // create animation
  linear.y1++;
  linear.y2++;
  line(linear.x1, linear.y1, linear.x2, linear.y2);
  if (linear.y1 > 500 && linear.y2 > 500) {
    // update
    linear.y1 = 0;
    linear.y2 = 0;
  }
}

// Creature class
function Creature() {
  /** fields render method */
  // field loop
  this.counter = 12;
  // fields for big circle
  this.x_1 = width / 2; //width / 2
  this.y_1 = height / 2; //height / 2
  this.diameterBig = 200;
  // fields for left leg
  this.x_2;
  this.y_2 = 347;
  this.diameterLeftLeg = 63;
  // fields for right leg
  this.x_3;
  this.y_3 = 347;
  this.diameterRightLeg = 63;
  // fields for left arm
  this.x_4 = 305;
  this.y_4;
  this.diameterLeftArm = 45;
  // fields for right arm
  this.x_5 = 494;
  this.y_5;
  this.diameterRightArm = 45;
  // fields for head
  this.x_6 = 400;
  this.y_6 = 137;
  this.diameterHead = 90;
  // fields for left eye
  this.pointX_1 = 373;
  this.pointY_1 = 123;
  this.pointX_2 = 384;
  this.pointY_2 = 141;
  // fields for right eye
  this.pointX_3 = 426;
  this.pointY_3 = 123;
  this.pointX_4 = 415;
  this.pointY_4 = 144;
  // fields for mouth
  this.pointX_5 = 384;
  this.pointY_5 = 156;
  this.pointX_6 = 388;
  this.pointY_6 = 163;
  this.pointX_7 = 395;
  this.pointY_7 = 156;
  this.pointX_8 = 400;
  this.pointY_8 = 163;
  this.pointX_9 = 405;
  this.pointY_9 = 156;
  this.pointX_10 = 409;
  this.pointY_10 = 163;
  this.pointX_11 = 415;
  this.pointY_11 = 156;
  /** fields to control (sine wave) move of legs and arms */
  this.angle = 0;
  // x move of the ellipses
  this.offset2 = 353;
  this.offset3 = 446;
  this.offset4 = 216;
  this.offset5 = 216;
  // amplitud of the wave
  this.scalar = 35;
  // speed of move
  this.speed = 0.1;

  // method render
  this.render = function() {
    // big circle
    ellipse(this.x_1, this.y_1, this.diameterBig, this.diameterBig);
    /** legs */
    // left leg
    for (var i = 0; i < this.counter; i++) {
      this.x_2 = this.offset2 + (sin(this.angle + i) * this.scalar);
      // draw ellipses
      ellipse(this.x_2 - i + 2, this.y_2 + i * 11, this.diameterLeftLeg - i * 2, this.diameterLeftLeg - i * 2);
      // right leg
      for (var j = 0; j < this.counter; j++) {
        this.x_3 = this.offset3 + (sin(this.angle + j) * this.scalar);
        // draw ellipses
        ellipse(this.x_3 + j + 2, this.y_3 + j * 11, this.diameterRightLeg - j * 2, this.diameterRightLeg - j * 2);
        /** arms */
        // left arm
        for (var k = 0; k < this.counter; k++) {
          this.y_4 = this.offset4 + (sin(this.angle + k) * this.scalar);
          // draw ellipses
          ellipse(this.x_4 - k * 9, this.y_4, this.diameterLeftArm - k, this.diameterLeftArm - k);
          // right arm
          for (var l = 0; l < this.counter; l++) {
            this.y_5 = this.offset5 + (sin(this.angle + l) * this.scalar);
            // draw ellipses
            ellipse(this.x_5 + l * 9, this.y_5, this.diameterRightArm - l, this.diameterRightArm - l);
          }
        }
      }
    }
    this.angle += this.speed;
    /** head */
    ellipse(this.x_6, this.y_6, this.diameterHead, this.diameterHead);
    /** eyes */
    // left eye
    line(this.pointX_1, this.pointY_1, this.pointX_2, this.pointY_2);
    // right eye
    line(this.pointX_3, this.pointY_3, this.pointX_4, this.pointY_4);
    /** mouth */
    line(this.pointX_5, this.pointY_5, this.pointX_6, this.pointY_6);
    line(this.pointX_6, this.pointY_6, this.pointX_7, this.pointY_7);
    line(this.pointX_7, this.pointY_7, this.pointX_8, this.pointY_8);
    line(this.pointX_8, this.pointY_8, this.pointX_9, this.pointY_9);
    line(this.pointX_9, this.pointY_9, this.pointX_10, this.pointY_10);
    line(this.pointX_10, this.pointY_10, this.pointX_11, this.pointY_11);
  }
  // method explotion
  this.explotion = function() {
    /** legs */
    // left leg
    for (var i = 0; i < this.counter; i++) {
      // to a constant to return the same pseudo-random numbers
      randomSeed(2);
      // draw ellipses
      ellipse(random(this.offset2 - i + 2), random(this.y_2 + i * 11), this.diameterLeftLeg - i * 2, this.diameterLeftLeg - i * 2);
      // right leg
      for (var j = 0; j < this.counter; j++) {
        // to a constant to return the same pseudo-random numbers
        randomSeed(2);
        // draw ellipses
        ellipse(random(this.offset3 + j + 2), random(this.y_3 + j * 11), this.diameterRightLeg - j * 2, this.diameterRightLeg - j * 2);
        /** arms */
        // left arm
        for (var k = 0; k < this.counter; k++) {
          // draw ellipses
          ellipse(random(this.x_4 - k * 9), random(this.offset4), this.diameterLeftArm - k, this.diameterLeftArm - k);
          // right arm
          for (var l = 0; l < this.counter; l++) {
            // draw ellipses
            ellipse(random(this.x_5 + l * 9), random(this.offset5), this.diameterRightArm - l, this.diameterRightArm - l);
          }
        }
      }
    }
  }
}
