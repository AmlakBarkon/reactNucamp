import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Jumbotron } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'

function CarouselHome(props){
    console.log("carousel props", props.image)
        return(
          
                <Carousel >
                    <Carousel.Item interval={3500}>
                        
                        <img 
                        className="d-block w-100 carousel-h"
                        src="./assets/images/betAbbaLibanos.jpg"
                         alt="axum"/>
                        <Carousel.Caption className="carousel-caption">
                        <h3>History of the Rock-Cut Churches of Lalibela</h3>
                        <p className="text-white">
                        The town of Lalibela was originally known as Roha. It was renamed after the 12th-century King Lalibela, who commissioned these extraordinary churches. Lalibela was a member of the Zagwe dynasty, which had seized the Ethiopian throne around 1000 AD. When his rivals began to increase in power, Lalibela sought the support of 
                        the powerful Ethiopian Orthodox Church by building the churches in this small town.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img 
                        className="d-block w-100 carousel-h"
                        src="./assets/images/Bete_Emmanuel.jpg" 
                        alt="axum"
                       
                        />
                        <Carousel.Caption className="carousel-caption">
                        <h3>Bet Abba Libanos</h3>
                        <p className="picttranspat">Were it not for these extraordinary churches, 
                        Lalibela would almost certainly be well off the tourist radar. A dusty 
                        rural town nestled into rolling countryside, Lalibela only recently received 
                        electricity. It has few motorized vehicles, no gas stations and no paved 
                        streets. Isolated from the modern world, the town
                             goes about its business much as it has for several hundred years.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img 
                        className="d-block w-100 carousel-h"
                        src="./assets/images/lalibelaoneone.jpg"
                        alt="Third slide"
                        />
    
                        <Carousel.Caption>
                        <h3>Blue Nile Fall</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img 
                        className="d-block w-100 carousel-h"
                        src="./assets/images/Gondar-7.jpg"
                        alt="Third slide"
                        />
    
                        <Carousel.Caption>
                        <h3>Gondar Fasildes</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
           
        )
    }
function RenderCardone(props){
    return (
      
          <Card className="onepackage">       
              <p className=" offset-1">OUR PACKAGE INCLUDED THESE</p>              
          </Card>
       
     
    );

}

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody className="one">
                <CardTitle >{item.name}</CardTitle>
                <CardText  >{item.description}</CardText>
            </CardBody>
        </Card>
    );
}
function Home(props) {
    
    return (
      
      
        <div className="container">
                
            <div className="row  ">
                 <div className="col-md-12 m-1">
                    <RenderCardone  />
                </div>
                <div className="col-md-4 my-5">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md-4 my-5">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md-3 mt-5">
                    <RenderCard item={props.partner} />
                </div>
               
               
              
            </div>
            <Jumbotron className="welcomjumbo">
               <h3 className="welcome">Historical Monuments of Ethiopia</h3>
               <h4 className="welcome-p">Ethiopia has a tremendously rich history dating back to the dawn of humanity. Humans have been navigating life in Ethiopia for millennia with each civilisation leaving behind artifacts and clues
                that have helped us slowly unravel the origins of humanity and life on Earth.  </h4>
               <CarouselHome image={props}/>
               
           </Jumbotron>
        </div>
   
    );
}

export default Home;   