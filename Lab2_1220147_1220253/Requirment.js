/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class Point {
  //this constructor is used to construct the pt class
  constructor(coordX, coordY) {
    this.coordX = coordX;
    this.coordY = coordY;
  }

}

class Rectangle {
  constructor(startingPoint, width, height) {
    this.setwidth(width);
    this.setHeight(height)
    this.startingPoint = startingPoint;

  }

  // ***************
  // Setter and Getters
  // ***************
  SetWidth(width){
    if(width && width < 0)
      throw Error("invalid Width");

    this.width = width;
  }
  setwidth(){
    return this.width
  }


  SetHeight(height){
    if(height && height < 0)
      throw Error("invalid Height");

    this.height = height;
  }
  setHeight(){
    return this.height
  }
  // ***************
  // Calculate methodes
  // ***************
  area() {
    return this.setHeight() * this.setwidth();
  }

  calculatePerimeter() {
    return 2 * this.setHeight() + 2 * this.setHeight();
  }

  getPerimeter() {
    return 2 * this.setHeight() + 2 * this.setwidth();
  }
  // ***************
  // Update Methods
  // ***************
  updateMyHeight(height) {
    this.SetHeight(height);
  }

  update({ startingPoint, width, height }) {
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  //function that print the endpoints
  endPoints() {
    const topRight = this.startingPoint.coordX + this.width;
    const bottomLeft = this.startingPoint.coordY + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }


}

  // ***************
  // Create Shapes objects
  // ***************

function constructRectangle(widht, height, coordX, coordY) {
  const mainPoint = new Point(coordX, coordY);
  const rectangle = new Rectangle(mainPoint, widht, height);
  return rectangle;
}

function constructSquare(coordX, coordY, squareLength) {
  let square;
  if (!squareLength || squareLength <= 0) {
    square = constructRectangle(squareLength, squareLength, coordX, coordY); //Square is a subset of a rectangle
  }
  const squareArea = square.area();
  const squarePerimeter = square.calculatePerimeter();
  console.log("square Area ", squareArea);
  console.log("square Perimeter ", squarePerimeter);
}

const myRect = constructRectangle(2, 3, 5, 4);
const square= constructSquare();

console.log(square.calculatePerimeter());
square.endPoints();

myRect.updateMyHeight(3);
