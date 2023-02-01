import React from 'react';

// Inicialmente ao executar o código abaixo, SEM o clique no botão "soma", aparecerão no console do browser as seguintes mensagens:
// 1 - construtor
// 2 - render
// 3 - componentDiMount
// A ordem de chamada dos métodos refletem a ordem de execução de clico de vida do componente

// Antes de clicar no botão "soma", os métodos shouldComponentUpdate e componentDidUpdate não apareceram no console, pois não houve  atualização.
// Após o clique no botão "soma", o console exibirar as seguintes mensagens:
// 1 - shouldComponentUpdate
// 2 - render
// 3 - componentDidUpdate
// É importante notar que durante o processo de ATUALIZAÇÃO, o método RENDER é chamado novamente. Isso acontece porque, quando se atualiza uma PROPS ou STATE, o react "pede" que o componente seja renderizado no DOM.
// É possível IMPEDIR essa renderização retornando FALSE com o método shouldComponentUpdate.

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // No método shouldComponentUpdate, podemos acessar o STATE ou PROPS próximos como parametro
  // Para isso, devsmos utitlizar os parâmetros nextProps e nextState 
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.props, nextProps);
    return true;
  }

  // No método componentDidUpdate, podemos acessar o STATE ou PROPS anteriores como parametro
  // Para isso, devsmos utitlizar os parâmetros prevProps e prevState 

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.props, prevProps);
  }

  // IMPORTANTE: o STATE só é de fato atualizado quando chega no método componentDidUpdate
  // Caso seja necessário impedir uma renderização, você deve utilizar o método shouldComponentUpdate, que permite comparar os atuais e próximos estados ou props e adicionar a lógica.

  render() {
    const { propsQualquer } = this.props;

    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
        <h3>propsQualquer</h3>
        { propsQualquer }
      </div>
    );
  }
}

export default Counter;
