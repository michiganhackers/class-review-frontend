import React, { Component } from 'react';
import { RouterGroup } from './containers/routes.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <RouterGroup />
            </div>
        );
    }
}

export default App;
