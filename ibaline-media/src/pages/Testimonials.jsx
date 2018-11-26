import React, { Component } from "react";

const TestimonialHeader = () => {
  return (
    <div className="py-3">
      <h2 className="section-heading text-uppercase text-center">
        Testimonials
      </h2>
    </div>
  );
};

const TestimonialPhotoBanner = () => {
  return (
    <div className="py-1">
      <img src="" alt="Logo Banner" />
    </div>
  );
};

class Testimonials extends Component {
  render() {
    return (
      <div className="py-1 justify-content-center">
        <TestimonialHeader />
        <TestimonialPhotoBanner />
      </div>
    );
  }
}

export default Testimonials;
