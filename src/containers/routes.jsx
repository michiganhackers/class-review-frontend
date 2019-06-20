import React from 'react';
import LoginPage from './pages/login_page.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CoursePage from './pages/course_page.jsx';
import ReviewForm from './pages/review_form.jsx';

const Home = () => null; // TODO: replace with real homepage


export const RouterGroup = () => (
    <Router>
        <React.Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/course" component={CoursePage}/>
            <Route path="/yote" component={ReviewForm}/>
            <Route exact path="/login" component={LoginPage}/>
        </React.Fragment>
    </Router>  
);
