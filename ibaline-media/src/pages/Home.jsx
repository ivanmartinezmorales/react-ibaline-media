import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

// const divStyle = {
//   backgroundImage: "url(${IntroImage})",
//   backgroundImage: "url(${https://ibb.co/D71sJCV})"
// };
// TODO: Add container class to everything! You're missing that fool.
const h3Style = {
  fontSize: "25px",
  fontWeight: "bold"
  // color: "white"
};

const pStyle = {
  fontSize: "25px"
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
    <div className="col-md-4 py-1" style={{ background: "rgb(13,43,48)" }}>
      <p style={pStyle}>
        I specialize in empowering businesses and soloprenuers to the next level
        through efficient, effective social media marketing
      </p>
    </div>
  );
};
const imgUrl = "https://i.ibb.co/HrK1SzF/saloua-intro.jpg";
class Home extends Component {
  render() {
    return (
      <div id="home">
        <Jumbotron>
          <div class="py-5" />
          <div class="py-5" />

          <Container>
            <IntroLine />
            <div class="py-3" />
            <IntroParagraph />
          </Container>
          <div class="py-5" />
          <div class="py-5" />
          <div className="py-5" />
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
