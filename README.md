# Chess PGN Parser

Chess PGN Parser is an NPM package that parses PGN(Portable Game Notation) files and returns JSON output. Currently, annotations are not supported, but this feature will be added very soon!

```js
const parser = require('chess-pgn-parser');
var json = parser.pgn2json('path-to-file.pgn');
console.log(json);
```

# New Features!

  - Get stringified JSON output from PGN file.

# Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with the `npm init` command.

Installation is done using the `npm install` command:

```
$ npm install chess-pgn-parser
```

# Example
## PGN File
```
[Event "Spassky - Fischer World Championship Match"]
[Site "Reykjavik ISL"]
[Date "1972.08.29"]
[EventDate "?"]
[Round "20"]
[Result "1/2-1/2"]
[White "Robert James Fischer"]
[Black "Boris Spassky"]
[ECO "B68"]
[WhiteElo "?"]
[BlackElo "?"]
[PlyCount "108"]

1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. Bg5 e6
7. Qd2 a6 8. O-O-O Bd7 9. f4 Be7 10. Be2 O-O 11. Bf3 h6
12. Bh4 Nxe4 13. Bxe7 Nxd2 14. Bxd8 Nxf3 15. Nxf3 Rfxd8
16. Rxd6 Kf8 17. Rhd1 Ke7 18. Na4 Be8 19. Rxd8 Rxd8 20. Nc5
Rb8 21. Rd3 a5 22. Rb3 b5 23. a3 a4 24. Rc3 Rd8 25. Nd3 f6
26. Rc5 Rb8 27. Rc3 g5 28. g3 Kd6 29. Nc5 g4 30. Ne4+ Ke7
31. Ne1 Rd8 32. Nd3 Rd4 33. Nef2 h5 34. Rc5 Rd5 35. Rc3 Nd4
36. Rc7+ Rd7 37. Rxd7+ Bxd7 38. Ne1 e5 39. fxe5 fxe5 40. Kd2
Bf5 41. Nd1 Kd6 42. Ne3 Be6 43. Kd3 Bf7 44. Kc3 Kc6 45. Kd3
Kc5 46. Ke4 Kd6 47. Kd3 Bg6+ 48. Kc3 Kc5 49. Nd3+ Kd6 50. Ne1
Kc6 51. Kd2 Kc5 52. Nd3+ Kd6 53. Ne1 Ne6 54. Kc3 Nd4 1/2-1/2
```

## Prettified JSON Output
```
{
   "str":{
      "Event": "Spassky - Fischer World Championship Match",
      "Site": "Reykjavik ISL",
      "Date": "1972.08.29",
      "EventDate": "?",
      "Round": "20",
      "Result": "1/2-1/2",
      "White": "Robert James Fischer",
      "Black": "Boris Spassky",
      "ECO": "B68",
      "WhiteElo": "?",
      "BlackElo": "?",
      "PlyCount": "108"
   },
   "moves":[
      [ "e4", "c5" ],      [ "Nf3", "Nc6" ],   [ "d4", "cxd4" ],
      [ "Nxd4", "Nf6" ],   [ "Nc3", "d6" ],    [ "Bg5", "e6" ],
      [ "Qd2", "a6" ],     [ "O-O-O", "Bd7" ], [ "f4", "Be7" ],
      [ "Be2", "O-O" ],    [ "Bf3", "h6" ],    [ "Bh4", "Nxe4" ],
      [ "Bxe7", "Nxd2" ],  [ "Bxd8", "Nxf3" ], [ "Nxf3", "Rfxd8" ],
      [ "Rxd6", "Kf8" ],   [ "Rhd1", "Ke7" ],  [ "Na4", "Be8" ],
      [ "Rxd8", "Rxd8" ],  [ "Nc5", "Rb8" ],   [ "Rd3", "a5" ],
      [ "Rb3", "b5" ],     [ "a3", "a4" ],     [ "Rc3", "Rd8" ],
      [ "Nd3", "f6" ],     [ "Rc5", "Rb8" ],   [ "Rc3", "g5" ],
      [ "g3", "Kd6" ],     [ "Nc5", "g4" ],    [ "Ne4+", "Ke7" ],
      [ "Ne1", "Rd8" ],    [ "Nd3", "Rd4" ],   [ "Nef2", "h5" ],
      [ "Rc5", "Rd5" ],    [ "Rc3", "Nd4" ],   [ "Rc7+", "Rd7" ],
      [ "Rxd7+", "Bxd7" ], [ "Ne1", "e5" ],    [ "fxe5", "fxe5" ],
      [ "Kd2", "Bf5" ],    [ "Nd1", "Kd6" ],   [ "Ne3", "Be6" ],
      [ "Kd3", "Bf7" ],    [ "Kc3", "Kc6" ],   [ "Kd3", "Kc5" ],
      [ "Ke4", "Kd6" ],    [ "Kd3", "Bg6+" ],  [ "Kc3", "Kc5" ],
      [ "Nd3+", "Kd6" ],   [ "Ne1", "Kc6" ],   [ "Kd2", "Kc5" ],
      [ "Nd3+", "Kd6" ],   [ "Ne1", "Ne6" ],   [ "Kc3", "Nd4" ]
   ]
}
```


# Coming Soon!

 - Annotations support
 - JSON data to PGN file conversion
 - Demo website

License
----

ISC