import { fork } from 'redux-saga/effects';
import {
    getReviewByIdFlow,
    postReviewFlow,
} from './review_sagas.js';
import {
    getCourseByIdFlow
} from './course_sagas.js'
import {
    getAllProfessorsFlow
} from './professor_sagas.js'

export default function* rootSaga() {
    // Review sagas
    yield fork(getReviewByIdFlow);
    yield fork(postReviewFlow);

    // Course sagas
    yield fork(getCourseByIdFlow);

    // Professor sagas
    yield fork(getAllProfessorsFlow);
}