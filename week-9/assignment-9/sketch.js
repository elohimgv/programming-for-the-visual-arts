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
*
* Platform: https://www.kadenze.com/
*
*/

var climateChange;

function preload() {
  climateChange = loadTable("climatechange.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, 600);
}

function draw() {
  background(0);
}
