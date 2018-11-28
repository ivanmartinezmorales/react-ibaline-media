// this section is the focus section

import React, { Component } from "react";

const FocusItems = [
  {
    id: 1,
    title: "Develop Brand Awareness",
    img: "https://static.pingendo.com/img-placeholder-1.svg",
    text:
      "Growing your followers on social media will help you increase word of mouth and referrals. Our social media marketing services will help you increase your followers with relevant people. We will ensure that your followers match the demographics, interests, and behaviors of your ideal clients."
  },
  {
    id: 2,
    title: "Build Relationships",
    img: "https://static.pingendo.com/img-placeholder-1.svg",
    text:
      "When you build a strong connection through engagement and direct messaging with your audience, they are more likely to buy from you. We will help you increase engagement (likes, comments, etc.) on your social media posts. The more engagement you have, the stronger your connection is with your audience."
  },
  {
    id: 3,
    title: "Increase Website Traffic",
    img: "https://static.pingendo.com/img-placeholder-1.svg",
    text:
      "Increasing your website traffic will directly influence leads and sales. We will focus on developing social media advertising campaigns that drive high volumes of traffic to your website."
  }
];

const SectionHeader = () => {
  const HeaderStyle = {
    fontSize: "60px",
    fontWeight: "bold"
  };
  return (
    <div className="col-md-12">
      <br />
      <h2
        className="section-heading text-uppercase text-center"
        style={HeaderStyle}
      >
        Focus
      </h2>
    </div>
  );
};

const SectionContent = ({ id, title, img, text }) => {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-6 p-md-4 col-3">
        <img className="img-fluid d-block" src={img} width={1500} />
      </div>
      <div className="col-md-6 offset-lg-1 d-flex flex-column justify-content-center py-4">
        <h4 className="my-3">{title}</h4>
        <p className="section-content">{text}</p>
      </div>
    </div>
  );
};

// Section content creator
const SectionCards = ({ FocusItems }) => {
  return FocusItems.map(item => <SectionContent {...item} key={item.id} />);
};

// Focus creator
class Focus extends Component {
  render() {
    return (
      <div
        className="focus-section py-3 mx-1 "
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="py-3">
          <SectionHeader />
        </div>
        <div className="py-5" />
        <SectionCards FocusItems={FocusItems} />
      </div>
    );
  }
}

export default Focus;
