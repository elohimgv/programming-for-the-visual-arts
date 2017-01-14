// Game class
function Game() {
  /** instance variables */
  /** vars for obstacles method */
  // up
  this.x_up = random(width - 900, width - 100); // 100
  this.y_up = 0;
  this.sizeWidthUp = 50;
  // PAY ATENTION... this.sizeHeightUp = 200;
  this.sizeHeightUp = 90; // 50
  // down
  this.x_down = random(width - 900, width - 100); // 100
  // PAY ATENTION... this.y_down = 300;
  this.y_down = 360; // 450
  this.sizeWidthDown = 50;
  this.sizeHeightDown = 320;
  // var to change motion size (y)
  this.changeSizeUp = 1;
  this.changeSizeDown = 1;
  // random vars to taste if into obstaclesMotion
  this.rUp = random(199, 350);
  this.rDown = random(299, 150);
  // alpha value for obstacles method
  this.alpha = 10;
  // var to change the alpha value
  this.changeAlpha = 1;
  /** vars for ball method */
  this.x = 40;
  this.y = height / 2;
  this.size = 50;
  this.green = 255;
  this.blue = 255;
  // var for detect collision
  this.hit_obstacle;

  /** instance methods */
  this.obstaclesMotion = function() {
    // add the current change of motion size (y)
    this.sizeHeightUp = this.sizeHeightUp + this.changeSizeUp;
    if ((this.sizeHeightUp > this.rUp) || (this.sizeHeightUp < 91)) { // >199 || <51
      this.changeSizeUp = this.changeSizeUp * - 1;
    }
    this.y_down = this.y_down + this.changeSizeDown;
    if ((this.y_down > 361) || (this.y_down < this.rDown)) { // >451 || <299
      this.changeSizeDown = this.changeSizeDown * - 1;
    }
    // add the current change of motion alpha value
    this.alpha = this.alpha + this.changeAlpha;
    if ((this.alpha > 49 ) || (this.alpha < 6)) {
      this.changeAlpha = this.changeAlpha * - 1;
    }
    this.color_obstacles = color(255, this.alpha);
    fill(this.color_obstacles);
  };

  this.obstacles = function() {
     // add motion to obstacles
    this.obstaclesMotion();
    // display rects "obstacles"
    noStroke();
    rect(this.x_up, this.y_up, this.sizeWidthUp, this.sizeHeightUp);
    rect(this.x_down, this.y_down, this.sizeWidthDown, this.sizeHeightDown);
  };

  this.hit = function() {
    // increment and decrement this.sizeHeightUp and this.y_down values
    // to be able to ball hit obstacles
    this.sizeHeightUp = this.sizeHeightUp + this.changeSizeUp;
    if ((this.sizeHeightUp > this.rUp) || (this.sizeHeightUp < 91)) {
      this.changeSizeUp = this.changeSizeUp * - 1;
    }
    this.y_down = this.y_down + this.changeSizeDown;
    if ((this.y_down > 361) || (this.y_down < this.rDown)) {
      this.changeSizeDown = this.changeSizeDown * - 1;
    }

    // UP rectangles
    var left_up = (this.x + this.size / 2 > this.x_up);
    var right_up = (this.x - this.size / 2 < this.x_up + this.sizeWidthUp);
    var top_up = (this.y + this.size / 2 > this.y_up);
    var bottom_up = (this.y - this.size / 2 < this.y_up + this.sizeHeightUp);
    // DOWN rectangles
    var left_down = (this.x + this.size / 2 > this.x_down);
    var right_down = (this.x - this.size / 2 < this.x_down + this.sizeWidthDown);
    var top_down = (this.y + this.size / 2 > this.y_down);
    var bottom_down = (this.y - this.size / 2 < this.y_down + this.sizeHeightDown);

    // if statements this.hit_obstacle to control boolean state
    if ((left_up && right_up && top_up && bottom_up) ||
      (left_down && right_down && top_down && bottom_down)) {
      this.hit_obstacle = true;
    } else {
      this.hit_obstacle = false;
    }
  };

  this.ball = function() {
    this.hit();
    this.color_ball = color(255, this.green, this.blue);
    // if statement this.hit_obstacle to control color
    if (this.hit_obstacle) {
      // circle RED color
      // call board() method
      this.board();
      // set back to the initial position
      this.x = 40;
      this.y = height / 2;
      this.size = 50;
      this.green = 0;
      this.blue = 0;
    } else {
      // circle WHITE color
      this.green += 5;
      this.blue += 5;
    }
    fill(this.color_ball);
    // to display circle
    ellipse(this.x, this.y, this.size, this.size);
  };

  this.moveLeft = function() {
    if (this.x == 25) {
      this.x = 25;
    } else {
      this.x -= 5;
    }
  };

  this.moveRight = function() {
    if (this.x == 975) {
      this.x = 975;
    } else {
      this.x += 5;
    }
  };

  this.moveUp = function() {
    if (this.y == 25) {
      this.y = 25;
    } else {
      this.y -= 5;
    }
  };

  this.moveDown = function() {
    if (this.y == 475) {
      this.y = 475;
    } else {
      this.y += 5;
    }
  };

  this.board = function() {
    lives--;
  };
}
