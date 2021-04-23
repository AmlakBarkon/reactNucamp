import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
 import { Link } from 'react-router-dom';
import MyApp from './Players';

function RenderPartner({partner}){

 if(partner){ 
      
     return(
       
       <>
      
           <Media  object width="150"src={partner.image} alt={partner.name}/>
          <Media >
          <Media heading>
          <p className="media-title"> {partner.name}</p>
          </Media>
          <Media-Title ><p className="media-title">{partner.description}</p></Media-Title>
         </Media>
       
      
       
         </>
     )

 }
 return(<div></div>)
}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
             <div className="col-12 col-sm-6 mt-4">
                <Media tag="li"key={partner.id} >
                    <RenderPartner partner={partner}/>
                </Media>
            </div>
          
         );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3 className="text-white">Our Mission</h3>
                    <p className="text-white">Completely personalized, stellar guides, fabulous recommendations, unforgettable trips,” is how one T+L reader summed up the Ker & Downey experience. The company has been serving travelers for more than 50 years, and though it’s especially known for safaris, the advisors are adept at planning custom trips with a “wow” factor anywhere in the world. Little wonder that many of the readers who rated it so highly are repeat customers, especially for landmark celebration</p>
                </div>
               
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>OUR ENVENTS</h3></CardHeader>
                        <CardBody>
                        <MyApp/>
                        </CardBody>
                    </Card>
                    
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="text-white">Ethiopia Addis Ababa Hotels</h5>
                </div>                      
            </div>
              <div className="row">
                      <Media list>
                          {partners}
                        </Media>
             </div>               
       </div>
    );
}

export default About;