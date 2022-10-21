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

// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.D

const notaDada = 101;

if (notaDada < 0 || notaDada > 100) {
  console.log('erro')
} else if (notaDada >= 90) {
  console.log('A')
} else if (notaDada >=80) {
  console.log('B')
} else if (notaDada >=70) {
  console.log('C')
} else if (notaDada >=60) {
  console.log ('D')
} else if (notaDada >=50) {
  console.log('E')
} else if (notaDada <50) {
  console.log('F')
}

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. 
// Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const oneNumber = 10
const twoNumber = 9
const threeNumber= 3


if (oneNumber % 2 === 0 || twoNumber % 2 === 0 || threeNumber % 2 === 0) {
  console.log('true')
} else {
  console.log('false')
}

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
// Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const oneNumber = 10
const twoNumber = 6
const threeNumber= 2

if (oneNumber % 2 !== 0 || twoNumber % 2 !== 0 || threeNumber % 2 !== 0) {
  console.log('true')
} else {
  console.log('false')
}
