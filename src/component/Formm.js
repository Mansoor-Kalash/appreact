import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form } from 'react-bootstrap/';


class Formm extends React.Component {
submitDataForm = async (e) => {
        e.preventDefault();

       
         this.props.han(e.target.n.value);
          
    
}
render() {
   


    return (
<Form onSubmit={this.submitDataForm}>
<Form.Select aria-label="Default select example" name='n' >
  <option>Open this select menu</option>
  <option value='5'>All</option>
  <option value='1'>One</option>
  <option value='2'>Two</option>
  <option value='3'>Three</option>
  <option value='100' >wow</option>

</Form.Select>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
    );
}
}

export default Formm;
