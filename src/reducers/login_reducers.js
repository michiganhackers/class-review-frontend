import { combineReducers } from 'redux';
import { loginTypes } from './../constants/action_types';

function setLoginTokens(state = {}, action) {
    switch (action.type) {
        case loginTypes.SET_LOGIN_TOKENS_REQUEST: 
            return {
                ...state,
                error: null,
                tokens: action.tokens
            }
        case loginTypes.SET_LOGIN_TOKENS_FAILURE:
            return {
                ...state,
                tokens: null,
                error: action.error
            }
        default:
            return state
    }
}

function profileInfo(state = {}, action){
    switch (action.type) {
        case loginTypes.SET_PROFILE_INFO:
            return {
                ...state,
                error: null,
                profile: action.profile
            }
        case loginTypes.CLEAR_PROFILE_INFO:
            return {
                ...state,
                error: null,
                profile: null
            }
        default:
            return state
    }
}


const loginReducers = combineReducers({
    setLoginTokens,
    profileInfo
})

export default loginReducers;