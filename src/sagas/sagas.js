import { fork } from 'redux-saga/effects';
import {
    getReviewByIdFlow

} from './review_sagas.js';

// Sagas
export default function* rootSaga() {
    yield [
        fork(getReviewByIdFlow)
    ]
}