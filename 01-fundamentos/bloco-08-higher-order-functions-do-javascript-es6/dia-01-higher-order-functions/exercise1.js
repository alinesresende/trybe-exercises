// Exercício 1

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const livro1947 = books.find((livro) => livro.author.birthYear === 1947)
  return livro1947.author.name 
}
authorBornIn1947()


const expectedResult1 = 'Duna';
const smallerName = () => {
  let smallerNameBook;
  books.forEach((livro) => {
    if (smallerNameBook === undefined) {
      return smallerNameBook = livro.name
    }
   if(livro.name.length < smallerNameBook.length) {
    smallerNameBook = livro.name;
   }
  });
  return smallerNameBook;
};
smallerName();


// Encontre o primeiro livro cujo nome possua 26 caracteres.
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
  const livroAchado = books.find((livro) => {
     return livro.name.length === 26
  })
  return livroAchado;
};
getNamedBook();
