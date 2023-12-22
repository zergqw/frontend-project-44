#!/usr/bin/env node

import common from '../src/index.js';
import sayName from '../src/cli.js';

const question = () => {
  const d = Math.floor(Math.random() * 100);
  let num1 = Math.floor(Math.random() * 100);
  const secret1 = Math.floor(Math.random() * 10);
  const array = [num1];
  for (let i = 0; i < 9; i += 1) {
    num1 += d;
    array.push(num1);
  }
  array[secret1] = '..';
  return array.join(' ');
};
const check = (num) => {
  const num1 = num.split(' ');
  const d = num1[0] !== '..' && num1[1] !== '..' ? num1[1] - num1[0] : num1[3] - num1[2];
  let result = Number(num1[8]) + d;
  for (let i = 0; i < 9; i += 1) {
    if (num1[i] === '..') {
      result = num1[i + 1] - d;
    }
  }
  return String(result);
};
const discription = 'What number is missing in the progression?';
const gameProgression = (name) => common(discription, question, check, name);
gameProgression(sayName());
