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
              <div class="py-1">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-12 text-center d-md-flex align-items-center">
                              <i class="d-block fa fa-stop-circle fa-2x mr-md-5 text-primary"/>

                              <ul class="nav mx-md-auto d-flex justify-content-center">
                                  <li class="nav-item">
                                      <a class="nav-link active" href="#">
                                          Home
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="nav-link" href="#about">
                                          About
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="nav-link" href="#focus">
                                          Focus
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="nav-link" href="#services">
                                          Services
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="nav-link" href="#packages">
                                          Packages
                                      </a>
                                  </li>
                              </ul>

                              <div class="row">
                                  <SocialMediaButtons/>
                              </div>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-12 text-center">
                              <p class="mt-2 mb-0 text-muted">
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
