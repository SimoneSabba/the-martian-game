var readline = require('readline');
var game = require('./game.js');

var log = console.log,
  g;


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var initGame = function() {
  log('Welcome! To start the game, define a grid dimension');
  rl.question('X Y: ', function (dimension) {
    var dim = dimension.split(" ");
    g = new game(dim[0], dim[1]);
    initRobot();
  });
}

var initRobot = function() {
  log('Define the initial position of your robot:');
  rl.question('X Y Orientation: ', function (position) {
    var pos = position.split(" ");
    g.initRobot(parseInt(pos[0]), parseInt(pos[1]), pos[2]);
    moveRobot();
  });
}

var moveRobot = function() {
  rl.question('Move your robot: ', function (moves) {
    g.play(moves);
    log(g.result());
    stillPlay();
  });
}

var stillPlay = function() {
  rl.question('Do you want still play? (y/n): ', function (res) {
    if (res === 'y') {
      initRobot();
    } else {
      log('Goodbye!');
      rl.close();
    }
  });
}


initGame();

