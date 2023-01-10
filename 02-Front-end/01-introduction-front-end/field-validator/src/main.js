import validator from 'validator';

const textField = document.getElementById('camp');
const seletor = document.getElementById('option');
const button = document.getElementById('btn');
const outputText = document.getElementById('return-text');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const field = {
    cpf: validator.isTaxID(textField.value, 'en-US'),
    email: validator.isEmail(textField.value),
  };
  outputText.innerHTML = `Validation returned ${field[seletor.value]}`;
})


