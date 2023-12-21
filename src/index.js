import readlineSync from 'readline-sync';

const common = (discription, question, check, name) => {
  let corect = 0;
  console.log(discription);
  while (corect !== 3) {
    const num = question();
    console.log('Question:', num);
    const userAnwr = readlineSync.question('Your answer: ');
    if (check(num) === userAnwr) {
      console.log('Correct!');
      corect += 1;
    } else {
      console.log(`'${userAnwr}' is wrong answer ;(. Correct answer was '${check(num)}'.`);
      break;
    }
  }
  if (corect === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default common;
