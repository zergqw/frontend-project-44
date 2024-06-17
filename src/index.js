import readlineSync from 'readline-sync';

const common = (discription, Question, check, name) => {
  let correct = 0;
  console.log(discription);
  while (correct !== 3) {
    const question = Question();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (check(question) === userAnswer) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${check(question)}'.`);
      break;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default common;
