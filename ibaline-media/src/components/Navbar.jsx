import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavBarLogo = () => {
  /*
    NavBarLogo: contains the logo and Ibaline Media next to it in the navbar.
     */
  return (<div className="navbar-brand">

  </div>);
};

const NavBarComponentList = () => {
  /*
    NavBarComponentsList: Includes all of the unordered list components that are in the navbar

      Focus, Services, Packages, About, Contact
     */
  return (
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
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
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">
            Testimonials
          </a>
        </li>
      </ul>
    </div>
  );
};

const NavBarSocialMedia = () => {
  /*
  NavBarSocialMedia - Stateless function that returns the social media links to Saloua's social medias

  Social media links required:
    Instagram -- https://www.instagram.com/salouaibaline
    Facebook -- https://www.instagram.com/salouaibaline
    LinkedIn -- https://www.linkedin.com/in/salouaibaline

    With appropriate icons from font-awesome!

   */
  return (
    <div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mx-1">
          <a className="nav-link" href="#">
            <i className="fa fa-facebook fa-fw fa-lg" />
          </a>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link" href="#">
            <i className="fa fa-instagram fa-fw fa-lg" />
          </a>
        </li>
        <li className="nav-item mx-1">
          <a
            className="nav-link"
            href="https://twitter.com/salouaibaline?lang=en"
          >
            <i className="fa fa-twitter fa-fw fa-lg" />
          </a>
        </li>
        <li className="nav-item mx-1">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/salouaibaline/"
          >
            <i className="fa fa-linkedin fa-fw fa-lg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

const NavBarFrame = () => {
  return (
    <div className="nav navbar-expand-lg">
      <h1>N A V B A R B O I</h1>
    </div>
  );
};

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Placeholder text</h1>
      </div>
    );
  }
}

export default Navbar;
