import React, { Component } from "react";

class SubscriptionBanner extends React.Component {
  render() {
    return (
      <form className="form-inline d-flex justify-content-center">
        <div className="input-group">
          <input
            id="form1"
            className="form-control"
            type="email"
            placeholder="Your email"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SubscriptionBanner;
