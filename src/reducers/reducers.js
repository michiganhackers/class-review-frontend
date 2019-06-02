// Reducers
import reviewReducers from './review_reducers.js';
import classReducers from './class_reducers.js';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    reviewReducers,
    classReducers
})

export default reducer;