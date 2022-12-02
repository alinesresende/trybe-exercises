// Conteúdo Filter

// Sitaxe: 
array.filter(() => {});

// A callback recebe como PRIMEIRO parâmeto o elemento do array:
// sendo item = elemento
array.filter((item) => {});

// retornar apenas os nomes:
const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

dados.filter((item) => {
  return typeof item === 'string'; // retornando uma string
});

// filter com APENAS UMA LINHA:
const dados1 = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

dados1.filter((item) => typeof item === 'string');

// Agora vamos supor que você queira apenas os valores que não são strings do array dados.
// Como faria isso? Basta alterar a condição do nosso filter!
const dados2 = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];
dados2.filter((item) =>  typeof item !== 'string'); // diferente de string
