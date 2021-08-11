import React from 'react';
import hornData from "./hornData.json";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
     
//       hurn: all
      
//     };
//   }
// handling = (title) => {
//     let selectedObject = hornData.find(element => {
//       if (element.title === title) {
        
//         return element;
//       }
// });
//     this.setState ({
//           ele: selectedObject,
//           show: !this.state.show
// })
    

//   }
 
   
  render() {
      
    console.log(this.props);
    return (
      
      hornData.map((item, index) => {
        return (
          <HornedBeast
            key={index}
            title={item.title}
            img={item.image_url}
            description={item.description}
            keyword={item.keyword}
            horns={item.horns}
            handling = {this.props.handling}
            
          />
        );
      })
    );
  }
}


export default Main;







