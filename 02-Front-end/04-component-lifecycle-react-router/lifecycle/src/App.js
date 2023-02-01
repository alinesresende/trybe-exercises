import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  state ={
    idade: 26,
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState((state) => ({ idade: state.idade + 1 }))}>
          Adicionar Idade
        </button>
       <Counter 
        propsQualquer={ this.state.idade }
       />
      </div>
    );
  }
}

export default App;
