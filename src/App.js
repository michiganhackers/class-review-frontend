import React, { Component } from 'react';
import { RouterGroup } from './containers/routes.jsx';
import { Provider } from 'react-redux';
import store from "./store.js"
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <RouterGroup />
                </Provider>
            </div>
        );
    }
}

export default App;
