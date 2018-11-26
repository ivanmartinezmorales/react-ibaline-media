import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
const FormHeader = () => {
  return (
    <div className="py-2 justify-content-center">
      <h2 className="section-heading">Contact Us</h2>
    </div>
  );
};

const FormBody = () => {
  return (
    <div className="py-3 justify-content-center">
      <div className="row">
        <div className="col-md-6">
          <Input placeholder="Name" />
        </div>
        <div className="col-md-6" />
        <Input placeholder="Email Address" />
      </div>
      <div className="row">
        <Input placeholder="Company" />
      </div>
    </div>
  );
};

// const FormBody = () => {
//   return (
//     <div>
//       <Row>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="userName">Name</Label>
//             <Input
//               type="email"
//               name="email"
//               id="exampleEmail"
//               placeholder="with a placeholder"
//             />
//           </FormGroup>
//         </Col>
//       </Row>
//       <Col md={6}>
//         <FormGroup>
//           <Label for="examplePassword">Password</Label>
//           <Input
//             type="password"
//             name="password"
//             id="examplePassword"
//             placeholder="password placeholder"
//           />
//         </FormGroup>
//       </Col>
//     </div>
//   );
// };
class Contact extends Component {
  render() {
    return (
      <div className="py-3 justify-content-center">
        <FormHeader />
        <Form>
          <FormBody />
        </Form>
      </div>
    );
  }
}

export default Contact;
