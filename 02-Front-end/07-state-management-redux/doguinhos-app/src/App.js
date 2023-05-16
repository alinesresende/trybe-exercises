// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';

import { fetchDogImage } from "./Redux/Actions";

import "./App.css";

class App extends React.Component {
  render() {
    const { isFetching, imageURL, dispatch } = this.props;

    if (isFetching) return <p>Carregando...</p>;

    return (
      <div>
        <button
          onClick={() => { dispatch(fetchDogImage()) }}
          type="button"
        >
          Novo Doguinho
        </button>
        {
          imageURL &&
          <img
            src={imageURL}
            alt="Imagem de um cachorro aleatório"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.dogReducer.imageURL,
  isFetching: state.dogReducer.isFetching,
});

export default connect(mapStateToProps)(App);
