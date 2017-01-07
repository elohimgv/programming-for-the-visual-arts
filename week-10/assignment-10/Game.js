// Game class
function Game() {
  /** instance variables */
  /** vars for obstacles method */
  // up
  this.x_up = random(width - 900, width - 100); // 100
  this.y_up = 0;
  this.sizeWidthUp = 50;
  // PAY ATENTION... this.sizeHeightUp = 200;
  this.sizeHeightUp = 50; // 50
  // down
  this.x_down = 100;
  // PAY ATENTION... this.y_down = 300;
  this.y_down = 450; // 450
  this.sizeWidthDown = 50;
  this.sizeHeightDown = 200;
  // var to change motion size (y)
  this.changeSizeUp = 1;
  this.changeSizeDown = 1;
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
    if ((this.sizeHeightUp > 199) || (this.sizeHeightUp < 51)) {
      this.changeSizeUp = this.changeSizeUp * - 1;
    }
    this.y_down = this.y_down + this.changeSizeDown;
    if ((this.y_down > 451) || (this.y_down < 299)) {
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
    if ((this.sizeHeightUp > 199) || (this.sizeHeightUp < 51)) {
      this.changeSizeUp = this.changeSizeUp * - 1;
    }
    this.y_down = this.y_down + this.changeSizeDown;
    if ((this.y_down > 451) || (this.y_down < 299)) {
      this.changeSizeDown = this.changeSizeDown * - 1;
    }

    var left = (this.x + this.size / 2 > this.x_up);
    var right = (this.x - this.size / 2 < this.x_up + this.sizeWidthUp);
    var top = (this.y + this.size / 2 > this.y_up);
    var bottom = (this.y - this.size / 2 < this.y_up + this.sizeHeightUp);

    // if statements this.hit_obstacle to control boolean state
    if (left && right && top && bottom) {
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
    if (this.x === 25) {
      this.x = 25;
    } else {
      this.x -= 5;
    }
  };

  this.moveRight = function() {
    if (this.x === 975) {
      this.x = 975;
    } else {
      this.x += 5;
    }
  };

  this.moveUp = function() {
    if (this.y === 25) {
      this.y = 25;
    } else {
      this.y -= 5;
    }
  };

  this.moveDown = function() {
    if (this.y === 475) {
      this.y = 475;
    } else {
      this.y += 5;
    }
  };

  this.board = function() {
    lives--;
  };
}
