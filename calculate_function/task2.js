function calculateArea(width, height) {
    return width * height;
}

const rectangleWidth = 5;
const rectangleHeight = 10;
const rectangleArea = calculateArea(rectangleWidth, rectangleHeight);
console.log(`The area of a rectangle with width ${rectangleWidth} and height ${rectangleHeight} is ${rectangleArea}.`);
