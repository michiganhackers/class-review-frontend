// Reducers
import reviewReducers from './review_reducers.js';
import courseReducers from './course_reducers.js';
import loginReducers from './login_reducers.js';
import professorReducers from './professor_reducers.js';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    reviewReducers,
    courseReducers,
    loginReducers,
    professorReducers,
})

export default reducer;
