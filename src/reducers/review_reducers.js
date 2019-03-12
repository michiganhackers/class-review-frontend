import { combineReducers } from 'redux';
import { reviewTypes } from './../constants/action_types';

function getReviewById(state = {}, action) {
    switch (action.type) {
        case reviewTypes.GET_REVIEW_BY_ID_REQUEST: 
            return {
                ...state,
                error: null
            }
        case reviewTypes.GET_REVIEW_BY_ID_SUCCESS: 
            return {
                ...state,
                error: null,
                data: action.data // TODO: perhaps change
            }
        
        case reviewTypes.GET_REVIEW_BY_ID_FAILURE: 
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}

const reviewReducers = combineReducers({
    getReviewById
})

export default reviewReducers;
