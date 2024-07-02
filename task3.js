// function greet(prefix) {
//     const name = prompt("What's your name?");
//     console.log(`${prefix} ${name}`);
// }

// greet("Hi,");
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

greet("Hi,");
