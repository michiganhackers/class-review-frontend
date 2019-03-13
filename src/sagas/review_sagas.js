
import { Get } from '../utilities/api';
import { reviewTypes } from '../constants/action_types';
import { endpoints } from '../constants/endpoints';
import { call, put, takeLatest } from 'redux-saga';
import { ReviewActions } from '../actions/review_actions'

function* getReviewById(action) {
    const { json, error } = yield call(Get, endpoints.GET_REVIEW_BY_ID, null, action.id); // Object destructuring
    if (error) {
        // Dispatch redux action
        yield put(ReviewActions.getReviewByIdFailure(error)); // TODO: determine what should go here
    }
    else {
        // Dispatch redux action
        yield put(ReviewActions.getReviewByIdSuccess(json)); // TODO: see above
    }
}

function* getReviewByIdFlow() {
    yield takeLatest(reviewTypes.GET_REVIEW_BY_ID_REQUEST, getReviewById);
}