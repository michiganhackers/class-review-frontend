import React from 'react';
import { Bootstrap, Row, Col, Container, Image } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import ReviewForm from './review_form.jsx'
import './review_form.css'
const renderTitle = props => { return (<h1>{props}</h1>); }
const renderDescription = props => {
    return (
        <div className="border rounded-lg px-auto py-auto enlargen-text mx-auto my-auto">
            {props}
        </div>
    );
}
const renderRatingBar = (props) => {
    return (
        <div className="enlargen-text">
            <StarRatings
                rating={props}
                starDimension="40px"
                starSpacing="2px"
                starRatedColor="#ffcb05"
                className="py-auto">
            </StarRatings>
        </div>
    )
}
const renderReviews = props => {
    var rows = []
    for (var i = 0; i < props; i++) {
        rows.push(<ReviewForm />)
        rows.push(<div className="p-2"></div>)//white space    
    }
    return (
        <div className="p-5">{rows}</div>
    )
}
export default class ReviewPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    {renderTitle("YEET 101")}
                </Row>
                <Row>
                    <Col>
                        {renderDescription("This class focuses on the fundamental of the term 'yeet'. No one knows where it actually came from, but one thing is certain-- its arrival was inevitable, but glorious. Now children, teenagers, adults, and all others can have their ears blessed with the gentle, sensuous, and fresh sound created by the combination of the tones and mouth gestures involved in the pronounciation of the word")}
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={3} s={3} md={3} align="left" className="my-auto mx-auto">Overall</Col>
                            <Col xs={9} s={9} md={9} align="left" className="my-auto mx-auto">{renderRatingBar(3)}</Col>
                        </Row>
                        <Row>
                            <Col xs={3} s={3} md={3} align="left" className="my-auto mx-auto">Interest</Col>
                            <Col xs={9} s={9} md={9} align="left" className="my-auto mx-auto">{renderRatingBar(4.4)}</Col>
                        </Row>
                        <Row>
                            <Col xs={3} s={3} md={3} align="left" className="my-auto mx-auto">Difficulty</Col>
                            <Col xs={9} s={9} md={9} align="left" className="my-auto mx-auto">{renderRatingBar(4.8)}</Col>
                        </Row>
                        <Row>
                        <Col xs={3} s={3} md={3} align="left" className="my-auto mx-auto">Workload</Col>
                            <Col xs={9} s={9} md={9} align="left" className="my-auto mx-auto">{renderRatingBar(3.0)}</Col>
                        </Row>
{/* 
                        <Row>{renderRatingBar("Overall", 4.5)}</Row>
                        <Row>{renderRatingBar("Interest", 4.9)}</Row>
                        <Row>{renderRatingBar("Difficulty", 5)}</Row> */}
                    </Col>
                </Row>
                <Row>
                    {renderReviews(10)}
                </Row>
            </Container>
        )
    }
}