import React from 'react';
import { connect } from 'react-redux';
import { ReviewActions } from '../../actions/review_actions.js';

class ReviewPage extends React.Component {

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

const mapDispatchToProps = dispatch => ({
    getReviewById: id => dispatch(ReviewActions.getReviewByIdRequest(id))
    // (Request) action creators go here
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);