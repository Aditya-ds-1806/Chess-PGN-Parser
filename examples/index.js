const parser = require('chess-pgn-parser');
const fs = require('fs');

var pgn = fs.readFileSync('sample-1.pgn').toString();
var json = parser.pgn2json(pgn);
var obj = JSON.parse(json);

console.log(json);
console.log(obj);