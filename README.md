# Json Injection Demo

## Description
Quick demo of how JSON injection might work as a node project.

There's one core package used: `fs`, which is just for filesystem interaction.

There are two external packages used:
- `dummy-json` is used to mock up data to process, and dummyjson.hbs is the tempate file used to define the data structure.
- `html-minifier` would actually potentially be used in this project. It's an example of using a well written third party module to handle an important stage in the process.

## Instruction
1. Run `npm install` to install dependencies.
2. Run `node index.js` to execute the program.