/// Define the callback function
function callbackFunction(number) {
    console.log("The number is:", number);
}

// Define the higherOrderFunction
function higherOrderFunction(num, callback) {
    // Call the callback function and pass 'num' as an argument
    callback(num);
}

// Call higherOrderFunction with a number and the callback function
const myNumber = 42; // Replace with your desired number
higherOrderFunction(myNumber, callbackFunction);
