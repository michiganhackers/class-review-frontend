import React from 'react';
import { connect } from 'react-redux';
import { ReviewActions } from '../../actions/review_actions.js';

class ReviewPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getReviewById(); // Example, TODO: replace with real call
    }

    render() {
        return (
            <span>Placeholder</span>
        )
    }
}

const mapStateToProps = state => ({
    ...state // TODO: grab appropriate data from state
})

const mapDispatchToProps = () => ({
    getReviewById: ReviewActions.getReviewByIdRequest
    // (Request) action creators go here
})

//YEET


export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);