import { getCommentary, getNags, getStrAndStringifyMoves } from "./helpers";

export function pgn2json(pgnText) {
    const pgn = pgnText.split('\n');
    var game = {
        str: {},
        moves: [],
        annotations: [],
        nag: []
    }
    var moves, moveClone, movPos = [];
    [game.str, moves] = getStrAndStringifyMoves(pgn);

    movPos = [];
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
    return JSON.stringify(game, null, 4);
}