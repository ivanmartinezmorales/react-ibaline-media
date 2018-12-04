import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

// const divStyle = {
//   backgroundImage: "url(${IntroImage})",
//   backgroundImage: "url(${https://ibb.co/D71sJCV})"
// };
// TODO: Add container class to everything! You're missing that fool.
const h3Style = {
  fontSize: "30px",
    fontFamily: "Mr Dafoe"
  // color: "white"
};

const pStyle = {
  fontSize: "25px"
  // color: "white"
};

const IntroLine = () => {
  return (
    <div className="py-4">
      <h2 style={h3Style}>
        Hello there, I'm Saloua |
      </h2>
        <h3 style={h3Style}>Social Media Specialist + Business Coach</h3>
    </div>
  );
};

const IntroParagraph = () => {
  return (
    <div className="col-md-4 py-1">
      <p style={pStyle}>
        I specialize in empowering businesses and solo-prenuers to the next level
        through efficient, effective social media marketing
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

          <div className="py-5" />

          <Container>
            <IntroLine />
            <div className="py-5" />
            <IntroParagraph />
          </Container>
          <div className="py-5" />
          <div className="py-5" />
          <div className="py-5" />
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
