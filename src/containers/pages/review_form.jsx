import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col, Container, ProgressBar, Image} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import defaultPicture from '../icons/default_profile_picture.png';
//import ReadMoreReact from 'read-more-react';
import ReadMoreAndLess from 'react-read-more-less';
import {MdThumbUp, MdThumbDown} from "react-icons/md";
import { number } from 'prop-types';
import './review_form.css';

const renderRatingBar = props => (
    <StarRatings
    rating={props}
    starDimension="25px"
    starSpacing="1px"
    starRatedColor="#1FB6FF">
    </StarRatings>)                           
const renderSemester = props => { return (<div>Semester: {props}</div>) }
const renderProfessor = props => { return (<div>Professor: {props}</div>)}
const renderDate = props => { return (<div>Date: {props}</div>)}    
// const renderText = props => { return (<div>{props}</div>)}
// ^ Might be unnecssary later since we're suing ReadMoreAndLess
const renderPicture = props => {
    //props is bool value
    //name needs to be redefined (import umich pic)\ 
    var name = "yeet"; 
    if (props){
        return name;
    }
    else{
        return <Image src={defaultPicture} fluid roundedCircle />
    }
}
const renderTextBox = props => (
    <ReadMoreAndLess
        className="read-more-content"
        charLimit={300}
        readMoreText="Read More"
        readLessText="Read Less"
    >
        {props}
    </ReadMoreAndLess>
)

const renderThumbs = (upNumThumbs, downNumThumbs) =>{
    return (
        <div> <MdThumbUp/> {upNumThumbs} <span> &nbsp; </span>  <MdThumbDown/> {downNumThumbs}</div>
    )
}

export default class ReviewForm extends React.Component {
    render(){
        return(
            <Container>
                <div className = "border border-secondary m-3 py-3 px-5 rounded-lg bg-light">
                    <Row>
                        <Col className = "my-auto">{renderSemester("Fall 2020")}</Col>
                        <Col className = "my-auto">{renderProfessor("Dr. Yeet")}</Col>
                        <Col className = "my-auto">{renderDate("7/12")}</Col>
                        <Col xs={3} md={1} className = "my-auto">{renderPicture(false)}</Col>
                    </Row>
                    <Row>
                        <Col s = {5} md={5} lg={4}>
                            <Row>                               
                                <Col xs={4} s= {4} md={3} align="left" className = "my-auto mx-auto">Overall</Col>
                                <Col xs={8} s= {8} md={9} align="left" className = "my-auto mx-auto">{renderRatingBar(3)}</Col>
                            </Row>
                            <Row>
                                
                                <Col xs={4} s= {4} md={3} align="left" className = "my-auto mx-auto">Interest</Col>
                                <Col xs={8} s= {8} md={9} align="left" className = "my-auto mx-auto">{renderRatingBar(4.4)}</Col>					
                            </Row>
                            <Row>     
                                <Col xs={4} s= {4} md={3} align="left" className = "my-auto mx-auto">Difficulty</Col>
                                <Col xs={8} s= {8} md={9} align="left" className = "my-auto mx-auto">{renderRatingBar(4.8)}</Col>					
                            </Row>
                            <Row>
                                <Col  md={2}></Col>
                                <Col xs = "auto" md="auto" align = "right">{renderThumbs(14, 1)}</Col> 
                            </Row>
                        </Col>   
                            <Col s = {7} md={7} lg={8} className="border rounded-lg px-2 py-4 mt-2 colored-textbox">
                            {renderTextBox("This is the yeetiest text you will read for a while, so read it and enjoy. I can't believe I have to type so much to get this to work, and this is not formatted the best because I do not know how to do multi-line text in javascript, but all is well and I reaaaaaaaaaally hope this works. blah blah blah blah balh balhb ajdkas ajsdklsajdkl aksdjsakl askdjsakl dsajkdj dsakjdlk yeet why is this not working pls work yeet yeet yeet yeet yeet ")}     
                        </Col>
                    </Row>
                
                </div>   
            </Container>
            // <>
            //  <div>
            //      <div className="overallRating">
            //          {this.renderRatingsBar(9000)}
            //          {/* {this.renderRatingsBar(this.props.reviewData.rating)}; */}
            //      </div> 
            //      <div className="difficultyRating">
            //          {this.renderRatingsBar(5)}
            //          {/* {this.renderRatingsBar(this.props.reviewData.difficulty)}; */}
            //      </div>
            //      <div className="interestRating">
            //          {this.renderRatingsBar(4.4)}
            //          {/* {this.renderRatingsBar(this.props.reviewData.interest)}; */}
            //      </div>
            //      <div className="date">
            //          <Date value = "YEEEEEEEEEEEEEEEt"/>
            //          {/* {this.renderAnonymous(this.props.reviewData.anonymous)} */}
            //          {/* <Date value = {this.props.reviewData.date}/> */}
            //      </div>
            //      <div className="anonymous">
            //          {this.renderAnonymous("urmomLUL")}
            //      </div>
            //      <div className = "text">
            //          {this.renderText("Ppppppp")}
            //          {/* {this.renderText(this.props.reviewData.text)} */}
            //      </div>
            //      <div className = "semester">
            //          <Semester value = {"nidhiuewhkfbusidhionlkghireuhfk"}/>
            //          {/* <Semester value = {this.props.reviewData.semester}/> */}
            //      </div>
            //      <div className = "professor">
            //          <Professor value = {"Dabbbb"}/>
            //          {/* <Professor value = {this.props.reviewData.professorName}/> */}
            //      </div> 
            //  </div>
            // </>
        )
    }
}
//React bootstrap