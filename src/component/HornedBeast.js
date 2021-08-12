import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import {Card,Button  } from "react-bootstrap/";
class HornedBeast extends React.Component{
    
      constructor(props){
        super(props)
        this.state = {
            numberOfLike: 0
        }
    }

     increaseNuOfLike = () => {
        console.log(this);

        this.setState({
            numberOfLike: this.state.numberOfLike + 1
        })
    }
     Click = () => {
    this.props.handling(this.props.title);
    

  }
    render(){
    
        return(
         

    <>
   <Card onClick={this.Click}   style={{ width: '18rem' , display: 'inline-block' }}>
                    <Card.Img  variant="top" src={this.props.cardPass.cardPass.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.cardPass.cardPass.title}</Card.Title>
                        <Card.Text >{this.props.cardPass.cardPass.description}</Card.Text>

                        <Card.Text>
                         Number of Pets = {this.state.numberOfLike} 👍
                        </Card.Text>
                        <Button onClick={this.increaseNuOfLike} variant="primary">voted</Button>
                    </Card.Body>
                </Card>

  </>
        )
    }
}

export default HornedBeast;