const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUppercase = () => String.fromCharCode(rand(65, 91));
const generateLowercase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbol = ',.;~^[]{!@#$%*()_+=-';
const generateSymbol = () => symbol[rand(0, symbol.length)];

export default function generatePassword(
  amount,
  uppercase,
  lowercase,
  number,
  symbol
) {
  const passwordArray = [];
  amount = Number(amount);
  for (let i = 0; i < amount; i++) {
    uppercase && passwordArray.push(generateUppercase());
    lowercase && passwordArray.push(generateLowercase());
    number && passwordArray.push(generateNumber());
    symbol && passwordArray.push(generateSymbol());
  }
  return passwordArray.join('').slice(0, amount);
}

generatePassword(6, true, true, true, true);
