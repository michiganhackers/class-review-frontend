// Action creators for reviews go here
import { reviewTypes } from '../constants/action_types.js';

// Example below:
export const ReviewActions = {

    getReviewByIdRequest: id => {
        return ({
            type: reviewTypes.GET_REVIEW_BY_ID_REQUEST,
            id
        })
    },

    getReviewByIdSuccess: review => {
        return {
            type: reviewTypes.GET_REVIEW_BY_ID_SUCCESS,
            review
        }
    },

    getReviewByIdFailure: error => {
        return {
            type: reviewTypes.GET_REVIEW_BY_ID_FAILURE,
            error
        }
    }
    
}