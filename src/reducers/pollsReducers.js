import { 
    ADD_POLL_FAILURE,
    ADD_POLL_SUCCESS,
    DELETE_A_POLL,
    DELETE_POLL_FAILURE,
    DELETE_POLL_REQUEST,
    DELETE_POLL_SUCCESS,
    FETCH_POLLS_FAILURE,
    FETCH_POLLS_REQUEST, 
    FETCH_POLLS_SUCCESS 
}
from "../actions/typeAction";


const initState = {
    loading: false,
    data: [],
    error: '',
}

// reducer fetch list polls

const pollsReducers = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POLLS_REQUEST:
            return  {
                ...state,
                loading: true,
            }
        case FETCH_POLLS_SUCCESS:
            return  {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_POLLS_FAILURE:
            return  {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            }

        // Reducer Delete Poll

        case DELETE_POLL_SUCCESS:
            const id = action.payload
            const newList = state.data.filter(val => val.id != id)
            return  {
                ...state,
                loading: false,
                data: newList,
                error: '',
            }

        case DELETE_POLL_FAILURE:
            
            return  {
                ...state,
                loading: true,
                error: action.payload    
            }
        // add a poll

        case ADD_POLL_SUCCESS:
            const poll = action.payload
            const newlist = [...state.data]
            newList.push(poll)
            return  {
                ...state,
                loading: false,
                data: newlist,
                error: '',
            }

        case ADD_POLL_FAILURE:
            return  {
                ...state,
                loading: true,
                error: action.payload    
            }

        default:
            return state;
    }
    
}


export default pollsReducers;