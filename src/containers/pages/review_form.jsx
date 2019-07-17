import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col, Container, ProgressBar, Image} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import defaultPicture from '../icons/default_profile_picture.png';
//import ReadMoreReact from 'read-more-react';
import ReadMoreAndLess from 'react-read-more-less';

const renderRatingBar = props => (
    <StarRatings
    rating={props}
    starDimension="25px"
    starSpacing="2px"
    starRatedColor="#1FB6FF">
    </StarRatings>)                           
const renderSemester = props => { return (<div>Semester: {props}</div>) }
const renderProfessor = props => { return (<div>Professor: {props}</div>)}
const renderDate = props => { return (<div>Date: {props}</div>)}    
// const renderText = props => { return (<div>{props}</div>)}
// ^ Might be unnecssary later since we're suing ReadMoreAndLess
const renderAnonymous = props => {
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
export default class ReviewForm extends React.Component {
    render(){
        return(
            <Container>
				<Row>
					<Col>{renderSemester("Fall 2020")}</Col>
					<Col>{renderProfessor("Dr. Yeet")}</Col>
					<Col>{renderDate("7/12")}</Col>
					<Col md = {1}>{renderAnonymous(false)}</Col>
				</Row>
                <Row>
                    <Col>
                        <Row>
                            <div>Overall</div>
                            <div>{renderRatingBar(3)}</div>
                        </Row>
                        <Row>
                            <div>Interest</div>
                            <div>{renderRatingBar(4.4)}</div>					
                        </Row>
                        <Row>
                            <div>Difficulty</div>
                            <div>{renderRatingBar(4.8)}</div>					
                        </Row>
                    </Col>   
                    <Col>
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