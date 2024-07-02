// Call the greet function you defined in the previous task with your name as the argument and log the result to the console.

greet("John Doe");

// Call the greet function with an empty string as the argument and log the result to the console.

greet("");

// Call the greet function with a non-string argument (a number) as the argument and log the result to the console.

greet(123);

// Call the greet function with a non-string argument (a boolean) as the argument and log the result to the console.

greet(true);

// Call the greet function with a non-string argument (an object) as the argument and log the result to the console.

greet({ name: "John Doe" });

// Call the greet function with a non-string argument (a function) as the argument and log the result to the console.

greet(() => console.log("Hello, World!"));

// Call the greet function with a non-string argument (null) as the argument and log the result to the console.

greet(null);

// Call the greet function with a non-string argument (undefined) as the argument and log the result to the console.

greet(undefined);

// Call the greet function with a non-string argument (an array) as the argument and log the result to the console.

greet([1, 2, 3]);

// Call the greet function with a non-string argument (a symbol) as the argument and log the result to the console.

greet(Symbol("My Symbol"));

// Call the greet function with a non-string argument (a Map) as the argument and log the result to the console.

greet(new Map([[1, "One"], [2, "Two"]]));

// Call the greet function with a non-string argument (a Set) as the argument and log the result to the console.

greet(new Set([1, 2, 3]));

// Call the greet function with a non-string argument (a Date) as the argument and log the result to the console.

greet(new Date());

// Call the greet function with a non-string argument (a RegExp) as the argument and log the result to the console.

greet(/Hello, World!/);

// Call the greet function with a non-string argument (an Error) as the argument and log the result to the console.

greet(new Error("An error occurred"));

// Call the greet function with a non-string argument (a Promise) as the argument and log the result to the console.

greet(new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello, World!"), 1000);
}));

// Call the greet function with a non-string argument (a generator function) as the argument and log the result to the console.

greet(function* () {
  yield "Hello, World!";
})();

// Call the greet function with a non-string argument (a class) as the argument and log the result to the console.

greet(class Greeter {
  greet() {
    return "Hello, World!";
  }
});

// Call the greet function with a non-string argument (an async function) as the argument and log the result to the console.

greet(async () => "Hello, World!");

// Call the greet function with a non-string argument (a Proxy) as the argument and log the result to the console.

greet(new Proxy({}, {
  get() {
    return "Hello, World!";
  }
    
 }));
