import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import ClassPage from './pages/class_page.jsx';

const Home = () => null; // TODO: replace with real homepage


export const RouterGroup = () => (
    <Router>
        <React.Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/class" component={ClassPage}/>
        </React.Fragment>
    </Router>  
);