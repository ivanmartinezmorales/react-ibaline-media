import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
const h3Style = {
  fontSize: "20px",
  fontWeight: "bold"
  // color: "white"
};

const pStyle = {
  fontFamily: "Helvetica",
  fontSize: "20px"
  // color: "white"
};

const IntroLine = () => {
  return (
    <div className="py-4">
      <h3 style={h3Style}>
        Hi, I'm Saloua | Digital Marketing + Social Media Expert
      </h3>
    </div>
  );
};

const IntroParagraph = () => {
  return (
    <div className="col-md-4 py-1">
      <p style={pStyle}>
        I specialize in empowering businesses and soloprenuers to the next level
        through efficient, effective social media marketing.
      </p>
    </div>
  );
};

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <IntroLine />
            <IntroParagraph />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
