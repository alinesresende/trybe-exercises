// 1 - Importar legacy_createStore as createStore - redux
// 2 - Importar composeWithDevTools
// 3 - Importar applyMiddleware
// 4 - Importar Thunk
// 5 - Importar o reducers
// 6 - Passar applyMiddleware(thunk) como parametro do composeWithDevTools

import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
