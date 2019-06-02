// Action creators for reviews go here
import { classTypes } from '../constants/action_types.js';

export const ClassActions = {

    getClassByIdRequest: id => {
        return {
            type: classTypes.GET_CLASS_BY_ID_REQUEST,
            id
        }
    },

    getClassByIdSuccess: classData => {
        return {
            type: classTypes.GET_CLASS_BY_ID_SUCCESS,
            classData
        }
    },

    getClassByIdFailure: error => {
        return {
            type: classTypes.GET_CLASS_BY_ID_FAILURE,
            error
        }
    }
    
}