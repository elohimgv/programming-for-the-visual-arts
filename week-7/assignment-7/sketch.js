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
  kim = loadImage("kim.jpg");
}

function setup() {
  createCanvas(300, 400);
}

function draw() {
  image(kim);
  fill(240, 70, 218, 130);
  rect(0, 0, 300, 400);
}
