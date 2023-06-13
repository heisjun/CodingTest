const board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];
const m = 6; //세로
const n = 6; //가로

let puzzle = board.map((i) => i.split(""));

while (true) {
  let bomb = [];

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (
        puzzle[i][j] === puzzle[i + 1][j] &&
        puzzle[i][j] === puzzle[i][j + 1] &&
        puzzle[i][j] === puzzle[i + 1][j + 1]
      ) {
        bomb.push([i, j]);
      }
    }
  }

  if (bomb.length === 0) {
    console.log(puzzle);
    return 1;
  }

  for (let i = 0; i < bomb.length; i++) {
    const x = bomb[i][0];
    const y = bomb[i][1];
    puzzle[x][y] = 0;
    puzzle[x + 1][y] = 0;
    puzzle[x][y + 1] = 0;
    puzzle[x + 1][y + 1] = 0;
  }

  console.log(puzzle);
  //아래로 당기기
  for (let i = 1; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (puzzle[i][j] !== 0 && puzzle[i + 1][j] === 0) {
        puzzle[i + 1][j] = puzzle[i][j];
        puzzle[i][j] = 0;
      }
      if (puzzle[i][j] === 0 && puzzle[i - 1][j] !== 0) {
        let temp = puzzle[i - 1][j];
        puzzle[i][j] = temp;
        puzzle[i - 1][j] = 0;
      }
    }
  }
}
