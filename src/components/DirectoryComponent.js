import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
import {Link}from 'react-router-dom'

class Directory extends Component {
    
    render() {
         console.log(this.props.campsites)       
        const directory = this.props.campsites.map((campsite,i) => {
            // console.log(` The ${i}- ${campsite.image}`);
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card >
                        <Link to={`/directory/${campsite.id}`}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                        <CardTitle className="text-center">{campsite.name} picture:{i+1}</CardTitle>                          
                        </CardImgOverlay>
                     </Link>
                    </Card>
                    
                </div>
            );
        });
       
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>               
                
            </div>
        );
    }
}

export default Directory;
