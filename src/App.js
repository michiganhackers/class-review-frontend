import React, { Component } from 'react';
import { RouterGroup } from './containers/routes.jsx';
import { Provider } from 'react-redux';
import store from "./store.js"
import SearchBar from './global_components/searchbar.jsx'

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <SearchBar/>
                    <RouterGroup />
                </Provider>
            </div>
        );
    }
}

export default App;
