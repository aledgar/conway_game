const GameOfLife = require('../models/GameOfLife');

const game = new GameOfLife(25, 25);

module.exports.setGame = function (socket) {
  socket.emit('NextGeneration', game.generateNextGeneration());
};
