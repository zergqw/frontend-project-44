import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const Even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let corect = 0;
  while (corect !== 3) {
    const num = Math.floor(Math.random() * 100);
    console.log('Question:', num);
    const userAnwr = readlineSync.question('');
    if (isEven(num) === userAnwr) {
      console.log('Correct!');
      corect += 1;
    } else {
      console.log(`'${userAnwr}' is wrong answer ;(. Correct answer was '${isEven(num)}'.`);
      break;
    }
  }
  return corect === 3 ? 1 : 0;
};
export default Even;
