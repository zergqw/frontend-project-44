import common from '../src/index.js';

const question = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  return `${num1} ${num2}`;
};
const check = (num) => {
  const num1 = num.split(' ');
  num1[0] = Number(num1[0]);
  num1[1] = Number(num1[1]);
  let maxdel = 0;
  if (num1[0] > num1[1]) {
    for (let i = 0; i < num1[0]; i += 1) {
      if (num1[0] % i === 0 && num1[1] % i === 0) {
        maxdel = i;
      }
    }
    return String(maxdel);
  }
  for (let i = 0; i < num1[1]; i += 1) {
    if (num1[0] % i === 0 && num1[1] % i === 0) {
      maxdel = i;
    }
  }
  return String(maxdel);
};
const discription = 'Find the greatest common divisor of given numbers.';
const gameGCD = (name) => common(discription, question, check, name);
export default (gameGCD);
