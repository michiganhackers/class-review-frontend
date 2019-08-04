import { combineReducers } from 'redux';
import { searchTypes } from './../constants/action_types';

function getSearchResults(state = {}, action) {
    switch (action.type) {
        case searchTypes.GET_SEARCH_RESULTS_REQUEST: 
            return {
                ...state,
                error: null
            }
        case searchTypes.GET_SEARCH_RESULTS_SUCCESS: 
            return {
                ...state,
                error: null,
                results: action.results
            }
        
        case searchTypes.GET_SEARCH_RESULTS_FAILURE: 
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}

const searchReducers = combineReducers({
    getSearchResults
})

export default searchReducers;
