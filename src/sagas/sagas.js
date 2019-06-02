import { fork } from 'redux-saga/effects';
import {
    getReviewByIdFlow
} from './review_sagas.js';
import {
    getClassByIdFlow
} from './class_sagas.js'

// Sagas
export default function* rootSaga() {
    yield fork(getReviewByIdFlow);
    yield fork(getClassByIdFlow);
}