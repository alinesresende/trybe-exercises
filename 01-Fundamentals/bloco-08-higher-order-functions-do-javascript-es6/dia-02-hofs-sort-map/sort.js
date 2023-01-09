// Conteúdo de Sort()

// Exemplos para fixar o entendimento:
let fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

let scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

let things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.


// Então, a função de comparação tem a seguinte forma:

function comparar(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}

// Para comparar números ao invés de texto, a função de comparação pode simplesmente subtrair b de a. 
// A função abaixo irá ordenar o array em ordem CRESCENTE:

function compararNumeros(a, b) {
  return a - b;
}

let numbers = [4, 2, 5, 10, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [ 2, 3, 4, 5, 10]

// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => {
  return a.age - b.age
})

console.log(people);

// ORDEM DECRESCENTE:

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people2.sort((a, b) => {
  return b.age - a.age
})

console.log(people2);

