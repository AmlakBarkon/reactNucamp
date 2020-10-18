import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';
class CampsiteInfo extends Component {
   renderComments(comments){
       console.log("these are comments ",comments[0].text)  
    if(comments){
        return(
            <div  className="col-md-5 m-1">
                <h4>Comments</h4>
                {
                    comments.map(comment=>{
                      return (
                      <div key={comment.id}>
                          {comment.text}
                          <p>{comment.author}
                          {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                     </div>
                      )
                    })
                }
            </div>
        )
    }
    return <div></div>
   }
    renderCampsite(campsite){  
        return(
            <div className="col-md-5 m-1">
            <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    render() { 
       
        if(this.props.campsite){
            // console.log("this is campsiteinfo,", this.props.campsite.comments)
            return(
                <div className="container">
                    <div className="row">                     
                             {this.renderCampsite(this.props.campsite)}                                          
                             {this.renderComments(this.props.campsite.comments)}                                                              
                    </div>
                </div>               
            )
        }
        return ( 
            <div></div>
         );

    }
   
}
 
export default CampsiteInfo;