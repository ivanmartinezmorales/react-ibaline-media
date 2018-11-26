import React, { Component } from "react";
import Packages from "./Packages.jsx";
const ServicesText = [
  {
    id: 1,
    title: "Social Media Management"
  },
  {
    id: 2,
    title: "Content Creation"
  },
  {
    id: 3,
    title: "Social Media Advertising"
  },
  {
    id: 4,
    title: "Business/Marketing Coaching"
  },
  {
    id: 5,
    title: "Ad Campaigns Optimization"
  },
  {
    id: 6,
    title: "Influencers Marketing"
  }
];

const ServicesHeader = () => {
  return (
    <div className="row">
      <div className="col-lg-12 text-center py-2">
        <h2 className="section-heading text-uppercase">services</h2>
        <div className="py-1" />
        <h3 className="section-subheading text-muted">
          Some of the services we offer:
        </h3>
      </div>
    </div>
  );
};

const ServicesItem = ({ id, title }) => {
  return (
    <div className="col-md-4">
      <h4 className="service-content">{title}</h4>
    </div>
  );
};

const ServicesList = ({ ServicesText }) => {
  return ServicesText.map(item => <ServicesItem {...item} key={item.id} />);
};

const ServicesWorkWithUs = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="text-center col-md-12">
            <h1 className="section-subheading">Lets work together</h1>

            <div className="row">
              <div className="mx-auto col-md-7">
                <p className="lead">
                  Our passionate team is ready to scale your social media
                  prescence!
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
      <div id="services" class="bg-light">
        <div className="container text-center">
          <ServicesHeader />
        </div>
        <div className="container text-center">
          <div className="row w-100">
            <ServicesList ServicesText={ServicesText} />
          </div>
        </div>
        <div className="py-3" />
        <ServicesWorkWithUs />
        <Packages />
      </div>
    );
  }
}

export default Services;
