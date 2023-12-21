import common from '../src/index.js';

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
const check = (num) => {
  const num1 = num[1] === ' ' ? num[0] : num[0] + num[1];
  const num2 = num.at(-2) === ' ' ? num.at(-1) : num.at(-2) + num.at(-1);
  const operator = num[1] === ' ' ? num[2] : num[3];
  if (operator === '+') {
    return String(Number(num1) + Number(num2));
  }
  if (operator === '-') {
    return String(Number(num1) - Number(num2));
  }
  return String(Number(num1) * Number(num2));
};
const discription = 'What is the result of the expression?';
const gameCalc = (name) => common(discription, question, check, name);
export default (gameCalc);
