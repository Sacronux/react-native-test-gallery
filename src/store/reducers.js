import {FETCH_DATA, FETCH_FAILED} from './types';


const initialState = {
  data: []
}

export default dataReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      return {
        data: action.payload
      }

    case FETCH_FAILED:
      return {
        state
      }
    default: return state;
  }   
}
