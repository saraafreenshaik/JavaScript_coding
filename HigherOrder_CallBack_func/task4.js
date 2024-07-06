// Define the callback function expression
const squareCallback = (number) => {
    const square = number * number;
    console.log(`The square of ${number} is: ${square}`);
};

// Define the higherOrderFunction
function higherOrderFunction(num, callback) {
    // Call the callback function and pass 'num' as an argument
    callback(num);
}

// Call higherOrderFunction with a number and the squareCallback
const myNumber = 7; // Replace with your desired number
higherOrderFunction(myNumber, squareCallback);
