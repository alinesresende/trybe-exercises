// 1 - Importar o createStore
// 2 - Importar o devtools
// 3 - Importar o applyMiddleware and thunk
// 4 - Export o store 
// 5 - Criar o reducer no diretório reducer
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore( composeWithDevTools(applyMiddleware(thunk)))

export default store;
