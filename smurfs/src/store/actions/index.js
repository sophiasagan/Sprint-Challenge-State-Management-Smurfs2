import axios from 'axios';


export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';

export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';

export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADDING_SMURF = 'ADDING_SMURF';

export const ADD_SMURF = 'ADD_SMURF';

export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';

export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('get', res.data)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(error => {
                dispatch({ type: FETCH_SMURFS_FAILURE, payload: error })
            })
    }
}


export const addSmurfs = smurf => {
    console.log('post')
    return dispatch => {
        dispatch({ type: ADDING_SMURF });
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log('post', res)
                dispatch({ type: ADD_SMURF, payload: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }
}