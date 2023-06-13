const w = 8;
const h = 12;

//최대공약수 구하기
function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

const g = gcd(w, h);

const minW = w / g; //2
const minH = h / g; //3

const cut = minW * minH - (minW - 1) * (minH - 1);

console.log(w * h - cut * g);
