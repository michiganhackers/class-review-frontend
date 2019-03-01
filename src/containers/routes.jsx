import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => null; // TODO: replace with real homepage

export const RouterGroup = () => (
    <Router>
        <React.Fragment>
            <Route exact path="/" component={Home}/>
        </React.Fragment>
    </Router>  
);