// Actions deverão retornar um OBJETO com a chave TYPE
// As actions podem ter outras chaves, mas necessariamente deve conter um chave como nome TYPE
// As actions são funções que retornam objetos

// No exercício foram criadas 3 ações
// 1 - Requisição para iniciar
// 2 - Requisição para obter imagem da API
// 3 - Requisição de error

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

// Ao utilizar API com retorno assicrono, é necessário que a action creator retorno uma FUNÇÃO.

export function fetchDogImage() {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => dispatch(requestSuccessful(data.message)))
      .catch((error) => dispatch(requestFailed(error)));
  }
}
