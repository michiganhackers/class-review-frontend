import { combineReducers } from 'redux';
import { courseTypes } from '../constants/action_types';

function getCourseById(state = {}, action) {
    switch (action.type) {
        case courseTypes.GET_COURSE_BY_ID_REQUEST: 
            return {
                ...state,
                error: null
            }
        case courseTypes.GET_COURSE_BY_ID_SUCCESS: 
            return {
                ...state,
                error: null,
                courseData: action.courseData
            }
        
        case courseTypes.GET_COURSE_BY_ID_FAILURE: 
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}

const courseReducers = combineReducers({
    getCourseById
})

export default courseReducers;
