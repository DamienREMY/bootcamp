const fs = require('fs');

let pathfile = process.argv[2];
let nbLine = 0;

const buf = fs.readFileSync(pathfile);
const str = buf.toString();

nbLine = str.split('\n').length - 1;

console.log(nbLine)
