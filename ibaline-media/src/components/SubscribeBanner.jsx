import React, { Component } from "react";

class SubscriptionBanner extends React.Component {
  render() {
    return (
      <form class="form-inline d-flex justify-content-center">
        <div class="input-group">
          <input
            id="form1"
            class="form-control"
            type="email"
            placeholder="Your email"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SubscriptionBanner;
