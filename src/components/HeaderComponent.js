import React, { Component } from 'react';
import {Navbar, NavbarBrand,  Jumbotron } from 'reactstrap';
class Header extends Component {
    state = {  }
    render() { 
        return (
        <>
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1> NuCamp</h1>
                            <h2>a better way to camp</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
         </>
         );
    }
}
 
export default Header;
