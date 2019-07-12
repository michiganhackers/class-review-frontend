import React from 'react';
import { connect } from 'react-redux';
import { CourseActions } from '../../actions/course_actions.js';
import { ProfessorActions } from '../../actions/professor_actions.js';
import styled from 'styled-components';


const CourseName = styled.h1`
    font-size: 30vh;
`

class CoursePage extends React.Component {
    constructor() {
        super();
        this.getCourseId = this.getCourseId.bind(this);
    }

    getCourseId() {
        const pathName = this.props.location.pathname;
        return parseInt(pathName.substring(pathName.lastIndexOf('/') + 1)); // extract the id, which is after the final forwardslash of the path
    }

    componentDidMount() {
        this.props.getCourseById(this.getCourseId());
        this.props.getAllProfessors();
    }
    
    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return (
            <div className='course-page'>
            <CourseName>{this.props.courseData ? this.props.courseData.name : 'NOTHING YET'}</CourseName>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    courseData: (state.courseReducers.getCourseById.courseData) ? state.courseReducers.getCourseById.courseData : null,
    reviews: (state.courseReducers.getCourseById.courseData) ? state.courseReducers.getCourseById.courseData.reviews : null
})

const mapDispatchToProps = dispatch => ({
    getCourseById: id => dispatch(CourseActions.getCourseByIdRequest(id)),
    getAllProfessors: () => dispatch(ProfessorActions.getAllProfessorsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);