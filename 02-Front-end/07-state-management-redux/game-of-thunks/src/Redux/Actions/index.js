import apiGameOfThrones from '../../services/apiGame';
export const CHARACTER_INFO = 'CHARACTER_INFO';
export const REQUEST_LOADING = 'REQUEST_LOADING'

const characterInfo = (name, born) => ({
  type: CHARACTER_INFO, 
  playload: {
    name,
    born
  }
});

const requestLoading = () => ({
  type: REQUEST_LOADING,
});


export default characterInfo;

export const fetchApiGameOfThrones = (nameCharacter) => {
  return async (dispatch) => {
    dispatch(requestLoading());
    const result = await apiGameOfThrones(nameCharacter);
    dispatch(characterInfo(result[0].name, result[0].born));
  }
}

