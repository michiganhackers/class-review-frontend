
import { Get } from '../utilities/api';
import { reviewTypes } from '../constants/action_types';
import { pathSegments } from '../constants/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ReviewActions } from '../actions/review_actions'
import Url from '../utilities/url.js';

function* getReviewById(action) {
    const url = new Url().pathSegment(pathSegments.REVIEW).pathParameter(action.id).queryParams();
    const { json, error } = yield call(Get, url); // Object destructuring
    if (error) {
        // Dispatch redux action
        yield put(ReviewActions.getReviewByIdFailure(error)); // TODO: determine what should go here
    }
    else {
        // Dispatch redux action
        yield put(ReviewActions.getReviewByIdSuccess(json)); // TODO: see above
    }
    
}

export function* getReviewByIdFlow() {
    yield takeLatest(reviewTypes.GET_REVIEW_BY_ID_REQUEST, getReviewById);
}
