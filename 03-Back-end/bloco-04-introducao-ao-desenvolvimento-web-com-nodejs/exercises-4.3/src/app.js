const express = require('express');


const fs = require('fs').promises;
const path = require('path')

const app = express();

const readCacauTrybeFile = async () => {
  const cacauTrybe = './cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(path.resolve(__dirname, cacauTrybe), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};


// GET /chocolates/total : Quantidade total de chocolates
// Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados, usando o seguinte contrato:
app.get('/chocolates/total', async (req, res) => {
  const cacauTrybe = await readCacauTrybeFile();
  console.log(cacauTrybe)
  const chocolates = cacauTrybe.chocolates;
  const totalChocolates = chocolates.length;
  res.status(200).json({
    totalChocolates
  })
})

module.exports = {
    getAllChocolates,
};


module.exports = app;