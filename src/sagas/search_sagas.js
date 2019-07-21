
import { Get } from '../utilities/api';
import { searchTypes } from '../constants/action_types';
import { endpoints } from '../constants/endpoints';
import { call, put, takeLatest, actionChannel } from 'redux-saga/effects';
import { SearchActions } from '../actions/search_actions'

function* getSearchResults(action) {                                
    const { json, error } = yield call(Get, endpoints.GET_SEARCH_RESULTS, null, action.query); // Object destructuring
    if (error) {
        // Dispatch redux action
        yield put(SearchActions.getSearchResultsFailure(error));
    }
    else {
        // Dispatch redux action
        yield put(SearchActions.getSearchResultsSuccess(json));
    }
}

export function* getCourseByIdFlow() {
    yield takeLatest(searchTypes.GET_SEARCH_RESULTS_REQUEST, getSearchResults);
}
