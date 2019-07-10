import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col, Container, ProgressBar} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const RatingBar = props => (<StarRatings rating={props}
                            starDimension="25px"
                            starSpacing="2px">
                            </StarRatings>)                           
const Semester = props => { return (<div>Semester: {props}</div>) }
const Professor = props => { return (<div>Professor: {props}</div>)}
const Date = props => { return (<div>Date: {props}</div>)}
const Text = props => { return (<div>{props}</div>)}
const renderAnonymous = props => { var name = "anonymous"; return {props} ? name : "DabYEEET" }

export default class ReviewForm extends React.Component {
    render(){
        return(
            <Container>
				<Row>
                    <Col></Col>
					<Col>{Semester("Fall 2020")}</Col>
					<Col>{Professor("James Juett")}</Col>
					<Col>{Date("09/02/2019")}</Col>
					<Col>Icon</Col>
				</Row>

				<Row></Row>

				<Row>
					<Col>Overall</Col>
					<Col>{RatingBar(3)}</Col>					
				</Row>

				<Row>
					<Col>Interest</Col>
					<Col>{RatingBar(4.4)}</Col>					
				</Row>

				<Row>
					<Col>Difficulty</Col>
					<Col>{RatingBar(4.8)}</Col>					
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