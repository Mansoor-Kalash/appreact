import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: true

  //   };

  // }
  // handleClose = () => {
  //   this.setState = ({
  //     show: false
  //   });
  // }
  
  render() {


    return (
      <>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.ele.ele.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body> <img src={this.props.ele.ele.image_url} className="img-fluid" alt="img" width="1080" /> </Modal.Body>
          <Modal.Footer>{this.props.ele.ele.description}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
