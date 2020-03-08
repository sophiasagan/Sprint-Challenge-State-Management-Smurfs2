import { 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_START, 
    FETCH_SMURF_FAIL,

    CREATE_SMURF_START,
    CREATE_SMURF_SUCCESS,
    CREATE_SMURF_FAIL,

    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAIL
    
} from "../actions"

export const initialState = {
    smurfs: [{

    }],
    isFetching: false,
    isUpdating: false,
    isDeleting: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }

        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case CREATE_SMURF_START:
            return {
                ...state,
                isUpdating: true
            }
            
        case CREATE_SMURF_SUCCESS:
            return {
                ...state,
                smurfArray: action.payload,
                isUpdating: false
            }
    
        case CREATE_SMURF_FAIL:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
            case DELETE_SMURF_START:
                return {
                    ...state,
                    isUpdating: true
                }
                
            case DELETE_SMURF_SUCCESS:
                return {
                    ...state,
                    smurfArray: action.payload,
                    isUpdating: false
                }
        
            case DELETE_SMURF_FAIL:
                return {
                    ...state,
                    isUpdating: false,
                    error: action.payload
                }


        
        default:
            return state
    }
}