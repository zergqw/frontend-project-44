#!/usr/bin/env node

import common from '../index.js';
import sayName from '../cli.js';

const question = () => {
  const difference = Math.floor(Math.random() * 100);
  let numberProgressions = Math.floor(Math.random() * 100);
  const HiddenNumber = Math.floor(Math.random() * 10);
  const progression = [numberProgressions];
  for (let i = 0; i < 9; i += 1) {
    numberProgressions += difference;
    progression.push(numberProgressions);
  }
  progression[HiddenNumber] = '..';
  return progression.join(' ');
};
const check = (num) => {
  const answer = num.split(' ');
  const difference = answer[0] !== '..' && answer[1] !== '..' ? answer[1] - answer[0] : answer[3] - answer[2];
  let result = Number(answer[8]) + difference;
  for (let i = 0; i < 9; i += 1) {
    if (answer[i] === '..') {
      result = answer[i + 1] - difference;
    }
  }
  return String(result);
};
const discription = 'What number is missing in the progression?';
const gameProgression = () => common(discription, question, check, sayName());

export default gameProgression;
