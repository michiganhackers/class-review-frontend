// Reducers
import reviewReducers from './review_reducers.js';
import courseReducers from './course_reducers.js';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    reviewReducers,
    courseReducers
})

export default reducer;