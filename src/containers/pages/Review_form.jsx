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

class ReviewForm extends React.Component {
	renderRatingsBar(rating){
		return <RatingBar value = {rating}/>
	}
	renderAnonymous(anonymous){
		var name = "anonymous";
		if anonymous{
			return name;	
		}
		return reviewData.User.username; 
	}
	renderText(text){
		return <Text value = {text}/>
	}

	render{
		return(
			<div>
				<div className="overallRating">
					//change to class 
					{this.renderRatingsBar(this.props.reviewData.rating)};
				</div> 
				<div className="difficultyRating">
					{this.renderRatingsBar(this.props.reviewData.difficulty)};
				</div>
				<div className="interestRating">
					{this.renderRatingsBar(this.props.reviewData.interest)};
				</div>
				<div className="date">
					<Date value = {this.props.reviewData.date}/>
				</div>
				<div className="anonymous">
					{this.renderAnonymous(this.props.reviewData.anonymous)}
				</div>
				<div className = "text">
					{this.renderText(this.props.reviewData.text)}
				</div>
				<div className = "semester">
					<Semester value = {this.props.reviewData.semester}>
				</div>
				<div className = "professor">
					<Professor value = {this.props.reviewData.professorName}>
				</div> 
			</div>
		)
	}
}

//put styled components here