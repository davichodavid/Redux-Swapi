// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAULURE';

// our action creator will be a function that returns a function
export const getCharacters = () => dispatch => {
  dispatch({ type: LOADING });
  axios.get('https://swapi.co/api/people/')
    .then(res => {
      dispatch({
        type: SUCCESS,
        payload: res.results
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: FAILURE,
        payload: { err }
      });
    })
}
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
