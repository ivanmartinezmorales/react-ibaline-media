import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const ContactHeader = () => {
  return (
    <div class="text-center col-md-12">
      <h2 class="section-heading text-uppercase">contact us</h2>

      <div class="row">
        <div class="mx-auto col-md-7">
          <p class="lead">
            Ready to launch your business in the right direction? Fill in the
            contact form below and we'll get right back to you.
          </p>

          <p class="lead">Email us directly at:</p>

          <a class="btn btn-link" href="mailto:example@email.com">
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
      <div class="py-3 text-center">
        <div class="container">
          <div class="row py-3">
            <ContactHeader />
          </div>
        </div>
      </div>

      <div class="container col-md-6">
        <div class="row">
          <div class="mx-auto p-0 col-lg-7">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input
                    id="form27"
                    class="form-control rounded-0"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div class="form-group col-md-6">
                  <input
                    id="form28"
                    class="form-control rounded-0"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="form-group">
                <input
                  id="form29"
                  class="form-control rounded-0"
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <div class="form-group">
                <input
                  id="form29"
                  class="form-control rounded-0"
                  type="text"
                  placeholder="How'd you hear about us?"
                />
              </div>

              <div class="form-group">
                <textarea
                  id="form30"
                  class="form-control rounded-0"
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
