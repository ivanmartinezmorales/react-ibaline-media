import React from "react";

// const divStyle = {
//   backgroundImage: "url(${IntroImage})",
//   backgroundImage: "url(${https://ibb.co/D71sJCV})"
// };
// TODO: Add container class to everything! You're missing that fool.
const h3Style = {
  fontSize: "4rem",
  fontFamily: "Roboto",
  letterSpacing: "2px",
  color: "white"
};

const pStyle = {
  fontSize: "1rem",
  fontFamily: "Montserrat"
};

const h4Style = {
  fontSize: "1.5rem",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  color: "white"
};

const LetsGetStartedButton = () => {
  const styling = {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
    fontFamily: "Montserrat",
    position: "absolute",
    bottom: "0",

  };

  return (
    <div>
      <p style={styling}>At Ibaline Media, our primary focus is to{" "}
          <u>educate small businesses</u> & entrepreneurs to use digital
          marketing to grow their brand, connect with their ideal
          clients/customers, and generate sales.</p>
    </div>
  );
};

const IntroLine = () => {
  return (
    <div className="py-3">
      <h2 className="text-right" style={h3Style}>
        Hello there, I'm Saloua
      </h2>
      <div className="my-2" />
      <h3 className="text-right" style={h4Style}>
        Social Media Specialist + Business Coach
      </h3>
    </div>
  );
};

const IntroParagraph = () => {
  return (
    <div className={"container"}>
      <div className={"col-md-3"} />
      <div className="mt-5 px-5 py-5 text-center focus-background text-white mx-lg-5 px-lg-5">
        <p style={pStyle}>
          At Ibaline Media, our primary focus is to{" "}
          <u>educate small businesses</u> & entrepreneurs to use digital
          marketing to grow their brand, connect with their ideal
          clients/customers, and generate sales.
        </p>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div className="masthead container-fluid">
      <div className="py-md-1" />
      <div className="container d-flex h-100 justify-content-end">
        <div className="row">
          <IntroLine />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <LetsGetStartedButton />
      </div>
    </div>
  );
}

export default Home;
