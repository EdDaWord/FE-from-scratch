// Example from MDN

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Prototype methods
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }

  // Static methods
  // Are called without instantiating 
  // their class and cannot be called through a class instance.
  // Static methods are often used to create utility 
  // functions for an application.

  // Rectangel.isBigger(new Rectangle(1,1), new Rectangle(1,2));
  static isBigger(rectangleA, rectangleB) {
    return rectangleA.area >= rectangleB.area;
  }
}

const square = new Rectangle(10, 10); // not hosited

console.log(square.area); // 100