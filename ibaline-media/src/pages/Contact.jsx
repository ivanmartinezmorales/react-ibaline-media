import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const ContactHeader = () => {
  return (
    <div className="text-center col-md-12">
      <h2 className="section-heading text-uppercase">contact us</h2>

      <div className="row">
        <div className="mx-auto col-md-7">
          <p className="lead">
            Ready to launch your business in the right direction? Fill in the
            contact form below and we'll get right back to you.
          </p>

          <p className="lead">Email us directly at:</p>

          <a className="btn btn-link" href="mailto:example@email.com">
            info@salouaibaline.com
          </a>
        </div>
      </div>
    </div>
  );
};

const FormBody = () => {
  return (
    <section id="contact">
      <div className="py-3 text-center">
        <div className="container">
          <div className="row py-3">
            <ContactHeader />
          </div>
        </div>
      </div>

      <div className="container col-md-6">
        <div className="row">
          <div className="mx-auto p-0 col-lg-7">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    id="form27"
                    className="form-control rounded-0"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <input
                    id="form28"
                    className="form-control rounded-0"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  id="form29"
                  className="form-control rounded-0"
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <input
                  id="form29"
                  className="form-control rounded-0"
                  type="text"
                  placeholder="How'd you hear about us?"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form30"
                  className="form-control rounded-0"
                  rows="3"
                  placeholder="Your message"
                />
              </div>

              <Button outline color="primary" type="Submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

class Contact extends Component {
  render() {
    return (
      <div className="py-3 justify-content-center">
        <Form>
          <FormBody />
        </Form>
      </div>
    );
  }
}

export default Contact;
