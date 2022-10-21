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

// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo.
// e caso não seja nem positivo e nem negativo retorne “zero”.

let valorRecebido = -4;

if (valorRecebido > 0) {
  console.log('positivo') 
} else if (valorRecebido < 0) {
  console.log('negativo')
} else {
  console.log('zero')
}

// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
//Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const a = 60;
const b = 60;
const c = 60;

if ((a <= 0 || b <=0 || c <= 0) || (a + b + c != 180)){
  console.log('inválido')
} else {
  console.log('válido')
}
