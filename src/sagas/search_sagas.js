
import { Get } from '../utilities/api';
import { searchTypes } from '../constants/action_types';
import { pathSegments } from '../constants/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SearchActions } from '../actions/search_actions'
import Url from '../utilities/url.js';


function* getSearchResults(action) {  
    const url = new Url().path(pathSegments.SEARCH).queryStrings({query: action.query})            
    const { json, error } = yield call(Get, url); // Object destructuring
    if (error) {
        // Dispatch redux action
        yield put(SearchActions.getSearchResultsFailure(error));
    }
    else {
        // Dispatch redux action
        yield put(SearchActions.getSearchResultsSuccess(json));
    }
}

export function* getSearchResultsFlow() {
    yield takeLatest(searchTypes.GET_SEARCH_RESULTS_REQUEST, getSearchResults);
}
