// returns pgn line-by-line array after filtering out comments (%)
export function removeEscapeMechanism(pgn) {
    return pgn.filter(line => line.trim()[0] !== '%');
}

// returns an array containing an STR object and a string containing the movetext
export function getStrAndStringifyMoves(pgn) {
    var str = {};
    for (let i = 0; i < pgn.length; i++) {
        var line = pgn[i];
        if (line[0] === '[') {
            let tag = line.substring(1, line.indexOf(' '));
            let value = line.substring(line.indexOf(' ') + 2, line.length - 2);
            str[tag] = value;
        } else if (line[0] !== '[' && line.trim() !== '') {
            let moves = pgn.slice(pgn.indexOf(line)).join(' ').trim().split('');
            return [str, moves];
        }
    }
}

// returns an object that contains the NAG and corresponding move
export function getNags(moves, movPos) {
    var temp = [];
    return moves.filter(move => move.includes('$')).map(move => {
        var prev = 0;
        if (temp.length) {
            prev = temp[temp.length - 1];
        }
        var count = movPos.filter(i => i < moves.indexOf(move, prev));
        temp.push(count[count.length - 1]);
        return {
            moveCount: count.length,
            value: move
        }
    });
}

// returns an array of objects containing the annotation and corresponding move position
export function getCommentary(moves, moveClone, movPos) {
    var comments = [];
    while (moves.indexOf('{') !== -1) {
        var commentStartPos = moves.indexOf('{');
        var commentEndPos = moves.indexOf('}');
        var comment = moves.splice(commentStartPos, commentEndPos - commentStartPos + 2).join('');
        var commentIndex = moveClone.indexOf(comment.split(' ')[0]);
        comments.push({
            moveCount: movPos.filter(ind => ind < commentIndex).length,
            comment: comment.substring(1, comment.length - 2)
        });
    }
    return comments;
}

// splits array of pgn lines into array of array of pgn lines where each array contains new game
export function extractMultipleGames(pgnText) {
    let pgn = pgnText.split('\n');
    let pgns = [];
    const init = 0, insideTags = 1, afterTags = 2

    let state = init;
    let currentPgn = [];
    pgn.forEach(function(line) {
        if (state === init && line.startsWith("[")) {
            state = insideTags;
            currentPgn.push(line)
        } else if (state === insideTags) {
            if (!line.startsWith("[")) state = afterTags;
            currentPgn.push(line)
        } else { //afterTags
            if (line.startsWith("[")) {
                pgns.push(currentPgn);
                currentPgn = [line];
                state = insideTags;
            } else currentPgn.push(line)
        }
    })

    // push the last game
    pgns.push(currentPgn);

    return pgns;
}
