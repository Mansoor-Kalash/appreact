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
   <Card    style={{ width: '18rem' , display: 'inline-block' }}>
                    <Card.Img onClick={this.Click}  variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title onClick={this.Click}>{this.props.title}</Card.Title>
                        <Card.Text >{this.props.description}</Card.Text>

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