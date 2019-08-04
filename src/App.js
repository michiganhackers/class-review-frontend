import React, { Component } from 'react';
import { RouterGroup } from './containers/routes.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducers.js';
import rootSaga from './sagas/sagas.js';
import { Provider } from 'react-redux';
import './App.css';

// Initialize redux store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <RouterGroup />
                </Provider>
            </div>
        );
    }
}

export default App;
