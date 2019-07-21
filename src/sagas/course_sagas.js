
import { Get } from '../utilities/api';
import { courseTypes } from '../constants/action_types';
import { endpoints } from '../constants/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CourseActions } from '../actions/course_actions'

function* getCourseById(action) {
    const { json, error } = { json: { 
                                        reviews: [{ name: "test1" }, {name: "test2"}],
                                        name: "EECS 281",
                                        id: action.id
                                    }, error: null}
                                
    // const { json, error } = yield call(Get, endpoints.GET_COURSE_BY_ID, null, action.id); // Object destructuring
    if (error) {
        // Dispatch redux action
        yield put(CourseActions.getCourseByIdFailure(error));
    }
    else {
        // Dispatch redux action
        yield put(CourseActions.getCourseByIdSuccess(json));
    }
}

export function* getCourseByIdFlow() {
    yield takeLatest(courseTypes.GET_COURSE_BY_ID_REQUEST, getCourseById);
}
