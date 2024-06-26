//Defines a class of "Shape" with a constructor of "color"
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `I am a ${this.color} shape.`;
    }
  }
  //Defines a class of Circle which is an extension of Shape
    class Circle extends Shape {
    constructor(color) {
      super(color);
    }
      render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
  }
  //Defines a class of Triangle which is an extension of Shape
    class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
  }
  //Defines a class of Square which is an extension of Shape
    class Square extends Shape {
    constructor(color) {
      super(color);
    }
      render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
    }
  };
  //Exports the shapes.fs to be utilized when running the program
  module.exports = {
    Shape,
    Circle,
    Triangle,
    Square,
  };
  