// Conteúdo Reduce

// O reduce recebe dois parâmetros: o primeiro é uma callback, e o segundo parâmetro é um valor inicial (que é opcional).

// A sintaxe do reduce é a seguinte:
array.reduce(callback, valorInicial);

// O valorInicial é o valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0.

// Já a callback é a função que vai passar por cada um dos itens do array, e ela pode receber até 4 parâmetros, sendo eles:

// Acumulador: que é o valor que vai ser acumulado a cada iteração;
// Valor atual: que é o valor atual do item, a ser adicionado no acumulador;
// Index atual: que é o index do item que está sendo iterado naquele momento;
// Array: que é o array original.
// Veja abaixo a estrutura completa do reduce:

// Estrutura completa do reduce:
array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);

// IMPORTANTE: dos 4 parâmetros que a callback pode receber, apenas dois são obrigatórios: o acumulador e o valor atual.

// Para trabalhar com a função reduce você deve ter algo parecido com o código abaixo:
array.reduce((acc, curr) => {
  // escopo de execução da função
}, valorInicial);

// A função do acumulador (acc) é guardar o retorno da callback a cada iteração, e a função do (curr) é acessar cada um dos valores do array.
// o parâmetro curr é o valor de cada item do array.

const valorItens = [1, 32, 44, 2, 3];
valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

// retorno:
// acc: 0
// curr: 1
// a soma atual é 1
// acc: 1
// curr: 32
// a soma atual é 33
// acc: 33
// curr: 44
// a soma atual é 77
// acc: 77
// curr: 2
// a soma atual é 79
// acc: 79
// curr: 3
// a soma atual é 82

// Imagine que novamente você queira somar todos os valores de um array. Mas agora teremos um valor inicial já estipulado para o acc.

const numbers = [1, 32, 44, 2, 3];

const totalSum = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
   // Iteração 1: valor do acc é 30 e o de curr é 1
   // Iteração 2:valor do acc é 31 e o de curr é 32
   // Iteração 3: valor do acc é 63 e o de curr é 44
   // Iteração 4: valor do acc é 107 e o de curr é 2
   // Iteração 5: valor do acc é 109 e o de curr é 3
   // Valor final de `acc`é 112 e `curr` para no 3
  return acc + curr;
}, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final do acc é ${totalSum}`);
// por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

// Ao invés de passar a lógica direto dentro da callback do reduce, você pode criar uma função externa e chamá-la como sendo o parâmetro callback:

const numbers1 = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr; // função externa criada;

const totalSum1 = numbers1.reduce(sumNumbers, 30); // função externa sendo passada como parâmetro no reduce()

console.log(totalSum1); //112

//  Faça uma função que some todos os números pares do array numbers:
// 1 - Fazer um filter com números pares
// 2 - Somar os números após o filter ter sidor realizado.

const numbers4 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;

const sumNumbers1 = (array) => array.filter(isEven).reduce(sum); // Olhe que código pequeno e conciso!

console.log(sumNumbers1(numbers4)); // 152
