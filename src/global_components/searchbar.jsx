import React from 'react';
import { connect } from 'react-redux';
import LoginButton from './login_button.jsx';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { SearchActions } from '../actions/search_actions.js';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            navOpen: false,
        };
        this.drawSearchResults = this.drawSearchResults.bind(this);
        this.requestSearchResults = this.requestSearchResults.bind(this);
    }

    requestSearchResults(event) {
        this.props.getSearchResults(event.target.value);
    }

    drawSearchResults() {
        const ResultText = styled.p`
            margin-bottom: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        `;
        const searchResults = this.props.results.map(course => {
            return (
            <Dropdown.Item className="border-bottom" key={course.id.toString()} href={'/course/' + course.id}>
                <ResultText className="font-weight-bold"> {course.department + " " + course.number} </ResultText>
                <ResultText className="font-italic"> {course.title} </ResultText>
            </Dropdown.Item>);
        });
        const Results = styled(Dropdown.Menu)`
            position: absolute;
            width: 100%;
            margin-top: 0px;
            padding-bottom: 0px;
            :empty {
                display: none;
            }
        `;

        return(
            <Results show>
                {searchResults}
            </Results>
        );
    }

    render() {
        const logoUrl = process.env.PUBLIC_URL + '/logo.gif';
        return (
            <div>
                <Navbar bg='light' variant='light' className='justify-content-around' >
                    <Navbar.Brand href='/'>
                        <img
                            src={logoUrl}
                            width={30}
                            height={30}
                            className='d-inline-block align-top'
                            alt='WolverineRank logo'
                        />
                    </Navbar.Brand>
                    <MediaQuery minDeviceWidth={992}>
                        <Form className='position-relative w-50' inline>
                            <FormControl type='text' placeholder='Search for a class' className='w-100' onChange={this.requestSearchResults}/>
                            {this.drawSearchResults()}
                        </Form>
                        <LoginButton/>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={991}>
                        <Button
                            className='navbar-toggler-icon px-4 py-4'
                            onClick={() => this.setState({navOpen: !this.state.navOpen})}
                            aria-controls='collapsedNavbarContent' 
                            aria-expanded={this.state.navOpen}
                        />
                    </MediaQuery>
                </Navbar>
                <MediaQuery maxDeviceWidth={991}>
                    <Collapse in={this.state.navOpen}>
                        <div className='bg-light' id='collapsedNavbarContent'>
                            <Form className='position-relative' inline>
                                <FormControl type='text' placeholder='Search for a class' className='w-100 mx-2 my-2' onChange={this.requestSearchResults} />
                                {this.drawSearchResults()}
                            </Form>
                            <LoginButton/>
                        </div>
                    </Collapse>
                </MediaQuery>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    results: (state.searchReducers.getSearchResults.results) || [] 
})

const mapDispatchToProps = dispatch => ({
    getSearchResults: query => dispatch(SearchActions.getSearchResultsRequest(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
