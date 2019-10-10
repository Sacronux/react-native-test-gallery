import {FETCH_DATA, FETCH_FAILED} from './types';

export const fetchData = (newPhotos) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({
      type: FETCH_DATA,
      payload: success})
      return success
  }
  function onError(error) {
    dispatch({type: FETCH_FAILED, error})
  }

  try {
    const URL = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
    const res = await fetch(URL);
    const success = await res.json();
    return onSuccess(success);
  } catch (error) {
    return onError(error)
  }
  
};