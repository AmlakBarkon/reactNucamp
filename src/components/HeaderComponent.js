import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler,Card,CardImg,CardBody,CardTitle,CardText, Collapse, NavItem, Jumbotron,Button,Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import {  Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    BigPlayButton,
    PlaybackRateMenuButton,
    VolumeMenuButton } from 'video-react';

function Vedio(props) {
    return (
                  
            <Player fluid="false" autoPlay="true"  playsinline poster="/assets/poster.png">
          
      <source  src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
           <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
        <BigPlayButton position="center" />
      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
       
        <TimeDivider order={4.2} />
        <BigPlayButton position="center" />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
                                                    
      
    );
  };
    

function CarouselHome(props){
console.log("carousel props", props.image)
    return(
      <div className="container fluid container-width">
          <div className="row">
              <div className="col-md-3 d-none d-block">
                  <div className="container">
                        <div className="row">
                            <div className="col-12 col-m-12">
                                
                                 <Card className="one">
                                    <CardImg src="./assets/images/Ethiopianplane.jpg" alt="plane"></CardImg>
                                        <CardBody>
                                            <CardTitle className="reserveHist" >RESERVATION</CardTitle>
                                            <CardText>
                                                <ul>
                                                    <li><a href="https://www.ethiopianairlines.com/aa"> Flight</a></li>
                                                    <li><a href="https://www.hyatt.com/en-US/hotel/ethiopia/hyatt-regency-addis-ababa/addra?&src=pfxeame_sem_pfx_search_google_mena_rooms_nb_ethiopia_fd_eng_pfx_search_google_mena_rooms_nb_city_addra_addis_ababa_ethiopian%20hotel%20addis%20ababa&mckv=s-dc_pcrid_462606703609_mtid_5297kx13790&gclid=Cj0KCQjwlvT8BRDeARIsAACRFiV3OvBZeSn0XVzjramRpmij2Ynl-_6W8rfnZjmjI6I0mwojHD47xJMaAvXiEALw_wcB&gclsrc=aw.ds">Hotels</a></li>
                                                    
                                                </ul>
                                            </CardText>
                                    </CardBody>
                                 </Card>
                            </div>
                            <div className="col-12 col-m-12 mt-4">
                                 <Card className="one">
                                    <CardImg src="./assets/images/nile.jpeg" alt="plane"></CardImg>
                                        <CardBody>
                                            <CardTitle className="reserveHist">HISTORY PLACES</CardTitle>
                                            <CardText>
                                                <ul>
                                                
                                                    <li><a href="https://youtu.be/S3G5ZklLkm0?t=20">Axum</a></li>
                                                    <li>Ert Ale</li>
                                                    <li>Fasiladas</li>
                                                    <li>Axum</li>
                                                    <li>Ert Ale</li>
                                                    <li>Fasiladas</li>
                                                    <li>Axum</li>
                                                    <li>Ert Ale</li>
                                                    <li>Fasiladas</li>
                                                </ul>
                                            </CardText> 
                                     </CardBody>
                                 </Card>
                              
                            </div>
                        </div>
                  </div>
                   
              </div>
              <div className="col-md-9 d-none d-sm-block">
                    <Carousel >
                        <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100 carousel-h "
                            src="./assets/images/camel.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption className="carousel-caption">
                            <h3>Fasil Castle</h3>
                            <p className="t">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img 
                            className="d-block w-100 carousel-h"
                            src="./assets/images/camel.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Axum B.C 300</h3>
                            <p className="t">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img 
                            className="d-block w-100 carousel-h"
                            src="./assets/images/Fasilides.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Fasildes</h3>
                            <p className="t">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img 
                            className="d-block w-100 carousel-h"
                            src="./assets/images/fasil2.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Fasildes</h3>
                            <p className="t">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img 
                            className="d-block w-100 carousel-h"
                            src="./assets/images/axum3.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Fasildes</h3>
                            <p className="t">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img 
                            className="d-block w-100 carousel-h"
                            src="./assets/images/Erta_Ale.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Erta Ale </h3>
                            <p className="t">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img 
                            className="d-block w-100 carousel-h"
                            src="./assets/images/Erta_Aleone.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Erta Ale </h3>
                            <p className="t">Erta Ala is 613 metres (2,011 ft) high, with one or sometimes two active lava lakes at the summit which occasionally overflow on the south side of the volcano.[1] It is notable for holding the longest-existing lava lake, present since the early years of the twentieth century (1906). Volcanoes with 
                            lava lakes are very rare: there are only eight in the world.[</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img 
                            className="d-block w-100 carousel-h"
                            src="./assets/images/betAbbaLibanos.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Erta Ale </h3>
                            <p className="t">Erta Ala is 613 metres (2,011 ft) high, with one or sometimes two active lava lakes at the summit which occasionally overflow on the south side of the volcano.[1] It is notable for holding the longest-existing lava lake, present since the early years of the twentieth century (1906). Volcanoes with 
                            lava lakes are very rare: there are only eight in the world.[</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
              </div>
             

          </div>
          
      </div>
            
       
    )
}
class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
         this.handleLogin = this.handleLogin.bind(this);
         this.toggleNav = this.toggleNav.bind(this);
         this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment>
               
                <Navbar className="bg-dark" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/s">
                            <h6>T&Tour</h6>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="navbar" /><p>Home</p> 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="navbar" /><p> Directory</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="navbar" /> <p>About</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="navbar" /> <p>Contact Us</p>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="navbar" /> <p>Login</p>
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                 <Vedio  />
                      <Jumbotron fluid className="d-none d-sm-block">
                         <h4 className="offset-3 logowelcome">WelCome To Ethiopia 
                         </h4>
                    </Jumbotron>
               
                <div className="container p-5">
                     <CarouselHome image={this.props}/> 
                   
                </div>
               
               
            </React.Fragment>
        );
    }
}

export default Header;