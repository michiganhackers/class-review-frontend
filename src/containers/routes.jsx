import React from 'react';
import LoginPage from './pages/login_page.jsx'
import ReviewPage from './pages/review_page.jsx';


import { BrowserRouter as Router, Route } from "react-router-dom";
import CoursePage from './pages/course_page.jsx';
import SearchBar from '../global_components/searchbar.jsx'

const Home = () => null; // TODO: replace with real homepage

export const RouterGroup = () => (
    <Router>
        <React.Fragment>
            <SearchBar/>
            <Route exact path="/" component={Home}/>
            <Route path="/course" component={CoursePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/reviews" component={ReviewPage}/>
        </React.Fragment>
    </Router>  
);
