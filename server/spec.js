/* eslint-disable no-undef */
const GameOfLife = require('./models/GameOfLife');

const gameOfLife = new GameOfLife(25, 25);

// eslint-disable-next-line no-undef
describe('verifying the creation of the game of life class', () => {
  it('verifying the number of rows', () => {
    expect(25).toEqual(gameOfLife.numRows);
  });

  it('verifying the number of columns', () => {
    expect(25).toEqual(gameOfLife.numCols);
  });

  it('verifying the length of rows array (array that contains the cells)', () => {
    expect(25).toEqual(gameOfLife.rows.length);
  });

  it('verifying that in our firs generation there is at least one cell alive', () => {
    let thereIsAlive = false;

    for (let i = 0; i < gameOfLife.rows.length; i++) {
      thereIsAlive = gameOfLife.rows[i].indexOf(1);
      if (thereIsAlive) {
        break;
      }
    }

    expect(false).not.toEqual(thereIsAlive);
  });
});

describe('verifying that the game is working', () => {
  it('verifying that the next generation is not an empty array', () => {
    expect(25).toEqual(gameOfLife.generateNextGeneration().length);
  });
});
