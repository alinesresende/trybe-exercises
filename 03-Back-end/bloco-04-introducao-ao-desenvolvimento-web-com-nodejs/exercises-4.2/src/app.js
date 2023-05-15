const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

// Crie uma função de leitura do JSON com o modulo fs.
const readMovies = async () => {
  try {
    const read = await fs.readFile(path.resolve(__dirname, './movies.json'), 'utf8');
    return JSON.parse(read);
  } catch (error) {
    console.error(error)
  }
}

//Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movie = movies.find((movie) => +id === movie.id)
  res.status(200).json(
    movie
  )
});

// Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.

app.get('/movies', async (req, res) => {
  const movies = await readMovies()
  res.status(200).json(
    movies
  )
});

// Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.

app.post('/movies', async (req, res) => {
  const movies = await readMovies()
  const {movie, price} = req.body;
  const nextId = movies.length + 1;
  const newMovie = {
    id: nextId,
    movie,
    price,
  }
  movies.push(newMovie);
  fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(movies));
  res.status(200).json(
    newMovie
  );
});

//Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

app.put('/movies/:id', async (req, res) => {
  const movies = await readMovies()
  const { id } = req.params;
  const {movie, price} = req.body;
  const updatedMovies = movies.map((m) => {
    if(m.id === +id) {
      return {
        ...m,
        movie, 
        price,
      }
    }
    return m;
  } )

  fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(updatedMovies));

  res.status(200).json(
    updatedMovies,
  )
});

// Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
app.delete('/movies/:id', async (req, res) => {
  const movies = await readMovies()
  const { id } = req.params;
  const deleteMovie = movies.filter((movie) => +id !== movie.id)
  fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(deleteMovie));

  res.status(200).json(
    deleteMovie,
  )
})
module.exports = app;