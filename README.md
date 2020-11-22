# Chess PGN Parser

![Node.js CI](https://github.com/Aditya-ds-1806/Chess-PGN-Parser/workflows/Node.js%20CI/badge.svg)
![GitHub package.json version](https://img.shields.io/npm/v/chess-pgn-parser?logo=npm)
![npm](https://img.shields.io/npm/dm/chess-pgn-parser?logo=NPM)
![NPM Bundle Size](https://img.shields.io/bundlephobia/min/chess-pgn-parser)
![GitHub](https://img.shields.io/npm/l/chess-pgn-parser)

Chess PGN Parser is an NPM package that parses PGN(Portable Game Notation) files and returns JSON output. Currently, annotations are not supported, but this feature will be added very soon!

```js
const parser = require('chess-pgn-parser');
const fs = require('fs');

var pgn = fs.readFileSync('path-to-file.pgn');
// to get JSON 
var json = parser.pgn2json(pgn);
console.log(json);

// to get JS object
var object = JSON.parse(json);
console.log(object);
```

# New Features!
  - This module is now browser compatible!
  - Support for escape mechansim (%)

# Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with the `npm init` command.

Installation is done using the `npm install` command:

```
$ npm install chess-pgn-parser
```

Starting from v1.3.0, you can use this package on the browser as well with a CDN.

 - Uncompressed file(latest version): https://cdn.jsdelivr.net/npm/chess-pgn-parser/dist/parser.js
 - Compressed file(latest version): https://cdn.jsdelivr.net/npm/chess-pgn-parser/dist/parser.min.js

# Example
## PGN File
```
[Event "Herceg Novi blitz"]
[Site "Herceg Novi blitz"]
[Date "1970.04.08"]
[EventDate "?"]
[Round "4.2"]
[Result "1-0"]
[White "Robert James Fischer"]
[Black "Samuel Reshevsky"]
[ECO "B40"]
[WhiteElo "?"]
[BlackElo "?"]
[PlyCount "119"]

1. e4 {Notes by Bobby Fischer} 1... c5 2. Nf3 e6 3. c4 Nc6 4. Nc3 Nf6 5. g3 g6
{5...d5 equalizes} 6. Bg2 Bg7 7. O-O O-O 8. d3 {if 8 d4? cxd4 9 Nxd4 Nxe4! wins
a Pawn.} 8... d6 9. h3 e5 {Weaker is 9...b6? 10d4 with an advantage for White
as in the game Smyslov-Reshevsky, the match of the century, Belgrade 1970. Now
the position is symmetrical with White two tempi ahead.} 10. a3 a5 11. Rb1 Bd7
12. Bd2 Ne8 13. Nd5 Ne7 14. b4 Nxd5 15. cxd5 $4 {Very anti-positional. Correct
of course was 15 exd5. Now Black gets a strong passed a-Pawn, also White's
b-Pawn is isolated.} 15... cxb4 16. axb4 a4 17. b5 $6 {Otherwise 17. . .
Nc7-b5. White sacrifices a Pawn for complications.} 17... Nc7 18. b6 Nb5 19.
Rb4 Qxb6 20. Qa1 a3 21. Rfb1 {If 20 Rxa4?,... Nc3 wins the exchange.} 21...
Rfc8 $1 22. Bf1 Rc2 23. d4 a2 24. R1b3 exd4 25. Bxb5 Bxb5 $2 {25. . . d3! won
by force. For example a) 26 Bd7 Ba1 27 Rxb6 Bb2 or . . . Bd4 etc. b) 26 e5 Rd2!
27 Nd2 Be5 28 Bd7 Ba1 29 Rb6 Bd4 etc.} 26. Rxb5 Qd8 27. Rd3 Qe7 28. Ne1 Qxe4
29. Rbb3 Rxd2 $1 30. Rxd2 d3 31. Rxa2 $5 {A last swindle try.} 31... Bxa1 $4
{31. . . Ra2!  won easily 32.Qxa2 Qe1+  33.Kg2 d2, But as Dr. Tarrasch said
"You must see it"} 32. Rxa8+ Kg7 33. Rxa1 d2 34. Ng2 Qxd5 35. Rbb1 b5 36. Rd1
b4 37. Ne3 Qd3 38. Nf1 b3 39. Rab1 b2 40. Rxb2 d5 41. Rdxd2 Qc3 42. Ne3 d4 43.
Nd1 Qc4 44. Rb1 h5 45. h4 f5 46. Rdb2 f4 47. Rb3 fxg3 48. Rxg3 Qc2 49. Rb7+ Kh6
50. Nb2 Qe4 51. Rb6 Qe1+ 52. Kg2 Qe4+ 53. Kf1 Qb1+ 54. Ke2 Qc2+ 55. Ke1 Qe4+
56. Kd1 Qf5 57. Rbxg6+ Qxg6 58. Rxg6+ Kxg6 59. Ke2 Kf5 60. Kf3 1-0  

```

## Prettified JSON Output
```json
{
    "str": {
        "Event": "Herceg Novi blitz",
        "Site": "Herceg Novi blitz",
        "Date": "1970.04.08",
        "EventDate": "?",
        "Round": "4.2",
        "Result": "1-0",
        "White": "Robert James Fischer",
        "Black": "Samuel Reshevsky",
        "ECO": "B40",
        "WhiteElo": "?",
        "BlackElo": "?",
        "PlyCount": "119"
    },
    "moves": [
        "e4",
        "c5",
        "Nf3",
        "e6",
        "c4",
        "Nc6",
        "Nc3",
        "Nf6",
        "g3",
        "g6",
        "Bg2",
        "Bg7",
        "O-O",
        "O-O",
        "d3",
        "d6",
        "h3",
        "e5",
        "a3",
        "a5",
        "Rb1",
        "Bd7",
        "Bd2",
        "Ne8",
        "Nd5",
        "Ne7",
        "b4",
        "Nxd5",
        "cxd5",
        "cxb4",
        "axb4",
        "a4",
        "b5",
        "Nc7",
        "b6",
        "Nb5",
        "Rb4",
        "Qxb6",
        "Qa1",
        "a3",
        "Rfb1",
        "Rfc8",
        "Bf1",
        "Rc2",
        "d4",
        "a2",
        "R1b3",
        "exd4",
        "Bxb5",
        "Bxb5",
        "Rxb5",
        "Qd8",
        "Rd3",
        "Qe7",
        "Ne1",
        "Qxe4",
        "Rbb3",
        "Rxd2",
        "Rxd2",
        "d3",
        "Rxa2",
        "Bxa1",
        "Rxa8+",
        "Kg7",
        "Rxa1",
        "d2",
        "Ng2",
        "Qxd5",
        "Rbb1",
        "b5",
        "Rd1",
        "b4",
        "Ne3",
        "Qd3",
        "Nf1",
        "b3",
        "Rab1",
        "b2",
        "Rxb2",
        "d5",
        "Rdxd2",
        "Qc3",
        "Ne3",
        "d4",
        "Nd1",
        "Qc4",
        "Rb1",
        "h5",
        "h4",
        "f5",
        "Rdb2",
        "f4",
        "Rb3",
        "fxg3",
        "Rxg3",
        "Qc2",
        "Rb7+",
        "Kh6",
        "Nb2",
        "Qe4",
        "Rb6",
        "Qe1+",
        "Kg2",
        "Qe4+",
        "Kf1",
        "Qb1+",
        "Ke2",
        "Qc2+",
        "Ke1",
        "Qe4+",
        "Kd1",
        "Qf5",
        "Rbxg6+",
        "Qxg6",
        "Rxg6+",
        "Kxg6",
        "Ke2",
        "Kf5",
        "Kf3"
    ],
    "annotations": [
        {
            "moveCount": 1,
            "comment": "Notes by Bobby Fischer"
        },
        {
            "moveCount": 5,
            "comment": "5...d5 equalizes"
        },
        {
            "moveCount": 8,
            "comment": "if 8 d4? cxd4 9 Nxd4 Nxe4! wins a Pawn."
        },
        {
            "moveCount": 9,
            "comment": "Weaker is 9...b6? 10d4 with an advantage for White as in the game Smyslov-Reshevsky, the match of the century, Belgrade 1970. Now the position is symmetrical with White two tempi ahead."
        },
        {
            "moveCount": 15,
            "comment": "Very anti-positional. Correct of course was 15 exd5. Now Black gets a strong passed a-Pawn, also White's b-Pawn is isolated."
        },
        {
            "moveCount": 17,
            "comment": "Otherwise 17. . . Nc7-b5. White sacrifices a Pawn for complications."
        },
        {
            "moveCount": 21,
            "comment": "If 20 Rxa4?,... Nc3 wins the exchange."
        },
        {
            "moveCount": 25,
            "comment": "25. . . d3! won by force. For example a) 26 Bd7 Ba1 27 Rxb6 Bb2 or . . . Bd4 etc. b) 26 e5 Rd2! 27 Nd2 Be5 28 Bd7 Ba1 29 Rb6 Bd4 etc."
        },
        {
            "moveCount": 31,
            "comment": "A last swindle try."
        },
        {
            "moveCount": 31,
            "comment": "31. . . Ra2!  won easily 32.Qxa2 Qe1+  33.Kg2 d2, But as Dr. Tarrasch said \"You must see it\""
        }
    ],
    "nag": [
        {
            "moveCount": 15,
            "value": "$4"
        },
        {
            "moveCount": 17,
            "value": "$6"
        },
        {
            "moveCount": 21,
            "value": "$1"
        },
        {
            "moveCount": 25,
            "value": "$2"
        },
        {
            "moveCount": 29,
            "value": "$1"
        },
        {
            "moveCount": 31,
            "value": "$5"
        },
        {
            "moveCount": 31,
            "value": "$4"
        }
    ]
}
```


# Coming Soon!

 - End of line comment support (; styled annotations)

License
----

MIT