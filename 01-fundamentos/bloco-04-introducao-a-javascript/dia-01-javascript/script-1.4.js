//Exercício 1
const a = 8;
const b = 4;

const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log(adicao, subtracao, multiplicacao, divisao, modulo)

//Utilize if/else para fazer um programa que retorne o maior de dois números. 
//Defina, no começo do programa, duas constantes com os valores que serão comparados

const one = 5;
const two = 7;

if (one > two) {
  console.log('A primeira constante é maior que a segunda')
} else {
  console.log('A segunda constante é maior que a primeira')
}

// Utilize if/else para fazer um programa que retorne o maior de três números. 
// Defina, no começo do programa, três constantes com os valores que serão comparados.

const fistNumber = 9;
const twoNumber = 12;
const threeNumber = 3;

if (fistNumber > twoNumber && fistNumber > threeNumber) {
  console.log('A primeira constante é maior que a segunda e terceira')
} else if (twoNumber > fistNumber && twoNumber > threeNumber) {
  console.log('A segunda constante é maior que a primeira e terceira')
} else {
  console.log ('A terceira constante é maior que a primeira e segunda')
}
