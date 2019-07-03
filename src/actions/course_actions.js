// Action creators for reviews go here
import { courseTypes } from '../constants/action_types.js';

export const CourseActions = {

    getCourseByIdRequest: id => {
        return {
            type: courseTypes.GET_COURSE_BY_ID_REQUEST,
            id
        }
    },

    getCourseByIdSuccess: courseData => {
        return {
            type: courseTypes.GET_COURSE_BY_ID_SUCCESS,
            courseData
        }
    },

    getCourseByIdFailure: error => {
        return {
            type: courseTypes.GET_COURSE_BY_ID_FAILURE,
            error
        }
    }
    
}