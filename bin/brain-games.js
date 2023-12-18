#!/usr/bin/env node.
import sayName from '../src/cli.js';
import Even from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = sayName();
console.log('Hello', name);

const gameEven = () => {
  if (Even() === 1) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

gameEven();
