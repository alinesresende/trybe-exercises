// exercícios da aula ao vivo

// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

let number = 50;
let soma = 0;

for (index = 1; index <= 50; index +=1) {
  soma = soma + index
}

console.log(soma)


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisiveis = 0;

for (index = 2; index <= 150; index +=1){
  if(index % 3 === 0) {
    divisiveis +=1
  }
}
if (divisiveis === 50) {
  console.log('Mensagem secreta')
}


// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzita = 45;
let idadeMurilo = 29;
let idadeBaeta = 51;

if (idadeCarolzita < idadeMurilo && idadeCarolzita < idadeBaeta){
  console.log('Carolzita é mais nova')
} else if (idadeMurilo < idadeCarolzita && idadeMurilo < idadeBaeta) {
  console.log('Murilo é mais novo')
} else {
  console.log('Baeta é mais novo')
}
