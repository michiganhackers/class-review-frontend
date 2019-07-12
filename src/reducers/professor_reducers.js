import { combineReducers } from 'redux';
import { professorTypes } from './../constants/action_types';

function getAllProfessors(state = {}, action) {
    switch (action.type) {
        case professorTypes.GET_ALL_PROFESSORS_REQUEST: 
            return {
                ...state,
                error: null
            }
        case professorTypes.GET_ALL_PROFESSORS_SUCCESS: 
            return {
                ...state,
                error: null,
                professors: action.professors
            }
        
        case professorTypes.GET_ALL_PROFESSORS_FAILURE: 
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}

const reviewReducers = combineReducers({
    getAllProfessors
})

export default reviewReducers;
