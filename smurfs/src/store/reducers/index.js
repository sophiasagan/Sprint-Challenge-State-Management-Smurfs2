import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF, ADDING_SMURF } from '../actions/index.js';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ""
        };
      case FETCH_SMURFS_FAILURE:
          return {
              ...state,
              isFetching: false,
              error: action.payload
          }
      case ADDING_SMURF:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case ADD_SMURF:
        return {
          ...state,
          isFetching: false,
          error: "",
          smurfs: action.payload
        };

      default:
        return state;
    }
}

// export default reducer;