import React from 'react';
import './App.css';

class App extends React.Component {
  // O state recebe como characters como CHAVE e seu valor é uma lista "[]"
  state ={
    characters: [],
  }

  // Utilização da função componentDidMount() para realizar o fetch da API
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      // Após acessar os dados com as informações vinda da API é necessário ALTERAR o STATE, por mieo do this.setSate()
      // // Assim, a chave characters criada no STATE agora vai receber o resultado da API > {characters: data.results}
      this.setState({characters: data.results})
    })
  }
  render() {
    // Desestruturação da chave characters = this.state para utilizar-la dentro do RETURN
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {/* Como a chave do STATE characters já recebe o resultado da API, é possível acessar "name" para o nome do personagem e "image" para imagem nas TAG HTML por meio de desestruturação */}
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
