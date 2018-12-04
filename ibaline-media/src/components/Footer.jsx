import React, { Component } from "react";

const SocialMediaButtons = () => {
  return(
      <div className="col-md-12 d-flex align-items-center justify-content-md-between justify-content-center my-2">
          <a href="https://www.facebook.com/salouaibaline">
              <i className="d-block fa fa-facebook-official text-muted fa-lg mx-2"/>
          </a>

          <a href="https://www.instagram.com/salouaibaline">
              <i className="d-block fa fa-instagram text-muted fa-lg mx-2"/>
          </a>

          <a href="https://www.linkedin.com/in/salouaibaline">
              <i className="d-block fa fa-linkedin text-muted fa-lg ml-2"/>
          </a>
      </div>
  )
};

class Footer extends React.Component {
  render() {
      return (
          <section id="footer">
              <div className="py-1">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 text-center d-md-flex align-items-center">
                              <i className="d-block fa fa-stop-circle fa-2x mr-md-5 text-primary"/>

                              <ul className="nav mx-md-auto d-flex justify-content-center">
                                  <li className="nav-item">
                                      <a className="nav-link active" href="#">
                                          Home
                                      </a>
                                  </li>

                                  <li className="nav-item">
                                      <a className="nav-link" href="#about">
                                          About
                                      </a>
                                  </li>

                                  <li className="nav-item">
                                      <a className="nav-link" href="#focus">
                                          Focus
                                      </a>
                                  </li>

                                  <li className="nav-item">
                                      <a className="nav-link" href="#services">
                                          Services
                                      </a>
                                  </li>

                                  <li className="nav-item">
                                      <a className="nav-link" href="#packages">
                                          Packages
                                      </a>
                                  </li>
                              </ul>

                              <div className="row">
                                  <SocialMediaButtons/>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-12 text-center">
                              <p className="mt-2 mb-0 text-muted">
                                  <small>
                                      Created by
                                      <a href="www.github.com/ivanmartinezmorales">Ivan</a>
                                  </small>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      );

  }
}

export default Footer;
