// Define the callback function expression
const sumCallback = (num1, num2) => {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
};

// Define the higherOrderFunction
function higherOrderFunction(callback) {
    // Call the callback function with two numbers as arguments
    const number1 = 5; // Replace with your desired first number
    const number2 = 2; // Replace with your desired second number
    callback(number1, number2);
}

// Call higherOrderFunction with the sumCallback
higherOrderFunction(sumCallback);
