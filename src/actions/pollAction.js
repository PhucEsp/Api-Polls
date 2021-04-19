import axios from "axios"
import PollsListApi from "../api/PollsListApi"
import { 
    ADD_POLL_FAILURE,
    ADD_POLL_SUCCESS,
    DELETE_POLL_REQUEST,
    DELETE_POLL_SUCCESS,
    FETCH_POLLS_FAILURE, 
    FETCH_POLLS_REQUEST, 
    FETCH_POLLS_SUCCESS 
} from "./typeAction"

const fetchPollsRequest = () => {
    return {
        type: FETCH_POLLS_REQUEST,
    }
}

const fetchPollsSuccess = (polls) => {
    return {
        type: FETCH_POLLS_SUCCESS,
        payload: polls,
    }
}

const fetchPollsFailure = (errors)=> {
    return {
        type: FETCH_POLLS_FAILURE,
        payload: errors,
    }
}


// action creator - DELETE POLL


const deletePollSuccess = (id) => {
    return {
        type: DELETE_POLL_SUCCESS,
        payload: id,
    }
}

const deletePollFailure = (errors)=> {
    return {
        type: FETCH_POLLS_FAILURE,
        payload: errors,
    }
}

// action creator - ADD A POLL

const addPollSuccess = (poll) => {
    return {
        type: ADD_POLL_SUCCESS,
        payload: poll,
    }
}

const addPollFailure = (error) => {
    return {
        type: ADD_POLL_FAILURE,
        payload: error,
    }
}

export const fetchPolls = () => {
    return (dispatch) => {
        dispatch(fetchPollsRequest());
            const fetchPollList = async () => {
                try {
                    const listPolls = await PollsListApi.getAll();
                    dispatch(fetchPollsSuccess(listPolls))
                } catch (error) {
                    dispatch(fetchPollsFailure(error))
                }
            }
            fetchPollList();
    }
}

export const deletePoll = (id) => {
    return (dispatch) => {
        try {
            PollsListApi.dedete(id);
            dispatch(deletePollSuccess(id));
        } catch (error) {
            dispatch(deletePollFailure(error))
        }
    }
}

export const addNewPoll = (poll) => {
    return (dispatch) => {
        try {
            PollsListApi.add(poll);
            dispatch(addPollSuccess(poll));
        } catch (error) {
            dispatch(addPollFailure(error))
        }
    }
}
