import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL'

export const CREATE_SMURF_START = 'CREATE_SMURF_START'
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS'
export const CREATE_SMURF_FAIL = 'CREATE_SMURF_FAIL'

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START'
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS'
export const UPDATE_SMURF_FAIL = 'UPDATE_SMURF_FAIL'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL'


export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURF_START})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: FETCH_SMURF_FAIL, payload: err})
        })
}

export const createSmurf = (newSmurf) => dispatch => {
    dispatch({ type: CREATE_SMURF_START })
    axios
        .post("http://localhost:3333/smurfs", {
            newSmurf
        })
        .then(res => {
            dispatch({ type: CREATE_SMURF_SUCCESS, payload: res.data })
        })
        .catch((err, msg) => {
            dispatch({ type: CREATE_SMURF_FAIL, payload: err })
        })
}

export const updateSmurf = payload => dispatch => {
    dispatch({ type: UPDATE_SMURF_START })
    axios
        .put(`http://localhost:3333/smurfs/${payload.id}`, {
            name: String(payload.name),
            age: Number(payload.age),
            height: String(payload.height)
        })
        .then(res => {
            dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data })
        })
        .catch((err, msg) => {
            dispatch({ type: UPDATE_SMURF_FAIL, payload: err })
        })
}

export const deleteSmurf = payload => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
        .delete(`http://localhost:3333/smurfs/${payload}`)
        .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_SMURF_FAIL, payload: err }))
}