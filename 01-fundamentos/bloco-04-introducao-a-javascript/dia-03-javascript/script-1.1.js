// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//O fatorial é representado pelo sinal !

4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10

let number = 10;
let resultado = number;

for (let index = 1; index < number; index +=1) {
  resultado = resultado * index;
}

console.log(resultado)


// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 
// Por exemplo, a palavra “banana” seria invertida para “ananab”. 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let palavraInvertida = '';

for (index = 0; index < word.length; index +=1) {
  palavraInvertida = palavraInvertida + word[word.length - 1 - index];
}

console.log (palavraInvertida)
