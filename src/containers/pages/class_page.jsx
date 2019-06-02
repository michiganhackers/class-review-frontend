import React from 'react';
import { connect } from 'react-redux';
import { ClassActions } from '../../actions/class_actions.js';
import styled from 'styled-components';


const ClassName = styled.h1`
    font-size: 30vh;
`

class ClassPage extends React.Component {
    constructor() {
        super();
        this.getClassId = this.getClassId.bind(this);
    }

    getClassId() {
        const pathName = this.props.location.pathname;
        return parseInt(pathName.substring(pathName.lastIndexOf('/') + 1)); // extract the id, which is after the final forwardslash of the path
    }

    componentDidMount() {
        this.props.getClassById(this.getClassId());
    }

    render() {
        return (
            <div className='class-page'>
            <ClassName>{this.props.classData ? this.props.classData.name : 'NOTHING YET'}</ClassName>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    classData: (state.classReducers.getClassById.classData) ? state.classReducers.getClassById.classData : null,
    reviews: (state.classReducers.getClassById.classData) ? state.classReducers.getClassById.classData.reviews : null
})

const mapDispatchToProps = dispatch => ({
    getClassById: id => dispatch(ClassActions.getClassByIdRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassPage);