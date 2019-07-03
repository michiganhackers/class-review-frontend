import {loginTypes} from '../constants/action_types'

export const LoginActions = {

    setLoginTokens: tokens => {
        return ({
            type: loginTypes.SET_LOGIN_TOKENS,
            tokens
        })
    },

    setLoginTokensFailure: error => {
        return ({
            type: loginTypes.SET_LOGIN_TOKENS_FAILURE,
            error
        })
    },

    setProfileInfo: profile => {
        return ({
            type: loginTypes.SET_PROFILE_INFO,
            profile
        })
    },

    clearProfileInfo: () => {
        return({
            type: loginTypes.CLEAR_PROFILE_INFO
        })
    }
    
}