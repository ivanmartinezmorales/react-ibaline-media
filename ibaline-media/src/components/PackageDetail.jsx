import React from "react";
import { Button } from 'reactstrap';
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

const PackagesColumnText = () => {
  // text section of the packages section
  // includes title, subtitle, text, button
  // organized as follows:
  //     4 rows, both
  return (
    <div className="col-md-8">
      <div className="row">
        <div className="text-left col-md-6">
          <h2>Title of package</h2>
          <h3>Subtitle goes here</h3>
        </div>
        <div className="text-left">
          <p>Talk about packages here.</p>
        </div>
          <Button>Click here to get started</Button>
      </div>
    </div>
  );
};

const PackagesPhoto = () => {
  /*
  In this stateless fuction, the photo will go here.
  We can add props to this at a later date, for now it will be static.
  Photos will be in col-md-4.
   */

  return (
      <div className="col-md-4">
        <h2>Put photo here</h2>
      </div>
  )
}

const PackagesSection = () => {
  /* Packages section - a section for putting our elements together to create ONE package.
  It will contain both the image and the text, with the button at the bottom
   */
  return (
      <div className="py-3">
        <PackagesPhoto/>
        <PackagesColumnText/>
      </div>
  )
}

export default PackagesSection;
