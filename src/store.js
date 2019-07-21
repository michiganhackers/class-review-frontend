
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logoutMiddleware from './utilities/logout_middleware';
import reducer from './reducers/reducers.js';
import rootSaga from './sagas/sagas.js';

// Initialize redux store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logoutMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
