// Conteúdo do map()

//Criando novo objeto com MAP:
const pessoas = ['Aline', 'Alexandre', 'Thais', 'Vera', 'Rona'];

const novasPessoas = pessoas.map((pessoa) => {
  const registro = {};
  registro.nome = pessoa;
  registro.familia = 'Resende';
  return registro;
});
console.log(novasPessoas)

// Outro exemplo:

// A função juntou o primeiro nome com o sobrenome de cada pessoa e retornou um array novo com cada um dos valores.
// Observe que o tamanho dos arrays persons e fullNames é o mesmo (3 elementos).

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// Exemplo:

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]
