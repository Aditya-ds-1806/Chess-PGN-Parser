# v1.3.7 / 22-11-2020
- Added: support for escape mechanism
- Fixed: add support for escape mechanism (#3)
- Refactor: source code

# v1.3.6 / 18-11-2020
- Added: github build workflow
- Added: badges in README.md
- Added: missing dev dependencies

# v1.3.5 / 18-11-2020
- Added: [documentation website hosted with github pages](https://aditya-ds-1806.github.io/Chess-PGN-Parser/)

# v1.3.4 / 18-11-2020
- Fixed:  Return prettified JSON instead of string (#2).

# v1.3.2 / 17-11-2020
- Added: CHANGELOG.md.
- Added: examples folder.
- Added: .npmignore examples folder.
- Changed: directory structure - `examples` folder added.

# v1.3.1 / 16-11-2020
- Fixed: updated `main` in package.json

# v1.3.0 / 16-11-2020
- Added: build script.
- Added: UMD build - this package can now be used in both browsers and Nodejs.
- Added: minified UMD build
- Added: sourcemap
- Added: rollup as dev dependency.
- Changed: directory structure - new `dist` folder created.

# v1.2.0 / 15-11-2020
- Changed: `pgn2json` function argument to PGN string.
- Removed: `fs` as dependency.

# v1.1.2 / 15-11-2020
- Added: `LICENSE` file
- Changed: directory structure - created src folder.
- Fixed: readFileSync invoked with wrong parameter (#1)

# v1.0.1 / 15-11-2020 
- Added: support for `{}` style commentary.
- Added: Numeric Annotation Glyphs(NAGs) support.
- Added: `README.md`

# v1.0.0 / 15-11-2020 
- First release.
- Added: pgn2json method to parse simple PGN files without annotations and get stringified JSON output.