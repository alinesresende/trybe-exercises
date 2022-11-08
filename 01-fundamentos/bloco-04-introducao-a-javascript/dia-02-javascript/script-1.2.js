// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// Some todos os valores contidos no array e imprima o resultado;
// Calcule e imprima a média aritmética dos valores contidos no array;
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNumero = "";
let numerosImpares = [];
let menorNumero = numbers[0];
let newNumbers = [];
let divisao = [];

for (index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }

  if(numbers[index] % 2 !== 0) {
    numerosImpares.push(numbers[index])
  }
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

for (index =1; index <= 25; index +=1) {
  newNumbers.push(index)
}

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (index = 0; index < newNumbers.length; index +=1) {
    divisao.push(newNumbers[index] / 2)
}

console.log(divisao);

// // Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

if(numerosImpares.length === 0) {
  console.log('nenhum valor ímpar encontrado')
} else {
  console.log(numerosImpares)
}

console.log(maiorNumero)

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem:
// “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let media = soma/numbers.length

if (media > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}
