import readlineSync from 'readline-sync';
const sayName = () => readlineSync.question('May I have your name?');
export default sayName;