import { CHARACTER_INFO, REQUEST_LOADING } from '../Actions';

const INITAL_STATE = {
  name: '',
  born: '',
  isLoading: false,

}

// Reducer recebe STATE e ACTION e retorna um OBJETO
const characterReducer = (state = INITAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CHARACTER_INFO: {
      return {
        ...state,
        name: action.playload.name,
        born: action.playload.born,
        isLoading: false,
      }
    }
    default: return state;
  }
};

export default characterReducer;
