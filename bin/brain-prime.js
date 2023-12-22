import common from '../src/index.js';

const check = (num) => (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0 && num % 9 !== 0 ? 'yes' : 'no');
const question = () => (Math.floor(Math.random() * 100));
const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamePrime = (name) => common(discription, question, check, name);
export default (gamePrime);
