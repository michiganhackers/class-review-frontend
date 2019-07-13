
import { professorTypes } from '../constants/action_types.js';

export const ProfessorActions = {

    getAllProfessorsRequest: () => {
        return ({
            type: professorTypes.GET_ALL_PROFESSORS_REQUEST,
        })
    },

    getAllProfessorsSuccess: professors => {
        return {
            type: professorTypes.GET_ALL_PROFESSORS_SUCCESS,
            professors
        }
    },

    getAllProfessorsFailure: error => {
        return {
            type: professorTypes.GET_ALL_PROFESSORS_FAILURE,
            error
        }
    }
    
}