import React from 'react';
import Header from './component/Header';
import Main from './component/Main'; 
import Footer from './component/Footer';
import hornData from './component/hornData.json';
import SelectedBeast from './component/SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ele: {},
      show: false
      
    };
  }
  handling = (title) => {
    let selectedObject = hornData.find(element => {
      if (element.title === title) {
        
        return element;
      }
});
    this.setState ({
          ele: selectedObject,
          show: !this.state.show
})
    

  }
  handleClose = () => {
    
    this.setState ({
     
      show: false
    });
  }
  
  render() {
    
    // console.log(this.handling);
    return (
      <>
        <Header />
        <Main handling={this.handling} />
        <SelectedBeast ele = {this.state} handleClose={this.handleClose} show={this.state.show} />
        <Footer />
      </>
    );
  }
}
export default App;


  













