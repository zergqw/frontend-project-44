#!/usr/bin/env node

import common from '../index.js';
import sayName from '../cli.js';

const even = () => {
  const check = (num) => (num % 2 === 0 ? 'yes' : 'no');
  const question = () => (Math.floor(Math.random() * 100));
  const discription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameEven = (name) => common(discription, question, check, name);
  gameEven(sayName());
};
export default even;
