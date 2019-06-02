
import { Get } from '../utilities/api';
import { classTypes } from '../constants/action_types';
import { endpoints } from '../constants/endpoints';
import { call, put, takeLatest, actionChannel } from 'redux-saga/effects';
import { ClassActions } from '../actions/class_actions'

function* getClassById(action) {
    const { json, error } = { json: { 
                                        reviews: [{ name: "test1" }, {name: "test2"}],
                                        name: "EECS 281",
                                        id: action.id
                                    }, error: null}
                                
    // const { json, error } = yield call(Get, endpoints.GET_CLASS_BY_ID, null, action.id); // Object destructuring
    if (error) {
        // Dispatch redux action
        yield put(ClassActions.getClassByIdFailure(error));
    }
    else {
        // Dispatch redux action
        yield put(ClassActions.getClassByIdSuccess(json));
    }
}

export function* getClassByIdFlow() {
    yield takeLatest(classTypes.GET_CLASS_BY_ID_REQUEST, getClassById);
}
