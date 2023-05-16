const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  try {
     const movies = await readFile();
     const movie = movies.find(({ id }) => id === Number(req.params.id));
     res.status(200).json(movie);
   } catch (err) {
     res.status(500).send({ message: err.message });
   }
 });

module.exports = app;