import {
    getCommentary,
    getNags,
    getStrAndStringifyMoves,
    removeEscapeMechanism,
    extractMultipleGames
} from "./helpers";

export function pgn2json(pgnText) {
    var pgns = extractMultipleGames(pgnText);

    let games = [];
    pgns.forEach(function(pgn) {
        var game = {
            str: {},
            moves: [],
            annotations: [],
            nag: []
        }
        var moves, moveClone, movPos = [];

        pgn.forEach((_, i, pgn) => pgn[i] = pgn[i].trim().replace('\r', ''));
        pgn = removeEscapeMechanism(pgn);
        [game.str, moves] = getStrAndStringifyMoves(pgn);
        moveClone = moves.join('').split(' ');
        for (let i = 1; moveClone.includes(`${i}.`); i++) {
            movPos.push(moveClone.indexOf(`${i}.`));
        }

        game.nag = getNags(moveClone, movPos);
        game.annotations = getCommentary(moves, moveClone, movPos);

        moves = moves.join('').split(' ');
        moves = moves.filter(val => !val.includes('.') && !val.includes('$'));
        moves.pop();
        game.moves = moves;

        games.push(game);
    })

    return JSON.stringify(games, null, 4);
}
