#!/usr/bin/env node

import common from '../index.js';
import sayName from '../cli.js';

const question = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  return `${num1} ${num2}`;
};
const check = (answer) => {
  const answer1 = answer.split(' ');
  answer1[0] = Number(answer1[0]);
  answer1[1] = Number(answer1[1]);
  let maxDivider = 0;
  if (answer1[0] > answer1[1]) {
    for (let i = 0; i < answer1[0]; i += 1) {
      if (answer1[0] % i === 0 && answer1[1] % i === 0) {
        maxDivider = i;
      }
    }
    return String(maxDivider);
  }
  for (let i = 0; i < answer1[1]; i += 1) {
    if (answer1[0] % i === 0 && answer1[1] % i === 0) {
      maxDivider = i;
    }
  }
  return String(maxDivider);
};
const discription = 'Find the greatest common divisor of given numbers.';
const gameGCD = () => common(discription, question, check, sayName());
export default gameGCD;
