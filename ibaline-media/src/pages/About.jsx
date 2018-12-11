import React, { Component } from "react";
import { Button } from "reactstrap";

const AboutMeHeader = () => {
  return (
    <div className="row">
      <div className="mx-auto col-md-8">
        <h2
          className="section-heading text-uppercase text-center"
          style={{ fontFamily: "" }}
        >
          About Me
        </h2>

        <p className="lead text-center font-italic">Who is Saloua Ibaline?</p>
      </div>
    </div>
  );
};

const AboutMeSnippet = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column justify-content-center p-3 col-lg-7">
            <p className="lead mb-0">
              Saloua Ibaline is a certified Business Coach and a Digital
              Marketing Expert who focuses primarily on social media marketing
              for driven and creative business owners &amp; solopreneurs. Saloua
              has a decade of experience in business, sales, and
              marketing.&nbsp;
              <br />
              <br />
              After working for Google Adwords, she decided to open her own
              agency - Ibaline Media where she consults, speaks and works with
              companies around the globe. Saloua empowers her clients to grow
              their digital media presence so they can grow their brand and
              build a successful online business. Nothing makes her happier than
              making her clients succeed. Ready to begin?
            </p>
            <a className="btn btn-primary" href="#">
              Let's Get Acquinted
            </a>
          </div>
          <div className="p-0 col-lg-5">
            <img
              className="img-fluid d-block"
              src="https://i.ibb.co/ZgbrQx3/Saloua015w.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column justify-content-center p-3 col-lg-7">
            <p className="lead pb-2">
              Saloua Ibaline is a certified Business Coach and a Digital
              Marketing Expert who focuses primarily on social media marketing
              for driven and creative business owners &amp; solopreneurs. Saloua
              has a decade of experience in business, sales, and
              marketing.&nbsp;
              <br />
              <br />
              After working for Google Adwords, she decided to open her own
              agency - Ibaline Media where she consults, speaks and works with
              companies around the globe. Saloua empowers her clients to grow
              their digital media presence so they can grow their brand and
              build a successful online business. Nothing makes her happier than
              making her clients succeed. Ready to begin?
            </p>
            <a className="btn btn-primary" href="#contact">
              Let's Get Acquainted
            </a>
          </div>
          <div className="p-0 col-lg-5">
            <img
              className="img-fluid d-block"
              src="https://i.ibb.co/ZgbrQx3/Saloua015w.jpg"
              alt="photo of woman"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


class About extends Component {
  render() {
    return (
      <div className="container">
        <AboutMeHeader />
        <div className="py-2" />
        <AboutMeSnippet />
      </div>
    );
  }
}

export default About;
