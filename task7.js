const readline = require('readline');

function greet(prefix) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("What's your name? ", (name) => {
        console.log(`${prefix} ${name}`);
        rl.close();
    });
}
const greetFunction = (prefix, name = "Guest") => {
    console.log(`${prefix} ${name}`);
};

greetFunction("Hello,");

greet("Hi,");