class GameOfLife {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.rows = [];
    this.movements = [[0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1], [1, 0], [-1, 0]];
    // Generate the first generation
    for (let i = 0; i < this.numRows; i++) {
      this.rows.push(Array.from(Array(this.numCols), () => (Math.random() > 0.5 ? 1 : 0)));
    }
  }

  generateNextGeneration() {
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        let neighbors = 0;

        this.movements.forEach(([x, y]) => {
          const auxi = i + x;
          const auxj = j + y;

          if (auxi >= 0 && auxi < this.numRows && auxj >= 0 && auxj < this.numCols) {
            neighbors += this.rows[auxi][auxj];
          }
        });

        if (neighbors < 2 || neighbors > 3) {
          this.rows[i][j] = 0;
        } else if (this.rows[i][j] === 0 && neighbors === 3) {
          this.rows[i][j] = 1;
        }
      }
    }
    return this.rows;
  }
}

module.exports = GameOfLife;
