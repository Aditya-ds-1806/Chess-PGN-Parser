exports.pgn2json = function (fileName) {
    const fs = require('fs');
    const pgn = fs.readFileSync(fileName).toString().split('\n');
    var game = {
        str: {},
        moves: []
    }
    var moves;

    pgn.forEach((_, i, pgn) => pgn[i] = pgn[i].replace('\r', ''));

    for (let i = 0; i < pgn.length; i++) {
        var line = pgn[i];
        if (line[0] === '[') {
            let tag = line.substring(1, line.indexOf(' '));
            let value = line.substring(line.indexOf(' ') + 2, line.length - 2);
            game.str[tag] = value;
        } else if (line[0] !== '[' && line.trim() !== '') {
            moves = pgn.slice(pgn.indexOf(line)).join(' ').split(' ');
            moves.pop();
            break;
        }
    }

    for (let i = 0; i < moves.length; i = i + 3) {
        let move = [moves[i + 1], moves[i + 2]];
        if (typeof moves[i + 2] === 'undefined') move.pop();
        game.moves.push(move);
    }

    return JSON.stringify(game);
}
