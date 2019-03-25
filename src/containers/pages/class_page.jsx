import React from 'react';
import { connect } from 'react-redux';
import { ClassActions } from '../../actions/class_actions.js';

class ClassPage extends React.Component {
    constructor() {
        super();
    }

    getClassId() {
        pathName = this.props.location.pathname;
        return parseInt(pathName.substring(pathName.lastIndexOf('/'))); // extract the id, which is after the final forwardslash of the path
    }

    componentDidMount() {
        this.props.getClassById(getClassId());
    }

    render() {
        return (
            <span>Placeholder</span>
        )
    }
}

const mapStateToProps = state => ({
    classId: state.searchClassesByName.id,
    classData: state.getClassById.classData,
    reviews: state.getClassById.classData.reviews
})

const mapDispatchToProps = () => ({
    getClassById: ClassActions.getClassByIdRequest
    // (Request) action creators go here
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassPage);