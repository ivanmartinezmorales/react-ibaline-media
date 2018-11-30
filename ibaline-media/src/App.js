import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.scss";

// components
import Home from "./pages/Home.jsx";
import Focus from "./pages/Focus.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";

import Navbar from "./components/Navbar.jsx";
import Example from "./components/Navigation";
import ContactButton from "./components/ContactButton.jsx";

import Packages from "./components/Packages.jsx";
// import SubscriptionPopup from "./components/SubscriptionPopup.jsx";
class App extends Component {
  render() {
    return (
        <div>
          <Example/>
            <Packages/>
        </div>
    );
  }
}

export default App;
