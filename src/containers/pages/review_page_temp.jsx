import React from 'react';
import {Bootstrap, Row, Col, Container, Image} from 'react-bootstrap';
import './review_form.css'
const renderTitle = props => {return(<h1>{props}</h1>);}
const renderDescription = props =>{
    return(
        <div className = "border rounded-lg px-auto py-auto">
            {props}
        </div>
    );
}
export default class ReviewPage extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    {renderTitle("YEET 101")}    
                </Row>
                <Row>
                    <Col>
                    {renderDescription("This class focuses on the fundamental of the term 'yeet'. No one knows where it actually came from, but one thing is certain-- its arrival was inevitable, but glorious. Now children, teenagers, adults, and all others can have their ears blessed with the gentle, sensuous, and fresh sound created by the combination of the tones and mouth gestures involved in pronounce the word")}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}