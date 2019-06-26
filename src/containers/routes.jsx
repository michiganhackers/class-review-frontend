import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ClassPage from './pages/class_page.jsx';
// edited
import ReviewForm from './pages/review_form.jsx';
const Home = () => null; // TODO: replace with real homepage
export const RouterGroup = () => (
   <Router>
       <React.Fragment>
           <Route exact path="/" component={Home}/>
           {/* <Route path="/class" component={ClassPage}/> */}
           <Route path="/yote" component={ReviewForm}/>
       </React.Fragment>
   </Router>
);
