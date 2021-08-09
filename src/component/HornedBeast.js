import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
   <div className = "horn">
    
  
   <img src= {this.props.imgUrl} alt= " horedBeasts" 
   />
   <h2>{this.props.title}</h2>
    <p>{this.props.desciption}</p>
   </div>
    
  
        )
    }
}

export default HornedBeast;