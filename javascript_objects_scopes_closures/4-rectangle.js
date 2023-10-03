#!/usr/bin/node
class Rectangle {
    //   width;
    //   height;
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
    print() {
      if (this.width > 0 && this.height > 0) {
        for (let i = 0; i < this.height; i++) {
          for (let j = 0; j < this.width; j++) {
            process.stdout.write('X');
          }
          console.log();
        }
      }
    }
  
    rotate() {
      let temp = this.height;
      this.height = this.width;
      this.width = temp;
    }
    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;