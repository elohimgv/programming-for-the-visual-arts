/**
*
* Author: Elohim Guevara
*
* Assignment 5: Synthesis A, Nonlinear Narrative
*
*/

// Vars for change to state to state
let state = 0;
let nextState = 0;
// Vars to delay change image to another 
let counter = 0;

// Arrays images
let thread,drawing,art,colors,flowers;

// Array for texts
let txt = [12];

// Array for words
let word = [5];

function preload() {
  thread = loadImage('0-thread.png');
  drawing = loadImage('1-draw.png');
  art = loadImage('2-art.png');
  colors = loadImage('3-colors.png')
  flowers = loadImage('4-flowers.png')
}

function setup() {
  createCanvas(1024, 660);

  // Init array word
  word[0] = "Crisis";
  word[1] = "Drawing";
  word[2] = "Experiences";
  word[3] = "Colors";
  word[4] = "Flower";

  // Init array txt
  txt[0] = "All begins with confusion without knowing where to go.";
  txt[1] = "In a point in our lives we need to define what to do.";
  txt[2] = "In fact I decided what to do.";
  txt[3] = "I decided to draw my adventures in the life.";
  txt[4] = "Walk without fears, walk and walk. When I am standing";
  txt[5] = "in front of a fear...fight against it.";
  txt[6] = "I want to be part of a good life experiences,";
  txt[7] = "be filled with enriching experiences.";
  txt[8] = "And that's what I've been doing... filling my life";
  txt[9] = "with colors, red, yellow, blue...";
  txt[10] = "How Keane said: everybody's changing.";
  txt[11] = "The world is in constant movement.";
}

function draw() {
  background(255);
  
  // Create a shape
  noStroke();
  fill(117, 236, 240, 60);
  quad(width*.58, height*.03, width*.98, height*.03, 
       width*.02, height*.95, width*.02, height*.57);

  // Chage state to state
  if (state == nextState) {
    if (state == 0){
      render(thread, word[0], txt[0], txt[1], txt[2], 2, 7);
    } else if (state == 1) {
      render(drawing, word[1], txt[3], txt[4], txt[5], 2, 7);
    } else if (state == 2) {
      render(art, word[2], txt[6], txt[7], null, 2, 7);
    } else if (state == 3) {
      render(colors, word[3], txt[8], txt[9], null, 2, 7);
    } else if (state == 4) {
      render(flowers, word[4], txt[10], txt[11], null, 2, 7);
    }
  } else {
    counter++;
    if (counter == 40) {
      state = nextState;
      counter = 0;
    }

    // Re-maps a number from one range to another.
    let a = map(counter, 0, 40, 0, 255);
    // Apply transparency between images change
    tint(255, a);
    if (nextState == 0) {
      image(thread, widthPercent('i',2), widthPercent('i',7));
    } else if (nextState == 1) {
      image(drawing, widthPercent('i',2), widthPercent('i',7));
    } else if (nextState == 2) {
      image(art, widthPercent('i',2), widthPercent('i',7));
    } else if (nextState == 3) {
      image(colors, widthPercent('i',2), widthPercent('i',7));
    } else if (nextState == 4) {
      image(flowers, widthPercent('i',2), widthPercent('i',7));
    }

    tint(255, 255 - a);
    if (state == 0) {
      image(thread, widthPercent('i',2), widthPercent('i',7));
    } else if (state == 1) {
      image(drawing, widthPercent('i',2), widthPercent('i',7));
    } else if (state == 2) {
      image(art, widthPercent('i',2), widthPercent('i',7));
    } else if (state == 3) {
      image(colors, widthPercent('i',2), widthPercent('i',7));
    } else if (state == 4) {
      image(flowers, widthPercent('i',2), widthPercent('i',7));
    }
  }
}

function keyTyped() {
  // if letter a, b, c, d or f is pressed, 
  // active the corresponding nextState
  if (key == 'a' || key == 'A') {
    nextState = 0;
  } else if (key == 'b' || key == 'B') {
    nextState = 1;
  } else if (key == 'c' || key == 'C') {
    nextState = 2;
  } else if (key == 'd' || key == 'D') {
    nextState = 3;
  } else if (key == 'f' || key == 'F') {
    nextState = 4;
  }
}

// Render on sketch
function render(img, word, txt1, txt2, txt3, widthGrid, heightGrid) {
  image(img, widthPercent('i',widthGrid), widthPercent('i',heightGrid));
  textAlign(CENTER);
  // Set font for title
  fill(255, 0, 0);
  textFont('Georgia', 50);
  text(word, widthPercent('t',2), heightPercent('t',9));
  
  fill(0);
  // Set font for paragraph
  textFont('Verdana', 25);
  if (txt3 == null) {
    text(txt1, widthPercent('t',2), heightPercent('t',1.26));
    text(txt2, widthPercent('t',2), heightPercent('t',1.18));
  } else {
    text(txt1, widthPercent('t',2), heightPercent('t',1.26));
    text(txt2, widthPercent('t',2), heightPercent('t',1.18));
    text(txt3, widthPercent('t',2), heightPercent('t',1.1)); 
  } 
}

function widthPercent(str, grid) {
  let percentage = 0;
  let position = 0;
  // What is the percentage of the size width of 
  // image or text with respect to size width canvas
  if (str == 'i') { // i = image
    percentage = (thread.width*100)/width; 
  } 
  if (str == 't') { // t = text
    percentage = (textWidth(str)*100)/width; 
  }

  // 100 - the image percentage
  percentage = 100 - percentage;
  // The result divide by grid 
  percentage = percentage / grid;
  // Divide by 100 to has the decimal values
  percentage = percentage / 100;
  // The position to center the
  // image or text respect to canvas
  position = percentage * width;
  
  return position;
}

function heightPercent(str, grid) {
  let percentage = 0;
  let position = 0;
  // What is the percentage of the size height of 
  // image or text with respect to size height canvas
  if (str == 'i') { // i = image
    percentage = (thread.height*100)/height; 
  } 
  if (str == 't') { // t = text
    percentage = (textWidth(str)*100)/height; 
  }
  
  // 100 - the image percentage
  percentage = 100 - percentage;
  // The result divide by grid 
  percentage = percentage/grid;
  // Divide by 100 to has the decimal values
  percentage = percentage/100;
  // The position to center the
  // image or text respect to canvas
  position = percentage*height;
  
  return position;
}
