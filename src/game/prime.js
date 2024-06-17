#!/usr/bin/env node

import common from '../index.js';
import sayName from '../cli.js';

const check = (answer) => (answer % 2 !== 0 && answer % 3 !== 0 && answer % 5 !== 0 && answer % 7 !== 0 && answer % 9 !== 0 ? 'yes' : 'no');
const question = () => (Math.floor(Math.random() * 100));
const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamePrime = () => common(discription, question, check, sayName());
export default gamePrime;
