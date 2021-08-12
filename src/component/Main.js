import React from 'react';
import hornData from "./hornData.json";
import HornedBeast from "./HornedBeast";
import Formm from "./Formm";



class Main extends React.Component {
  
  constructor(props) {
    super(props);
    let arr = hornData;
    this.state = {
    //  i:0,
      hurn: 5,
      cardPass:arr
      
    };
    console.log(this.state.hurn);
  }

han = (n) => {
  let nn=Number(n);

  this.setState ({
          hurn: nn,
          })
  console.log(this.state.hurn);

  let arr =[];

if (nn !==5) {
  

   hornData.find(element => {
       if (element.horns ===nn) {
         console.log(element.nn);
        arr.push(element);
        
      }  
        
 });
 console.log(arr);
 this.setState ({
  cardPass: arr,      
})


}

else {
   
 this.setState ({
          cardPass: hornData,
         
})
}

}

   
  render(){
    console.log(this.state.cardPass);
 
    return (
    <>
     <Formm han = {this.han}/>
      {this.state.cardPass.map((item, index) => {
        return (
          <>
      
          <HornedBeast
            //  key={index}
            // title={item.title}
            // img={item.image_url}
            // description={item.description}
            // keyword={item.keyword}
            // horns={item.horns}
            handling = {this.props.handling}
          cardPass={this.state}
            
          />
          </>
        );
      })}
    </>);
  }
}


export default Main;







