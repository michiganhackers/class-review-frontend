import { combineReducers } from 'redux';
import { classTypes } from './../constants/action_types';

function getClassById(state = {}, action) {
    switch (action.type) {
        case classTypes.GET_CLASS_BY_ID_REQUEST: 
            return {
                ...state,
                error: null
            }
        case classTypes.GET_CLASS_BY_ID_SUCCESS: 
            return {
                ...state,
                error: null,
                classData: action.classData
            }
        
        case classTypes.GET_CLASS_BY_ID_FAILURE: 
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}

const classReducers = combineReducers({
    getClassById
})

export default classReducers;
