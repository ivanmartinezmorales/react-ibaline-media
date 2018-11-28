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

const BannerStyle = {
  fontFamily: "Montserrat"
};

const IntroBanner = () => {
  return (
    <div className="py-4 text-center">
      <h2>To your success and nothing less,</h2>
    </div>
  );
};

const AboutMeHeader = () => {
  return (
    <div class="row">
      <div class="mx-auto col-md-8">
        <h2 class="section-heading text-uppercase text-center">About Us</h2>

        <p class="lead text-center">Insert tagline here.</p>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  return (
    <div class="row my-4 d-flex justify-content-center">
      <div class="d-flex flex-column justify-content-center p-3 col-lg-7">
        <p class="lead mb-0 text-center text-lg-left">
          I'm a business coach and digital marketing expert that focuses
          primarily on social media marketing for solopreneurs and small
          businesses. I consult, I speak and I work with companies around the
          globe. My primary focus is to educate small businesses to use digital
          marketing to grow their brand, connect with their ideal
          clients/customers and generate sales.
        </p>
      </div>

      <div class="p-0 col-md-3 col-sm-6">
        <img
          class="img-fluid d-block"
          src="https://static.pingendo.com/img-placeholder-2.svg"
        />
      </div>
    </div>
  );
};

const PersonalBioBanner = () => {
  return (
    <div className="py-3 text-center">
      <h2 className="section-subheading">Meet the Owner</h2>
    </div>
  );
};

const AboutMe = () => {
  const AboutMeStyle = {
    fontFamily: "Helvetica"
  };

  return (
    <section id="about">
      <div class="py-3">
        <div class="container">
          <div className="py-5" />
          <div className="py-2" />
          <AboutMeHeader />
        </div>
        <AboutMeSection />
        <div className="py-3">
          <PersonalBioBanner />
        </div>

        <div class="row my-4 d-flex justify-content-center">
          <div class="p-0 order-2 order-lg-1 col-md-3 col-sm-6">
            <img
              class="img-fluid d-block"
              src="https://static.pingendo.com/img-placeholder-4.svg"
            />
          </div>

          <div class="d-flex flex-column justify-content-center p-3 col-lg-7 order-1 order-lg-2">
            <p class="lead mb-0 text-center text-lg-left">
              Here we can put Saloua's personal bio, with portrait adjacent
            </p>
          </div>
        </div>
      </div>

      <div class="py-4 text-center">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-md-7">
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

      <div class>
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
                src="https://static.pingendo.com/cover-moon.svg"
              />
            </div>

            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-dark.svg"
              />
            </div>

            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
                src="https://static.pingendo.com/cover-moon.svg"
              />
            </div>

            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-light.svg"
              />
            </div>

            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-dark.svg"
              />
            </div>

            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
                src="https://static.pingendo.com/cover-moon.svg"
              />
            </div>

            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
                src="https://static.pingendo.com/cover-bubble-light.svg"
              />
            </div>

            <div class="col-6 col-md-3 p-0">
              <img
                class="img-fluid d-block"
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
