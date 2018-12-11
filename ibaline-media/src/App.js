import React, { Component } from "react";

import "./App.scss";
import { library } from '@fortawesome/fontawesome-svg-core';


// components
import Home from "./pages/Home.jsx";
// import Focus from "./pages/Focus.jsx";
// import Services from "./pages/Services.jsx";
// import About from "./pages/About.jsx";
// import Testimonials from "./pages/Testimonials.jsx";
// import Contact from "./pages/Contact.jsx";
//
// import Navbar from "./components/Navbar.jsx";
// import Example from "./components/Navigation";
// import ContactButton from "./components/ContactButton.jsx";
import Footer from "./components/Footer.jsx";
import Packages from "./components/Packages.jsx";
// import SubscriptionPopup from "./components/SubscriptionPopup.jsx";
class App extends Component {
  render() {
    return (
        <div>
          {/*<Example/>*/}
            <Home/>
            {/*<ColoredLine color={"black"}/>*/}
            {/*<Services/>*/}
            {/*<ColoredLine color={"black"}/>*/}
            {/*<Packages/>*/}
            {/*<ColoredLine color={"black"}/>*/}
            {/*<Focus/>*/}
            {/*<ColoredLine color={"black"}/>*/}
            {/*<About/>*/}
            {/*<ColoredLine color={"black"}/>*/}
            {/*<Testimonials/>*/}
            {/*<ColoredLine color={"black"}/>*/}
            {/*<Contact/>*/}
          <Footer/>
        </div>
    );
  }
}

// colored line to add in between divs
const ColoredLine = ({ color }) => (
    <div className="container px-5">
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    /></div>
);

// library.add(faInstagram, faFacebook);

export default App;
