import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

// const divStyle = {
//   backgroundImage: "url(${IntroImage})",
//   backgroundImage: "url(${https://ibb.co/D71sJCV})"
// };
// TODO: Add container class to everything! You're missing that fool.
const h3Style = {
  fontSize: "60px",
  fontFamily: "Mr Dafoe",
    letterSpacing: "5px",
  color: "white"
};

const pStyle = {
  fontSize: "25px",
  fontFamily: "Montserrat"
};

const h4Style = {
  fontSize: "30px",
    fontFamily: "Montserrat",
    fontWeight: "bold"
};

const IntroLine = () => {
  return (
    <div className="py-0">
      <h2 className="text-center" style={h3Style}>Hello there, I'm Saloua</h2>
      <h3 className="text-center" style={h4Style}>Social Media Specialist  +  Business Coach</h3>
    </div>
  );
};

const IntroParagraph = () => {
  return (
    <div className="col-12 py-3 text-center focus-background text-white">
      <p style={pStyle}>
          At Ibaline Media, our primary focus is to educate small businesses & entrepreneurs to use
        digital marketing to grow their brand, connect with their ideal clients/customers,
        and generate sales.


      </p>
    </div>
  );
};

const imgUrl = "https://i.ibb.co/HrK1SzF/saloua-intro.jpg";

class Home extends Component {
  render() {
    return (
      <div id="home container">
        <Jumbotron>
          <div className="py-0" />

          <Container>

            <IntroLine />
              <div className="py-5" />
              <div className="py-5" />
              <div className="py-5" />
              <div className="py-5" />
              <div className="py-5" />
              <div className="py-5" />

          </Container>

        </Jumbotron>
        <div className="py-3"/>
          <IntroParagraph />
      </div>
    );
  }
}

export default Home;
