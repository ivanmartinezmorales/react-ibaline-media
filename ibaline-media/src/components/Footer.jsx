import React, { Component } from "react";
// importing social media buttons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaButtons = () => {
  return (
    <div className="col-md-12 d-flex align-items-center justify-content-md-between justify-content-center my-2">
      <a href="https://www.facebook.com/salouaibaline">
        <i className="d-block fa fa-facebook-official text-muted fa-lg mx-2" />
      </a>

      <a href="https://www.instagram.com/salouaibaline">
        <i className="d-block fa fa-instagram text-muted fa-lg mx-2" />
      </a>

      <a href="https://www.linkedin.com/in/salouaibaline">
        <i className="d-block fa fa-linkedin text-muted fa-lg ml-2" />
      </a>
    </div>
  );
};

class Footer extends Component {
  render() {
    return (
      <section className="py-3">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-3 p-sm-3">
              <h5>
                <b>Navigate</b>
              </h5>
              <ul className="text-center list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Work With Me</a>
                </li>
                <li>
                  <a href="#">Focus</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 p-3 border">
              <h5 className="text-center">
                <b>Keep Up With Us</b>
              </h5>
              <div className="row d-flex justify-content-center">
                <p style={{fontSize: "1.25rem", fontWeight: "bold"}}>LET'S STAY IN TOUCH!</p>
                <p>Subscribe to get my monthly newsletter sent straight to your inbox with insights, inspiration, and resources.</p>
                  {/*Below lies the subscription form.*/}


              </div>
              <div className="row mx-5 d-flex justify-content-center">
                <div className="col-md-8 d-flex align-items-center justify-content-between">
                  <a href="http://www.facebook.com/salouaibaline">
                    <i className="d-block fab fa-facebook fa-2x mr-2" />
                  </a>
                  <a href="https://www.instagram.com/salouaibaline">
                    <i className="d-block fab fa-instagram fa-2x mx-2" />
                  </a>
                  <a href="https://www.linkedin.com/in/salouaibaline">
                    <i className="d-block fab fa-linkedin fa-2x mx-2" />
                  </a>
                  <a href="https://www.twitter.com/salouaibaline">
                    <i className="d-block fab fa-twitter fa-2x ml-2" />
                  </a>
                </div>
              </div>
            </div>
              <div className="col-lg-3 col-md-3 p-3">
                <h5>
                  <b>About</b>
                </h5>
                <p className="mb-0">Placeholder text</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="mb-0 mt-2">
                  Ibaline Media <FontAwesomeIcon icon="facebook-square" />
                </p>
              </div>
            </div>
          </div>

      </section>
    );
  }
}

export default Footer;
