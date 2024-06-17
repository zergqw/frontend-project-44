#!/usr/bin/env node

import common from '../index.js';
import sayName from '../cli.js';

const check = (answer) => (answer % 2 === 0 ? 'yes' : 'no');
const question = () => (Math.floor(Math.random() * 100));
const discription = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameEven = () => common(discription, question, check, sayName());
export default gameEven;
