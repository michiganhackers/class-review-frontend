import { searchTypes } from '../constants/action_types.js';

export const SearchActions = {

    getSearchResultsRequest: query => {
        return ({
            type: searchTypes.GET_SEARCH_RESULTS_REQUEST,
            query
        })
    },

    getSearchResultsSuccess: results => {
        return {
            type: searchTypes.GET_SEARCH_RESULTS_SUCCESS,
            results
        }
    },

    getSearchResultsFailure: error => {
        return {
            type: searchTypes.GET_SEARCH_RESULTS_FAILURE,
            error
        }
    }
    
}