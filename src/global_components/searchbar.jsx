import React from 'react';
import { connect } from 'react-redux';
import LoginButton from './login_button.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';


class SearchBar extends React.Component{
  constructor(){
    super();
    this.drawSearchResults = this.drawSearchResults.bind(this);
  }

  drawSearchResults(){
    const results = [{title: 'EECS 280', id: '23053'}, {title: 'EECS 281', id: '34394'}, {title: 'STATS 250', id: '29395'}];
    const searchResults = results.map(course => {
      return (<Button key={course.id.toString()} variant="outline-dark" href={"/course/" + course.id} block>{course.title}</Button>);
    });
    const ResultsContainer = styled.div`
      :empty {
        display: none;
      }
    `;
    return(
      <ResultsContainer>
        {searchResults}
      </ResultsContainer>
    );
  }

  render() {
      return (
        <Navbar bg="light" variant="light" className="justify-content-around" >
        <Navbar.Brand href="/home">WolverineRank</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search for a class" className="mr-md-2" />
          {this.drawSearchResults()}
        </Form>
        <LoginButton/>
      </Navbar>
      );
  }
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})  
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);