import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="myNav" class="overlay">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
            ×
          </a>
          <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <span onclick="openNav()">open</span>
      </div>
    );
  }
}

export default Navbar;
