import { combineReducers } from 'redux';
import { reviewTypes } from './../constants/action_types';

// Recall that your reducer structure defines the structure of the state in the Redux store.
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
                review: action.review
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


// Recall that your reducer structure defines the structure of the state in the Redux store.
function postReview(state = {}, action) {
    switch (action.type) {
        case reviewTypes.POST_REVIEW_REQUEST: 
            return {
                ...state,
                error: null,
                review: action.review,
            }
        case reviewTypes.POST_REVIEW_SUCCESS: 
            return {
                ...state,
                error: null,
            }
        case reviewTypes.POST_REVIEW_FAILURE: 
            return {
                ...state,
                error: action.error,
            }
        
        default:
            return state
    }
}

const reviewReducers = combineReducers({
    getReviewById,
    postReview,
})

export default reviewReducers;
