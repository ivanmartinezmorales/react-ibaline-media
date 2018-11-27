import React, { Component } from "react";

const TestimonialHeader = () => {
  return (
    <div className="py-3">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">CLIENTS</h2>

        <h3
          class="section-subheading text-muted text-center"
          Style="font-family: Montserrat;"
        >
          Our team is trusted by:
        </h3>
      </div>
    </div>
  );
};

const TestimonialPhotoBanner = () => {
  return (
    <div class="row my-0">
      <div class="col-lg-12 mt-0">
        <img class="resize" src="img/logos.png" />
      </div>
    </div>
  );
};

const TestimonialBody = () => {
  return (
    <section id="testimonials">
      <div class="container">
        <div class="row">
          <TestimonialHeader />
        </div>
        <TestimonialPhotoBanner />

        <div class="container">
          <div class="py-3">
            <div class="container" />

            <div class="py-2">
              <div class="container">
                <div class="row">
                  <div class="col-md-2 mx-auto p-3">
                    <img
                      class="img-fluid d-block rounded-circle"
                      src="https://static.pingendo.com/img-placeholder-2.svg"
                    />
                  </div>

                  <div class="p-3 col-md-8">
                    <div class="blockquote mb-0">
                      <p>
                        I have watched Saloua build a thriving , women-only ,
                        entrepreneurial community with consistent sell out
                        audiences. The basis of the build is through a main
                        component of building a digital following - email
                        management and interaction. Through Saloua’s email
                        marketing skills she consistently maintains engagement
                        amongst the attendees, but also offers classes and
                        workshops to support entrepreneurial growth
                      </p>

                      <div class="blockquote-footer">
                        <b>Tanaha Hairston</b>, CEO of Blended Pure
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="py-2">
              <div class="container">
                <div class="row">
                  <div class="p-3 col-md-8">
                    <div class="blockquote mb-0">
                      <p>
                        "I throw myself down among the tall grass by the
                        trickling stream; and, as I lie close to the earth, a
                        thousand unknown plants are noticed by me: when I hear
                        the buzz of the little world among the stalks."
                      </p>

                      <div class="blockquote-footer">
                        <b>J. W. Goethe</b>, CEO at Werther Inc.
                      </div>
                    </div>
                  </div>

                  <div class="col-md-2 mx-auto p-3">
                    <img
                      class="img-fluid d-block rounded-circle"
                      src="https://static.pingendo.com/img-placeholder-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="py-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-2 mx-auto p-3">
                    <img
                      class="img-fluid d-block rounded-circle"
                      src="https://static.pingendo.com/img-placeholder-2.svg"
                    />
                  </div>

                  <div class="p-3 col-md-8">
                    <div class="blockquote mb-0">
                      <p>
                        "I throw myself down among the tall grass by the
                        trickling stream; and, as I lie close to the earth, a
                        thousand unknown plants are noticed by me: when I hear
                        the buzz of the little world among the stalks."
                      </p>

                      <div class="blockquote-footer">
                        <b>J. W. Goethe</b>, CEO at Werther Inc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

class Testimonials extends Component {
  render() {
    return (
      <div className="py-3">
        <TestimonialBody />
      </div>
    );
  }
}

export default Testimonials;
