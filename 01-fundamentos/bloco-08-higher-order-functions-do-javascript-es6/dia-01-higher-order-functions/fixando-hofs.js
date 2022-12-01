// Exemplo de forEach()
// Não retorna NADA e não espera retorno a callback

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

// Exemplo Find()
//Retorna: um único elemento (primeiro que satisfaz ou undefined)
//Espera: boolean true ou false

const pessoasTwo = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];
pessoasTwo.find((pessoa) => console.log(pessoa.nome === 'Aline'));

// Exemplo Some()
// Retorna: boolean true ou false (algum elemento satisfaz?)
// Espera: boolean true ou false

const pessoasThree = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoasThree.some((pessoa) => console.log(pessoa.idade > 30));
