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

        <Modal onClick={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> {this.props.ele} </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
