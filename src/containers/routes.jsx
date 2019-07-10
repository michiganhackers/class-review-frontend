import React from 'react';
import LoginPage from './pages/login_page.jsx'
import ReviewPage from './pages/review_page.jsx';

import { BrowserRouter as Router, Route } from "react-router-dom";
import CoursePage from './pages/course_page.jsx';
import LoginButton from '../global_components/login_button';

const Home = () => null; // TODO: replace with real homepage


export const RouterGroup = () => (
    <Router>
        <React.Fragment>
            <LoginButton/>
            <Route exact path="/" component={Home}/>
            <Route path="/course" component={CoursePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/reviews" component={ReviewPage}/>
        </React.Fragment>
    </Router>  
);
