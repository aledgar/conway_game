const express = require('express');
const http = require('http');
const cors = require('cors');
const { setGame } = require('./controllers/gameOfLifeController');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(cors());

let interval;
io.on('connection', (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => setGame(socket), 1000);
  socket.on('disconnect', () => {
    clearInterval(interval);
  });
});

server.listen(3001, () => {
  console.log('Connected on port ', 3001);
});
