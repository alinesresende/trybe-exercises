// 1 - Criar o reducer
// 2 - O reducer retorna o STATE e recebe como parametro o STATE e ACTION
// 3 - Importar o combineReducers
// 4 - Importar o characterReducer
// 5 - CombineReducers recebe um OBJETO, sendo necessário passar os reducers da aplicação
import { combineReducers } from 'redux';
import dogReducer from './dogReducer';


const rootReducer = combineReducers({
  dogReducer,
})

export default rootReducer;
