# Chess PGN Parser
!> PGN to JSON in seconds.

# About
**Chess PGN Parser** is an NPM package that parses PGN(Portable Game Notation) files and returns prettified JSON output. What makes this unique is that it is not like most other packages that cannot handle annotations. You can use it both on the client using a CDN and on the server using `npm` or `yarn`.

# Features
- Get stringified JSON as output
- Support for annotations
- Support for NAGs (Numerical Annotation Glyphs)
- Simple and fast API
- Runs on both server and client

# Demo
<pre>
<textarea spellcheck="false" rows="20" placeholder="Paste PGN" id="pgn">
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
</textarea>
</pre>

<div style="text-align:center; margin: 2rem 0">
    <button class="btn" onClick="document.querySelector('#json').value = parser.pgn2json(document.querySelector('#pgn').value)">Convert to JSON</button>
</div>

<textarea spellcheck="false" rows="20" placeholder="Get JSON here" id="json"></textarea>

# Installation
There are three ways you can use **Chess PGN Parser**:

## Via NPM
Run this command from the root directory of your project:
```
npm i chess-pgn-parser
```

## Via Yarn
Run this command from the root directory of your project:
```
yarn add chess-pgn-parser
```

## Via CDN
### jsDelivr
```html
<!-- compiled script -->
<script src= "https://cdn.jsdelivr.net/npm/chess-pgn-parser/dist/parser.js"/>
```
```html
<!-- compiled, minified script -->
<script src= "https://cdn.jsdelivr.net/npm/chess-pgn-parser/dist/parser.min.js"/>
```

### UNPKG
```html
<!-- compiled script -->
<script src= "https://unpkg.com/chess-pgn-parser/dist/parser.js"/>
```
```html
<!-- compiled, minified script -->
<script src= "https://unpkg.com/chess-pgn-parser/dist/parser.min.js"/>
```

# Documentation
The API is very simple. There is only one method attached to the object's reference. In the browser, the API methods are exposed under the `parser` object.

## .pgn2json("pgn-string")
`pgn-string`: A string containing the entire PGN file.
- type: `string`

# Examples
## Node.js
```js
const parser = require('parser');
const fs = require('fs');
var pgn = fs.readFileSync('path-to-file.pgn');
// to get JSON
var json = parser.pgn2json(pgn);
console.log(json);

// to get JS object
var obj = JSON.parse(json);
console.log(obj);
```
## Browser
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Chess PGN Parser Demo</title>
</head>

<body>
  <textarea spellcheck="false" rows="20" placeholder="Paste PGN here" id="pgn"></textarea>
  <button>Convert to JSON</button>
  <h1>JSON will be displayed here</h1>
  <p id="json-display"></p>
  <p id="obj-display"></p>
  
  <!--  latest version of Chess PGN Parser-->
  <script src="https://cdn.jsdelivr.net/npm/chess-pgn-parser/dist/parser.min.js"></script>
  <script>
      document.querySelector("button").addEventListener('click', function(e) {
        e.preventDefault();
        var pgn = document.querySelector("#pgn").value;
        // to get JSON
        var json = parser.pgn2json(pgn); // thats it!
        document.querySelector("json-display").textContent = json;
        // to get JS object
        var obj = JSON.parse(json);
        document.querySelector("obj-display").textContent = obj;
      });
  </script>
</body>

</html>
```

# Contributing
Think you can improve something? Have a new feature in mind? Please feel free to open an issue and make a pull request on the [github repo](https://github.com/Aditya-ds-1806/Chess-PGN-Parser) of this project.