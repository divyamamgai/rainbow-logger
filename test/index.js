const rainbowConsole = require('../index')(true);
const randomstring = require('randomstring');

// Using global console logger
for (let i = 1; i <= 20; i++) {
  console.log(randomstring.generate());
}

// Using created logger
for (let i = 1; i <= 20; i++) {
  rainbowConsole(randomstring.generate());
}

// Check if non-string are not breaking
rainbowConsole({
  [randomstring.generate()]: randomstring.generate()
});
