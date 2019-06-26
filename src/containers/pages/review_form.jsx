import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col, Container, ProgressBar} from 'react-bootstrap';

class RatingBar extends React.Component{
    render(){
        return(
            <div>
                {this.props.value}
            </div>
        );
    }
}
class Date extends React.Component{
    render(){
        return(
            <div>
                Date: {this.props.value}  
            </div>
        );
    }
}
class Semester extends React.Component{
    render(){
        return(
            <div>
                Semester: {this.props.value}
            </div>
        );
    }
}
class Text extends React.Component{
    render(){
        return(
            <div>
                {this.props.value}
            </div>
        );
    }
}
class Professor extends React.Component{
    render(){
        return(
            <div>
                {this.props.value}      
            </div>
        );
    }
}
export default class ReviewForm extends React.Component {
    renderRatingsBar(rating){
		const progressInstance = <ProgressBar now={rating} label={`${rating}%`} />;
		return progressInstance;
	}
    renderAnonymous(anonymous){
        var name = "anonymous";
        if (anonymous){
            return name;    
        }
        return "Brian Yixinxxxxx"; 
        // return reviewData.User.username; 
    }
    renderText(text){
        return <Text value = {text}/>
    }
    render(){
        return(
            <Container>
				<Row>
					<Col>Semester</Col>
					<Col>Professor</Col>
					<Col>Date</Col>
					<Col>Icon</Col>
				</Row>

				<Row></Row>

				<Row>
					<Col>Overall</Col>
					<Col>{this.renderRatingsBar(70)}</Col>					
				</Row>

				<Row>
					<Col>Interest</Col>
					<Col>{this.renderRatingsBar(100)}</Col>					
				</Row>

				<Row>
					<Col>Difficulty</Col>
					<Col>{this.renderRatingsBar(30)}</Col>					
				</Row>

                <Row>
                    <Col>{this.renderRatingsBar(70)}</Col>
                    <Col>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>

                <Row>
                    <Col>1 of 3</Col>
                    <Col md={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
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