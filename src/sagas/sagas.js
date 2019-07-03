import { fork } from 'redux-saga/effects';
import {
    getReviewByIdFlow
} from './review_sagas.js';
import {
    getCourseByIdFlow
} from './course_sagas.js'

// Sagas
export default function* rootSaga() {
    yield fork(getReviewByIdFlow);
    yield fork(getCourseByIdFlow);
}