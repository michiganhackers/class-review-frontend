
import { Get } from '../utilities/api';
import { reviewTypes } from '../constants/action_types';
import { endpoints } from '../constants/endpoints';
import { call, put, takeLatest } from 'redux-saga';

function* getReviewById(action) {
    const { result, error } = yield call(Get, endpoints.GET_REVIEW_BY_ID, null, action.id);
    if (error) {
        // Dispatch redux action
        yield put({}) // TODO: determine what should go here
    }
    else {
        // Dispatch redux action
        yield put({}) // TODO: see above
    }
}

function* getReviewByIdFlow() {
    yield takeLatest(reviewTypes.GET_REVIEW_BY_ID_REQUEST, getReviewById);
}