export function pgn2json(pgnText) {
    const pgn = pgnText.split('\n');
    var game = {
        str: {},
        moves: [],
        annotations: [],
        nag: []
    }
    var moves;

    // extract STR details and get the second part of PGN
    pgn.forEach((_, i, pgn) => pgn[i] = pgn[i].trim().replace('\r', ''));
    for (let i = 0; i < pgn.length; i++) {
        var line = pgn[i];
        if (line[0] === '[') {
            let tag = line.substring(1, line.indexOf(' '));
            let value = line.substring(line.indexOf(' ') + 2, line.length - 2);
            game.str[tag] = value;
        } else if (line[0] !== '[' && line.trim() !== '') {
            moves = pgn.slice(pgn.indexOf(line)).join(' ').trim().split('');
            break;
        }
    }

    // get move positions
    var movPos = [];
    var moveClone = moves.join('').split(' ');

    for (let i = 1; moveClone.includes(`${i}.`); i++) {
        movPos.push(moveClone.indexOf(`${i}.`));
    }

    // extract NAGs and corresponding move
    var temp = [];
    moves = moves.join('').split(' ');
    moves.pop();
    game.nag = moves.filter(val => val.includes('$')).map(val => {
        var prev = 0;
        if (temp.length) {
            prev = temp.reverse()[0];
        }
        var count = movPos.filter(i => i < moves.indexOf(val, prev));
        temp.push(count.reverse()[0]);
        return {
            moveCount: count.length,
            value: val
        }
    });

    // extract commentary and corresponding move
    moves = moves.join(' ').split('');
    while (moves.indexOf('{') !== -1) {
        var commentStartPos = moves.indexOf('{');
        var commentEndPos = moves.indexOf('}');
        var comment = moves.splice(commentStartPos, commentEndPos - commentStartPos + 2).join('');
        var commentIndex = moveClone.indexOf(comment.split(' ')[0]);
        game.annotations.push({
            moveCount: movPos.filter(ind => ind < commentIndex).length,
            comment: comment.substring(1, comment.length - 2)
        });
    }

    moves = moves.join('').split(' ');
    moves = moves.filter(val => !val.includes('.') && !val.includes('$'));
    game.moves = moves;
    return JSON.stringify(game, null, 4);
}