import React from 'react';
import {Bootstrap, Row, Col, Container, Image} from 'react-bootstrap';
import './review_form.css'
import StarRatings from 'react-star-ratings';
import ReviewForm from './review_form.jsx'
import bgImage from '../icons/review-bg.jpg'

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + bgImage + ")"
}
const renderBackground = () =>{
    return(
        <section style={sectionStyle}>
        </section>   
    );
}
const renderTitle = props => {return(<h1>{props}</h1>);}
const renderDescription = props =>{
    return(
        <div className = "border rounded-lg p-2 enlargen-text mx-auto my-auto class-description">
            {props}
        </div>
    );
}
const renderRatingBar = (lab, props) =>{ return(
    <div className = "enlargen-text">
        {lab}
        <StarRatings
            rating={props}
            starDimension="40px"
            starSpacing="2px"
            starRatedColor="#ffcb05"
            className = "py-auto">
        </StarRatings>
    </div>
    )  
}
const renderReviews = props =>{
    var rows = []
    for(var i = 0; i < props; i++){
        rows.push(<ReviewForm/>)
        rows.push(<div className = "p-2"></div>)//padding    
    }
    return(
        <div className = "p-5">{rows}</div>
    )
}
export default class ReviewPage extends React.Component{
    render(){
        return(
            <div className = "bg-image">
                <Container>
                    <Row>
                        {renderTitle("YEET 101")}    
                    </Row>
                    <Row>
                        <Col>
                        {renderDescription("This class focuses on the fundamental of the term 'yeet'. No one knows where it actually came from, but one thing is certain-- its arrival was inevitable, but glorious. Now children, teenagers, adults, and all others can have their ears blessed with the gentle, sensuous, and fresh sound created by the combination of the tones and mouth gestures involved in the pronounciation of the word")}
                        </Col>
                        <Col>
                            <Row>{renderRatingBar("Overall",4.5)}</Row>
                            <Row>{renderRatingBar("Interest",4.9)}</Row>
                            <Row>{renderRatingBar("Difficulty",5)}</Row>
                        </Col>
                    </Row>
                    <Row>
                        {renderReviews(10)}
                    </Row>
                </Container>
            </div>
        )
    }
}