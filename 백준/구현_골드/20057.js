function solution(map) {
  const N = map.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const dc = [1, 1, 2, 2]; //이동횟수

  const sdx = [
    [-1, 1, -2, -1, 1, 2, -1, 1, 0],
    [-1, -1, 0, 0, 0, 0, 1, 1, 2],
    [1, -1, 2, 1, -1, -2, 1, -1, 0],
    [1, 1, 0, 0, 0, 0, -1, -1, -2],
  ];
  const sdy = [
    [1, 1, 0, 0, 0, 0, -1, -1, -2],
    [-1, 1, -2, -1, 1, 2, -1, 1, 0],
    [-1, -1, 0, 0, 0, 0, 1, 1, 2],
    [1, -1, 2, 1, -1, -2, 1, -1, 0],
  ];
  const ratio = [0.01, 0.01, 0.02, 0.07, 0.07, 0.02, 0.1, 0.1, 0.05];

  let currentX = Math.floor(N / 2); //토네이도 시작 x값
  let currentY = Math.floor(N / 2); //토네이도 시작 y값

  let totalOutSand = 0; //밖으로 나간 모래의 양
  while (true) {
    for (let dir = 0; dir < 4; dir++) {
      for (let cnt = 0; cnt < dc[dir]; cnt++) {
        //다음 위치로 이동
        const nextX = currentX + dx[dir]; //규칙에 의한 x 이동 값
        const nextY = currentY + dy[dir]; //규칙에 의한 y 이동 값
        if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) {
          return totalOutSand;
        }
        //이동한 위치의 모래 뿌리기

        let sand = map[nextX][nextY]; //흩뿌리기 전 y에 있는 모래 양
        map[nextX][nextY] = 0; //흩뿌린 후 y에 있는 모래 0으로 초기화
        let totalSpreadSand = 0; //총 흩뿌린 모래 양

        for (let sp = 0; sp < 9; sp++) {
          const spreadX = nextX + sdx[dir][sp];
          const spreadY = nextY + sdy[dir][sp];
          const spreadAmount = Math.floor(sand * ratio[sp]);
          totalSpreadSand += spreadAmount;
          if (spreadX < 0 || spreadX >= N || spreadY < 0 || spreadX >= N) {
            totalOutSand += spreadAmount;
          } else {
            map[spreadX][spreadY] += spreadAmount;
          }
        }
        //알파 구하기
        const alphaX = nextX + dx[dir];
        const alphaY = nextY + dy[dir];
        const alphaSand = sand - totalSpreadSand;
        if (alphaX < 0 || alphaX >= N || alphaY < 0 || alphaY >= N) {
          totalOutSand += alphaSand;
        } else {
          map[alphaX][alphaY] += alphaSand;
        }

        //이동한 위치를 현재 위치로 갱신
        currentX = nextX;
        currentY = nextY;
      }
    }

    for (let i = 0; i < 4; i++) {
      //이동이 한 사이클 끝난 후 +2
      dc[i] += 2;
    }
  }
}

const input = require("fs").readFileSync("example.txt").toString().split("\n");
const N = Number(input.shift());
const map = input.map((ele) => ele.split(" ").map(Number));

const result = solution(map);

console.log(result);
