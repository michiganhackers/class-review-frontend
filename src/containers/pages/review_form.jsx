import React, { Component } from 'react';

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
		return <RatingBar value = {rating}/>
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
			<div>
				<div>yeet -> yote -> yought</div>
				<div className="overallRating">
					{this.renderRatingsBar(9000)}
					{/* {this.renderRatingsBar(this.props.reviewData.rating)}; */}
				</div> 
				<div className="difficultyRating">
					{this.renderRatingsBar(5)}
					{/* {this.renderRatingsBar(this.props.reviewData.difficulty)}; */}
				</div>
				<div className="interestRating">
					{this.renderRatingsBar(4.4)}
					{/* {this.renderRatingsBar(this.props.reviewData.interest)}; */}
				</div>
				<div className="date">
					<Date value = "YEEEEEEEEEEEEEEEt"/>
					{/* <Date value = {this.props.reviewData.date}/> */}
				</div>
				<div className="anonymous">
					{this.renderAnonymous("urmomLUL")}
					{/* {this.renderAnonymous(this.props.reviewData.anonymous)} */}
				</div>
				<div className = "text">
					{this.renderText("Ppppppp")}
					{/* {this.renderText(this.props.reviewData.text)} */}
				</div>
				<div className = "semester">
					<Semester value = {"nidhiuewhkfbusidhionlkghireuhfk"}/>
					{/* <Semester value = {this.props.reviewData.semester}/> */}
				</div>
				<div className = "professor">
					<Professor value = {"Dabbbb"}/>
					{/* <Professor value = {this.props.reviewData.professorName}/> */}
				</div> 
			</div>
		)
	}
}

//React bootstrap
{/* <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/> */}
