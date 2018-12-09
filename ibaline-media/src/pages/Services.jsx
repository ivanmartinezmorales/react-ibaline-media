import React, { Component } from "react";
import Packages from "./Packages.jsx";
const ServicesText = [
  {
    id: 1,
    title: "Social Media Management",
      text: "Our packages include posts, Monday through Friday at strategic times in order to maximize your Reach and Impressions on your preferred social media platform"
  },
  {
    id: 2,
    title: "Content Creation",
      text: "We work with you to create engaging content that keeps people coming back to your page."
  },
  {
    id: 3,
    title: "Social Media Advertising",
      text: "Using your social media metrics, we create a strategy to optimize your advertising budget."
  },
  {
    id: 4,
    title: "Business/Marketing Coaching",
      text: "We use our decade of successful business and marketing coaching to empower your digital footprint to the next level through strategic brand placement, etc..."

  },
  {
    id: 5,
    title: "Ad Campaigns Optimization",
      text: "For our success members, we utilize A/B testing..."
  },
  {
    id: 6,
    title: "Influencers Marketing",
      text: "Placeholder text for the time being."

  }
];

const ServicesHeader = () => {
  return (
    <div className="row">
      <div className="col-lg-12 text-center py-4">
        <h2
          className="section-heading mx-5"
          style={{ fontFamily: "Montserrat"}}
        >
        Work With Me</h2>
        <div className="py-1 pb-3" />

        <div className="py-5"/>
      </div>
    </div>
  );
};

const ServicesItem = ({ id, title, text}) => {
  return (
    <div className="col-md-4">
        <h4 className="service-content"><u>{title}</u></h4>
      <br/>
      <p className="service-info">{text}</p>
    </div>
  );
};

const ServicesList = ({ ServicesText }) => {
  return ServicesText.map(item => <ServicesItem {...item} key={item.id} />);
};

const ServicesWorkWithUs = () => {
  return (
    <div className="py-5 justify-content-center">
      <div className="py-3">
        <div className="row">
          <div className="py-3" />
          <div className="text-center">
            <h1 className="section-subheading">Lets work together</h1>
            <div className="row">
              <div className="text-center">
                <p className="lead">
                  Our passionate team is ready to scale your social media
                  presence!
                  <br />
                </p>

                <p className="lead">
                  We have three great packages to choose from to take your brand
                  to the next level:
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Services extends Component {
  render() {
    return (
      <section id="services" className="container-fluid">
        <div id="services">
          <div className="py-5"/>
          <div className="container text-center">
            <ServicesHeader />
          </div>
          <div className="container text-center">
            <div className="row w-100">
              <ServicesList ServicesText={ServicesText} />
            </div>
          </div>
          <div className="py-3" />
          {/*<ServicesWorkWithUs className="" />*/}
          {/*<Packages />*/}
        </div>
      </section>
    );
  }
}

export default Services;
