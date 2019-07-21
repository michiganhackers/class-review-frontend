import React from 'react';
import { connect } from 'react-redux';
import LoginButton from './login_button.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {
      navOpen: false,
    };
    this.drawSearchResults = this.drawSearchResults.bind(this);
  }

  drawSearchResults(){
    const results = [];//[{title: 'EECS 280', id: '12345'}, {title: 'EECS 281', id: '23456'}, {title: 'STATS 250', id: '34567'}];
    const searchResults = results.map(course => {
      return (<Dropdown.Item key={course.id.toString()} href={'/course/' + course.id}>{course.title}</Dropdown.Item>);
    });
    const Results = styled(Dropdown.Menu)`
      position: absolute;
      width: 100%;
      margin-top: 0px;
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
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <MediaQuery minDeviceWidth={992}>
            <Form className='position-relative' inline>
              <FormControl type='text' placeholder='Search for a class' className='w-100' />
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
                <FormControl type='text' placeholder='Search for a class' className='w-100' />
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
})

const mapDispatchToProps = dispatch => ({
})  
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);