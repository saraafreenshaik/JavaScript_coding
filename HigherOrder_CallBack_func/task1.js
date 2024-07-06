function higherOrderFunction(callback) {
    // Performing some operations
    console.log("Executing the higher order function...");
    // Calling the callback function
    callback();
}

// Callback function to be passed to the higher order function
function callbackFunction() {
    console.log("Executing the callback function...");
}

// Calling the higher order function with the callback function as an argument
higherOrderFunction(callbackFunction);
