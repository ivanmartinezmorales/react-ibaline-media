import React, { Component } from "react";

const TestimonialHeader = () => {
  return (
    <div className="py-3 container">
      <div className="py-5" />
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase text-center">CLIENTS</h2>

        <h3
          className="section-subheading text-muted"
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
    <div className="row my-0">
      <div className="col-lg-12 mt-0">
        <img className="img-fluid" src="https://i.ibb.co/R30z6KX/logos.png" />
      </div>
    </div>
  );
};

const TestimonialBody = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <TestimonialHeader />
        </div>
        <TestimonialPhotoBanner />

        <div className="container">
          <div className="py-3">
            <div className="container" />

            <div className="py-2">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mx-auto p-3">
                    <img
                      className="img-fluid d-block rounded narrow-image"
                      src="https://i.ibb.co/TTv6GSz/Testimonial-1.png"
                    />
                  </div>

                  <div className="p-3 col-md-8">
                    <div className="blockquote mb-0">
                      <p>
                        I have watched Saloua build a thriving,
                        entrepreneurial community with consistent sell out
                        audiences. The basis of the build is through a main
                        component of building a digital following - email
                        management and interaction. Through Saloua’s email
                        marketing skills she consistently maintains engagement
                        amongst the attendees, but also offers classes and
                        workshops to support entrepreneurial growth
                      </p>

                      <div className="blockquote-footer">
                        <b>Tanaha Hairston</b>, CEO of Blended Pure
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2">
              <div className="container">
                <div className="row">
                  <div className="p-3 col-md-8">
                    <div className="blockquote mb-0">
                      <p>
                        I work with Saloua on my Social Media Strategy. What she
                        is really all about is helping me grow my revenue. She
                        is really creative and great to work with. She is
                        upfront about what is working and what is not working
                        and I love that about her. She really knows Social Media
                        Marketing. She helped me integrate my FB store,
                        strategise my Instagram feed for maximum engagement and
                        so much more. She is taking all these dispersed pieces
                        and put them together for me so that it is one cohesive
                        approach that goes beyond just posting. For Saloua, its
                        always about how do you grow your business. How do you
                        make the sale and how do you use social media to do
                        that. I absolutely love working with her. Thanks, Saloua
                        for everything you do for me.
                      </p>

                      <div className="blockquote-footer">
                        <b>Lee Woodward</b>, CEO of Women in Disguise

                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mx-auto p-3">
                    <img
                      className="img-fluid d-block"
                      src="https://i.ibb.co/6DvTmVv/Testimonial-Lee.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="py-3">*/}
              {/*<div className="container">*/}
                {/*<div className="row">*/}
                  {/*<div className="col-md-2 mx-auto p-3">*/}
                    {/*<img*/}
                      {/*className="img-fluid d-block rounded-circle"*/}
                      {/*src="https://static.pingendo.com/img-placeholder-2.svg"*/}
                    {/*/>*/}
                  {/*</div>*/}

                  {/*/!*<div className="p-3 col-md-8">*!/*/}
                    {/*/!*<div className="blockquote mb-0">*!/*/}
                      {/*/!*<p>*!/*/}
                        {/*/!*"I throw myself down among the tall grass by the*!/*/}
                        {/*/!*trickling stream; and, as I lie close to the earth, a*!/*/}
                        {/*/!*thousand unknown plants are noticed by me: when I hear*!/*/}
                        {/*/!*the buzz of the little world among the stalks."*!/*/}
                      {/*/!*</p>*!/*/}

                      {/*/!*<div className="blockquote-footer">*!/*/}
                        {/*/!*<b>J. W. Goethe</b>, CEO at Werther Inc.*!/*/}
                      {/*/!*</div>*!/*/}
                    {/*/!*</div>*!/*/}
                  {/*/!*</div>*!/*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

class Testimonials extends Component {
  render() {
    return (
      <div className="py-3 container">
        <TestimonialBody />
      </div>
    );
  }
}

export default Testimonials;
