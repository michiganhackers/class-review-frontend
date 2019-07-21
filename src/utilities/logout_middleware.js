import { loginTypes } from './../constants/action_types';
import LoginActions from '../actions/login_actions.js';
import logoutUser from './logout_user.js';

const FAILURE = "_FAILURE";
const LOGOUT_CODES = [401, 403];

const DUD_ACTION = {
    type: "DUD_ACTION"
}

const logoutMiddleware = () => next => action => {
    const type = action.type;
    if (loginTypes.includes(type)) {
        return next(action);
    }
    if (type.substr(type.lastIndexOf('_')) !== FAILURE) {
        return next(action);
    }
    if (action.error && LOGOUT_CODES.includes(action.error.status)) {
        logoutUser(() => {
            next(LoginActions.clearProfileInfo());
        });
        // This will never fire. It's only here to constently match the signature of Redux middleware.
        return next(DUD_ACTION);
    }


}

export default logoutMiddleware;