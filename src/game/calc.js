#!/usr/bin/env node

import common from '../index.js';
import sayName from '../cli.js';

const question = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operator = Math.floor(Math.random() * 12);
  if (operator <= 4) {
    return `${num1} + ${num2}`;
  }
  if (operator <= 8) {
    return `${num1} - ${num2}`;
  }
  return `${num1} * ${num2}`;
};
const check = (answer) => {
  const num1 = answer[1] === ' ' ? answer[0] : answer[0] + answer[1];
  const num2 = answer.at(-2) === ' ' ? answer.at(-1) : answer.at(-2) + answer.at(-1);
  const operator = answer[1] === ' ' ? answer[2] : answer[3];
  if (operator === '+') {
    return String(Number(num1) + Number(num2));
  }
  if (operator === '-') {
    return String(Number(num1) - Number(num2));
  }
  return String(Number(num1) * Number(num2));
};
const discription = 'What is the result of the expression?';
const gameCalc = () => common(discription, question, check, sayName());
export default gameCalc;
