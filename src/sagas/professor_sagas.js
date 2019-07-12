
import { Get } from '../utilities/api';
import { professorTypes } from '../constants/action_types';
import { pathSegments } from '../constants/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ProfessorActions } from '../actions/professor_actions'
import Url from '../utilities/url.js';

function* getAllProfessors(action) {
    const url = new Url().pathSegment(pathSegments.PROFESSOR).pathSegment(pathSegments.NAMES);
    const { json, error } = yield call(Get, url); // Object destructuring
    if (error) {
        // Dispatch redux action
        yield put(ProfessorActions.getAllProfessorsFailure(error)); // TODO: determine what should go here
    }
    else {
        // Dispatch redux action
        yield put(ProfessorActions.getAllProfessorsSuccess(json)); // TODO: see above
    }    
}

export function* getAllProfessorsFlow() {
    yield takeLatest(professorTypes.GET_ALL_PROFESSORS_REQUEST, getAllProfessors);
}
