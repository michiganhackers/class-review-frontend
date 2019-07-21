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
    starDimension="20px"
    starSpacing="4px"
    starRatedColor="#1FB6FF">
    </StarRatings>)                           
const renderSemester = props => { return (<div>Semester: {props}</div>) }
const renderProfessor = props => { return (<div>Professor: {props}</div>)}
const renderDate = props => { return (<div>Date: {props}</div>)}    
// const renderText = props => { return (<div>{props}</div>)}
// ^ Might be unnecssary later since we're suing ReadMoreAndLess
const renderAvatar = props => {
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
        charLimit={200}
        readMoreText="Read More"
        readLessText="Read Less"
    >
        {props}
    </ReadMoreAndLess>
)
const renderThumbs = (up, numThumbs) =>{
    if(up){
        return(
            <div> <MdThumbUp/> {numThumbs}</div>
        )
    }else{
        return(
            <div><MdThumbDown/> {numThumbs}</div>
        )
    }
}
export default class ReviewForm extends React.Component {
    render(){
        return(
            <Container className="border border-secondary m-3 py-3 px-5 rounded-lg">
				<Row>
					<Col>{renderSemester("Fall 2020")}</Col>
					<Col>{renderProfessor("Dr. Yeet")}</Col>
					<Col>{renderDate("7/12")}</Col>
                    <Col xs={3} md={1}>{renderAvatar(false)}</Col>
				</Row>
                <Row>
                    <Col xs={5} md={5}>
                        <Row className="d-flex align-content-start">
                            <Col xs={0} md={2}></Col>
                            <Col xs={3} md={3} align="left" className="category-text">Overall</Col>
                            <Col xs={9} md={7} align="left">{renderRatingBar(3)}</Col>
                        </Row>
                        <Row className="d-flex align-content-start">
                            <Col xs={0} md={2}></Col>
                            <Col xs={3} md={3} align="left" className="category-text">Interest</Col>
                            <Col xs={7} md={7} align="left">{renderRatingBar(4.4)}</Col>					
                        </Row>
                        <Row className="d-flex align-content-start">
                            <Col md={2}></Col>
                            <Col md={3} align="left" className="category-text">Difficulty</Col>
                            <Col md={7} align="left">{renderRatingBar(4.8)}</Col>					
                        </Row>
                        <Row>
                            <Col md={2}></Col>
                            <Col md={2} align="right">{renderThumbs(true, 14)}</Col>
                            <Col md={2} align="left">{renderThumbs(false, 1)}</Col>
                             
                        </Row>
                    </Col>   
                    <Col md={7} className="category-text">
                        {renderTextBox("This is the yeetiest text you will read for a while, so read it and enjoy. I can't believe I have to type so much to get this to work, and this is not formatted the best because I do not know how to do multi-line text in javascript, but all is well and I reaaaaaaaaaally hope this works.")}     
                    </Col>
                </Row>
                

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