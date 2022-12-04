// Exercícios envolvendo filter, map e reduce

// 1 - Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor.
// Você usará tanto o map quanto o reduce dentro dele!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const relatorio = estudantes.map((estudante) => ({
  name: estudante.nome,
  materia: estudante.materias.reduce((acc, materia) => {
    if(acc.nota > materia.nota) {
      return acc;
    } else {
      return materia;
    }
  }).name,
}));


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

// 1 - Filtre todos os objetos do gênero ficção científica ou fantasia:
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

const fantasyOrScienceFiction = () => {
  const checkGenre = books.filter((element) =>{
    return element.genre === 'Fantasia' || element.genre === 'Ficção Científica'
  })
  return checkGenre;
}
fantasyOrScienceFiction();

// 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.
// Para acessar o ano atual, pesquise sobre “como resgatar o ano atual com JavaScript” e use as funções filter e sort.

const expectedResult2 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

  const dataAtual = new Date();
  const anoAtual = dataAtual. getFullYear();

const oldBooksOrdered = () => {
  const mais60Anos = books.filter((livro) =>{
    return anoAtual - livro.releaseYear > 60
  }).sort((a, b) => {
    return b.releaseYear - a.releaseYear
  })
  return mais60Anos;
}
oldBooksOrdered();

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const expectedResult3 = [ 'Fundação', 'Duna' ];

const booksByAuthorBirthYear = (birthYear) => { 
  const returnName = books.filter((livro) => {
    return livro.author.birthYear === birthYear
  }).map((nomeLivro) => {
    return nomeLivro.name
  })
  return returnName;
}
const result = booksByAuthorBirthYear(1892);

// 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
const expectedResult4 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = () => {
  const newArray = books.filter((livro) => {
    return livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia'
  }).map((autor) => {
    return autor.author.name
  }).sort((a, b) => {
    if (a > b) {
    return 1;
    }
    if (a < b) {
    return -1;
    }
    return 0;
    });
  return newArray;
}
fantasyOrScienceFictionAuthors();

// 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult5 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const oldBooks = () => {
  const booksMais60Anos = books.filter((livro) => {
    return anoAtual - livro.releaseYear > 60
  }).map((nomeAutor) => {
    return nomeAutor.name
  })
  return booksMais60Anos;
}
console.log(oldBooks())

// 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.
const expectedResult6 = 'O Senhor dos Anéis';

const verificaSeStringTem3Pontos = (string) => {
  let quantidadePontos = 0;
  string.split('').forEach((caracter) => {
    if (caracter === '.') {
      quantidadePontos += 1;
    }
  })
  if (quantidadePontos === 3) {
    return true;
  } else {
    return false
  }
}

const authorWith3DotsOnName = () => {
  const caracter = books.filter((livro) => {
    const esseAutorTem3Pontos = verificaSeStringTem3Pontos(livro.author.name)
    return esseAutorTem3Pontos;
  })
  return caracter[0].name;
}

console.log(authorWith3DotsOnName())

// Outra solução para exercício 6:

const expectedResult7 = 'O Senhor dos Anéis';

const authorWith3DotsOnName1 = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
