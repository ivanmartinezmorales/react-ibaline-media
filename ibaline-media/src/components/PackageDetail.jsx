import React from "react";
import { Button } from "reactstrap";
/*
    For each section, the photo will reside in the COL-4 section, and the text will all reside
    inside of the col-md-8 section. Both sections need to be responsive

    Each section consists of a photo, and the other section will be as follows:
        Title
        Subtitle
        Text
        Button
        And all of those will be in rows ^ Get it boi

 */



const PackagePhoto = () => {
  return (
    <div className="p-0 col-lg-5 order-2 order-lg-1">
      <img
        className="img-fluid d-block"
        src="https://static.pingendo.com/cover-bubble-light.svg"
      />
    </div>
  );
};

const PackageContent = () => {
  return (
    <div className="d-flex flex-column justify-content-center p-3 col-lg-7 order-1 order-lg-2">
      <h1 className="">Startup Package</h1>
      <h2 className="">Starting out</h2>
      <p className="">
        Paragraph. Then, my friend, when darkness overspreads my eyes, and
        heaven and earth seem to dwell in my soul and absorb its power, like the
        form of a beloved mistress, then I often think with longing.
      </p>
      <a className="btn btn-primary" href="#">
        Let's get started (Opens the typeform on the side)
      </a>
    </div>
  );
};

const Package = () => {
  return (
    <section>
      <div className="py-3">
        <div className="container">
          <div className="row">
            <PackagePhoto />
            <PackageContent />
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container">
          <div className="row">
            <PackagePhoto />
            <PackageContent />
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container">
          <div className="row">
            <PackagePhoto />
            <PackageContent />
          </div>
        </div>
      </div>
    </section>
  );
};

const PackagesSection = () => {
  /* Packages section - a section for putting our elements together to create ONE package.
  It will contain both the image and the text, with the button at the bottom
   */
  return <div className="py-3 container">
    <Package/>
  </div>;
};

export default PackagesSection;
