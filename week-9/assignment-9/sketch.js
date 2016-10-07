/**
*
* Author: Elohim Guevara Varela
*
* Assignment 8: Data Visualization
*
* MOOC: Introduction to Programming For The Visual Arts with p5.js
*
* Note: the code dosen´t run on browser like Crhome, Chrome Canary,
* Microsoft Edge, just run on Mozilla Firefox.
*
* The information was collected frow my personal twitter account
* with app TAGS https://tags.hawksey.info/
* 66354 tweets from #climatechange
*
* Platform: https://www.kadenze.com/
*
*/

// var to file csv
var climateChange;

// to load climatechange.csv file
function preload() {
  climateChange = loadTable("climatechange.csv", "csv", "header");
}

function setup() {
  // size of canvas
  createCanvas(windowWidth, 600);
  // font for write on data Visualization
  textFont("Noto Sans");
}

function draw() {
  // background color
  background(0);
  // time line and number of tweets
  // color lines
  stroke(255);
  // color font
  fill(255);
  // size font
  textSize(15);
  // axis x = days
  line(70, 540, 1270, 540);
  // write days
  text("days", 1230, 565);
  // axis y = number of tweets
  line(70, 40, 70, 540);
  // write number of tweets
  text("tweets", 15, 55);
}
