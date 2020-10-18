import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import  { CAMPSITES } from './shared/campsites';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      campsites: CAMPSITES
    }
  }
    render() { 
     
        return (
            <div className="App">
            
              <Jumbotron fluid>
                <h1>TRAVEL TO THE FIRST BLACK NATION </h1>
                <p>Ethiopia</p>
              </Jumbotron>
                <Navbar dark color="primary" className="sticky-top">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites}/>
            </div>
        );
    }
}

export default App;
