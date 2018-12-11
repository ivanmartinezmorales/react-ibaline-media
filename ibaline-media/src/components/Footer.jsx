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
      <section className="py-3" style={{backgroundColor: "#0aab7f"}}>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <p className="lead">
                  Sign up to our newsletter for the latest news
                </p>
                <form className="form-inline form-group">

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your e-mail here"
                    />
                  <button type="submit" className="btn btn-secondary ml-0">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="col-4 col-md-1 align-self-center">
                <a href="https://www.facebook.com/salouaibaline">
                  <i className="fab fa-facebook fa-2x" />
                </a>
              </div>
              <div className="col-4 col-md-1 align-self-center">
                <a href="https://www.twitter.com/salouaibaline">
                  <i className="fab fa-twitter fa-2x" />
                </a>
              </div>
              <div className="col-4 col-md-1 align-self-center">
                <a href="https://www.instagram.com/salouaibaline">
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3 text-center text-small">
                <p>Ibaline Media - Powered by Ivan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
