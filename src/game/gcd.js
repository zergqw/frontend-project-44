#!/usr/bin/env node

import common from '../index.js';
import sayName from '../cli.js';

const question = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  return `${num1} ${num2}`;
};
const check = (Answer) => {
  const answer = Answer.split(' ');
  answer[0] = Number(answer[0]);
  answer[1] = Number(answer[1]);
  let maxDivider = 0;
  if (answer[0] > answer[1]) {
    for (let i = 0; i < answer[0]; i += 1) {
      if (answer[0] % i === 0 && answer[1] % i === 0) {
        maxDivider = i;
      }
    }
    return String(maxDivider);
  }
  for (let i = 0; i < answer[1]; i += 1) {
    if (answer[0] % i === 0 && answer[1] % i === 0) {
      maxDivider = i;
    }
  }
  return String(maxDivider);
};
const discription = 'Find the greatest common divisor of given numbers.';
const gameGCD = () => common(discription, question, check, sayName());
export default gameGCD;
