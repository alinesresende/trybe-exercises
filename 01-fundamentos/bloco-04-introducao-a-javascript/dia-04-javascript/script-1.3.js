// // Exercícios Funções 

// /* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false */

// function verificaPalindrome(word){
//   for(index in word) {
//     if(word[index] != word[(word.length - 1) - index]) {
//       return false;
//   }
// }
// return true;
// }

// /// Outro metodo

// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
  
//   return reverse
// }

// console.log(verificaPalindrome('arara')); //true
// console.log(verificaPalindrome('desenvolvimento')); //false


/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor */

function acharMaiorIndice (numeros) {
  let indiceMaior = 0;
  for(let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
  }
}
return indiceMaior;
}
console.log(acharMaiorIndice([2, 3, 6, 7, 10, 1]))


/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6. */

function indiceDoMenor(numbers) {
  let indiceMenor = 0;
  for (let indice in numbers) {
    if (numbers[indiceMenor] > numbers[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))

/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

function maiorPalavra (nomes) {
  let caracters = nomes[0];
  for (let index in nomes){
    if(caracters.length < nomes[index].length) {
      caracters = nomes[index];
    }
  }
  return caracters;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
