// Conteúdo de Spread

// O que o spread faz é espalhar os elementos, tanto de arrays quanto de objetos, e inserir informações novas sem alterar o array ou objeto original.
// Sua sintaxe é caracterizada por três pontos (...).

// A sintaxe do spread para utilizar em arrays é composta por:

// uma variável, que vai salvar o novo array;
// os colchetes, que caracterizam que é um array;
// os três pontos ..., que caracterizam que uma informação está sendo espalhada. Nesse caso, o array original;
// o elemento a ser adicionado.

// const variavel = [...arrayOriginal, itemParaAdicionar];

// Exemplo:
// array original
let items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Meia'];
console.log(newItems)

// Outro exemplo:
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); // um array com todas as informações, sendo mantido os originais.

// Utilizando spread em objetos:
const product = {
  id: 1,
  name: 'Camiseta',
};

const newProduct = { ...product, price: 23 }; // {id: 1, name: 'Camiseta', price: '23'}

// Price do product em outro object

const product2 = { // objeto 1
  id: 1,
  name: 'Camiseta',
};

const productPrice = { // objeto 2
price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct2 = { ...product2, ...productPrice };

console.log(newProduct2); // {id: 1, name: 'Camiseta', price: 23}

// a função nativa do JavaScript Math.max recebe vários parâmetros e retorna o maior número entre eles. 
console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Abacate', 'Amexa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Abacaxi', 'Mamão'];

const fruitSalad = (fruit, additional) => {
  const newFrutas = [...fruit, ...additional]
  return newFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));

// Conteúdo de Rest
// O parâmetro rest é uma feature do ES6 que permite que você agrupe informações em um lugar só.
// Ao utilizar o rest, você consegue agrupar esses argumentos usando a sintaxe de três pontos(...).

const countParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// Uma função que é responsável por somar a quantidade de produtos de um carrinho de compras:
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// Ao utilizar o rest, suas funções podem ficar mais flexíveis quando você precisa passar múltiplos parâmetros, 
// pois não precisa especificar quantos argumentos a função irá receber!

// DIFERENÇA:  O spread é responsável por espalhar valores, e ele pode ser utilizado para passar parâmetros ao EXECUTAR uma função. 
// Já o rest pode ser utilizado para agrupar valores ao DECLARAR funções que podem receber múltiplos parâmetros.
