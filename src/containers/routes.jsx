import React from 'react';
import ReviewPage from './pages/review_page.jsx';

import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => null; // TODO: replace with real homepage

export const RouterGroup = () => (
    <Router>
        <React.Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/reviews" component={ReviewPage}/>
        </React.Fragment>
    </Router>  
);