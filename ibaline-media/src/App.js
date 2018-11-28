import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// components
import Home from "./pages/Home.jsx";
import Focus from "./pages/Focus.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";

import Navbar from "./components/Navbar.jsx";
import ContactButton from "./components/ContactButton.jsx";
// import SubscriptionPopup from "./components/SubscriptionPopup.jsx";
class App extends Component {
  render() {
    return (
      <div className="py-0">
        <Home />
        <div class="py-5" />
        <Services />
        <div className="py-3" />
        <div classNmae="py-3" style={{ background: "blue" }} />
        <Focus />
        <div class="py-5" />
        <About />
        <div class="py-5" />
        <Testimonials />
        <div class="py-5" />
        <Contact />
      </div>
    );
  }
}

export default App;
