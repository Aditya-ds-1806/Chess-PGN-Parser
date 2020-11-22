/* @module Chess PGN Parser, @version 1.3.7, @copyright Aditya D.S. 2020, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.parser = {}));
}(this, (function (exports) { 'use strict';

    // returns pgn line-by-line array after filtering out comments (%)
    function removeEscapeMechanism(pgn) {
        return pgn.filter(line => line.trim()[0] !== '%');
    }

    // returns an array containing an STR object and a string containing the movetext
    function getStrAndStringifyMoves(pgn) {
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
    function getNags(moves, movPos) {
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
    function getCommentary(moves, moveClone, movPos) {
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

    function pgn2json(pgnText) {
        var pgn = pgnText.split('\n');
        var game = {
            str: {},
            moves: [],
            annotations: [],
            nag: []
        };
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
        return JSON.stringify(game, null, 4);
    }

    exports.pgn2json = pgn2json;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
