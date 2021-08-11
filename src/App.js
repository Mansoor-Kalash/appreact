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
      show: false,
      ele: []
    };
  }
  handling = (title) => {
    let selectedObject = hornData.find(element => {
      if (element.title === title) {
        this.setState = ({
          ele: element,
          show: false
 
        });
        
      }
      return element;
    });
    return selectedObject;
  }
  handleClose = () => {
    
    this.setState = ({
     
      show: false
    });
  }
  render() {
    return (
      <>
        <Header />
        <Main handling={this.handling} />
        <SelectedBeast ele = {this.element} handleClose={this.handleClose} show={this.state.show} />
        <Footer />
      </>
    );
  }
}
export default App;


  













