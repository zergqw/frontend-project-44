import readlineSync from 'readline-sync';
import gameEven from '../bin/brain-even.js';
import gameCalc from '../bin/brain-calc.js';
import gameGCD from '../bin/brain-gcd.js';
import gameProgression from '../bin/brain-progression.js';
import gamePrime from '../bin/brain-prime.js';

const sayName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello', name);
  const game = readlineSync.question(
    'What kind of game do you want?\n 1 - Even or odd\n 2 - Caculator\n 3 - Greatest common divisor\n 4 - Arithmetic progression\n 5 - Is it a prime number\n Your choose: ',
  );
  switch (game) {
    case '1':
      gameEven(name);
      break;
    case '2':
      gameCalc(name);
      break;
    case '3':
      gameGCD(name);
      break;
    case '4':
      gameProgression(name);
      break;
    case '5':
      gamePrime(name);
      break;
    default:
      console.log('ERROR');
  }
};
export default (sayName);
