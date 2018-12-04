import React, { Component } from "react";

const AboutMeData = [
  {
    id: 1,
    text:
      "I'm a business coach and digital marketing expert that focuses primarily on social media marketing for solopreneurs and small businesses. I consult, I speak and I work with companies around the globe. My primary focus is to educate small businesses to use digital marketing to grow their brand, connect with their ideal clients/customers and generate sales.",
    img: "Insert Image Here"
  },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "Insert image here"
  }
];

const AboutMeHeader = () => {
  return (
    <div className="row">
      <div className="mx-auto col-md-8">
        <h2 className="section-heading text-uppercase text-center">About Us</h2>

        <p className="lead text-center">Insert tagline here.</p>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  return (
    <div className="row my-4 d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center p-3 col-lg-7">
        <p className="lead mb-0 text-center text-lg-left">
          Saloua Ibaline is a certified Business Coach and a Digital Marketing
          Expert who focuses primarily on social media marketing for driven and
          creative business owners & solopreneurs. Saloua has a decade of
          experience in business, sales, and marketing.
        </p>
      </div>

      <div className="p-0 col-md-3 col-sm-6">
        <img
          className="img-fluid d-block"
          src="https://static.pingendo.com/img-placeholder-2.svg"
        />
      </div>
    </div>
  );
};

const AboutMe = () => {
  const AboutMeStyle = {
    fontFamily: "Helvetica"
  };

  return (
    <section id="about">
      <div className="py-3">
        <div className="container">
          <div className="py-5" />
          <div className="py-2" />
          <AboutMeHeader />
        </div>
        <AboutMeSection />
        <div className="py-3" />

        <div className="row my-2 d-flex justify-content-center">
          <div className="p-0 order-2 order-lg-1 col-md-3 col-sm-6">
            <img
              className="img-fluid d-block"
              src="https://static.pingendo.com/img-placeholder-4.svg"
            />
          </div>

          <div className="d-flex flex-column justify-content-center p-3 col-lg-7 order-1 order-lg-2">
            <p className="lead mb-0 text-center text-lg-left">
              After working for Google Adwords, she decided to open her own
              agency - Ibaline Media where she consults, speaks and works with
              companies around the globe. Saloua empowers her clients to grow
              their digital media presence so they can grow their brand and
              build a successful online business. Nothing makes her happier than
              making her clients succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="py-1 text-center">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-md-7">
              <hr />

              <p contenteditable="true">
                Here we can speak on your photos that you have with clients,
                using meaningful, impactful photos that relate to you as a
                person and relate to the client, making a transition into the
                testimonial section.
              </p>

              <hr />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-moon.svg"
              />
            </div>

            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-dark.svg"
              />
            </div>

            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-moon.svg"
              />
            </div>

            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-light.svg"
              />
            </div>

            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-dark.svg"
              />
            </div>

            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-moon.svg"
              />
            </div>

            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-light.svg"
              />
            </div>

            <div className="col-6 col-md-3 p-0">
              <img
                className="img-fluid d-block"
                src="https://static.pingendo.com/cover-moon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

class About extends React.Component {
  render() {
    return <AboutMe />;
  }
}

export default About;
