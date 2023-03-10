import generatePassword from './generators';

const passwordGenerate = document.querySelector('.password-generated');
const amountCharacters = document.querySelector('.amount-characters');
const checkLowercase = document.querySelector('.chk-lowercase');
const checkUppercase = document.querySelector('.chk-uppercase');
const checkNumber = document.querySelector('.chk-number');
const checkSymbol = document.querySelector('.chk-symbols');
const btnGenerate = document.querySelector('.btn-generate');
export default () => {
  btnGenerate.addEventListener('click', () => {
    passwordGenerate.innerHTML = generate();
  });
};

const generate = () => {
  const password = generatePassword(
    amountCharacters.value,
    checkLowercase.checked,
    checkUppercase.checked,
    checkNumber.checked,
    checkSymbol.checked
  );
  return password || 'Nada selecionado';
};
