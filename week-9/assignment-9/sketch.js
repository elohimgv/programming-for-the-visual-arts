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
// vars for axis x, anxis
var axisXword = "days";
var axisYword = "tweets";
var monthYear = "July 2016"
// array for days
var days = ["22", "23", "24", "25", "26", "27", "28", "29", "30"];
// array for thousands of tweets
var tweets = ["100", "200", "300", "400"];

// to load climatechange.csv file
function preload() {
  climateChange = loadTable("climatechange.csv", "csv", "header");
}

function setup() {
  // size of canvas
  createCanvas(windowWidth, 680);
  // font for write days and tweets
  //textFont("Noto Sans");
  //axisXword = "days";
  //axisYword = "tweets";
}

function draw() {
  // background color
  background(0);
  // time line and number of tweets
  // color lines
  stroke(255);
  // color font
  fill(255);
  // axis x = days
  line(70, 540, 1270, 540);
  // write word days
  textFont("Noto Sans");
  textSize(20);
  text(axisXword, 635, 620);
  // axis y = number of tweets
  line(70, 40, 70, 540);
  // write (number) word tweets
  text(axisYword, 5, 55);
  // font for write numbers
  textSize(15);
  textFont("Questrial");
  text(monthYear, 625, 600)
  // days 22 - 30 July 2016
  for (var divisionAxisX = 1170; divisionAxisX > 0; divisionAxisX -= 130) {
    line(70 + divisionAxisX, 540, 70 + divisionAxisX, 550);
    for (var numberDay = 0, positionX = 0; numberDay < 9 && positionX < 1170; numberDay++, positionX += 130) {
      text(days[0 + numberDay], 130 + positionX, 555);
    }
  }
  // thousands of tweets
  for (var divisionAxisY = 400; divisionAxisY > 0; divisionAxisY -= 100) {
    line(70, 540 - divisionAxisY, 60, 540 - divisionAxisY);
    for (var tweetsThousands = 0, positionY = 400; tweetsThousands < 4 && positionY > 0; tweetsThousands++, positionY -= 100) {
      text(tweets[3 - tweetsThousands], 30, 540 - positionY);
    }
  }
}
