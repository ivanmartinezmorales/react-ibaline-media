import React from "react";
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

const PackageItemsData = [
  {
    id: 1,
    title: "Start Up Package",
    subtitle: "For Small Businesses and Startups",
    img:
      "https://images.unsplash.com/photo-1519895173443-d259e1fc4962?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b751cf508d1137fd7c06736b0811897&auto=format&fit=crop&w=1722&q=80",
    HookText: "Just getting started? Let's create your online brand.",
    PackageText:
      "In this package, we will journey through creating your digital brand and using our focus to empower your brand to the next level."
  },
  {
    id: 2,
    title: "Level Up Package",
    subtitle: "For Growing Activities",
    img:
      "https://images.unsplash.com/photo-1525857332689-4b3110c2d3f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64092aab3ca44d0dd8f1314166dba348&auto=format&fit=crop&w=1228&q=80",
    HookText:
      "Already have a digital presence? Let's work together to take your brand to the next level!",
    PackageText:
      "In this package, we will journey with you to empower your digital brand. We will work together identify opportunities for growth; then take those opportunities and make them a reality."
  },
  {
    id: 3,
    title: "Success Package",
    subtitle: "For Big Firms and Companies",
    img:
      "https://images.unsplash.com/photo-1525422847952-7f91db09a364?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce6622924dae3b9be067e1778a6b8707&auto=format&fit=crop&w=1365&q=80",
    HookText:
      "A one-of-a-kind, unique experience tailored to the needs of your industry.",
    PackageText:
      "This package is perfect for businesses and firms looking to make a solid, consistent digital footprint."
  }
];

const PackageContent = ({ title, subtitle, img, HookText, PackageText }) => {
  return (

      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="p-0 col-lg-5 order-2 order-lg-1">
              <img
                className="img-fluid d-block"
                src={img}
                alt={"photo of things"}
              />
            </div>
            <div className="d-flex flex-column justify-content-center p-3 col-lg-7 order-1 order-lg-2">
              <h1 className="section-subheading">{title}</h1>
              <h2 className="service-content">{subtitle}</h2>
              <p className="font-italic">{HookText}</p>
              <p className="package-text">{PackageText}</p>
              <a
                className="btn btn-primary btn-grad"
                href="https://salouaibaline.typeform.com/to/omkmNQ"
              >
                Let's get started
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

const PackageContents = ({ PackageItemsData }) => {
  return PackageItemsData.map(item => (
    <PackageContent {...item} key={item.id} />
  ));
};

const Package = () => {
  return (
    <section>
      <PackageContents PackageItemsData={PackageItemsData} />
    </section>
  );
};

const PackagesSection = () => {
  /* Packages section - a section for putting our elements together to create ONE package.
  It will contain both the image and the text, with the button at the bottom
   */
  return (
      <div className="container">
          <div className="py-3 container">
              <div className="py-3 container">
                  <div className="py-sm-5" />
                  <h1 className="section-heading text-center">Packages</h1>
                  <div className="py-sm-5" />
              </div>

          </div>
          <div className="py-5 text-center">
              <div className="container">
                  <div className="row">
                      <div className="mx-auto col-md-7">
                          <h2 style={{fontFamily: "Montserrat"}}>We specialize in: </h2>
                      </div>
                  </div>
              </div>
          </div>
      <div className="py-5" >
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="card text-center"><img className="card-img-top"
                                                             src="https://i.ibb.co/Y06ffSp/william-iven-8515-unsplash.jpg"
                                                             alt="Card image cap" style={{	height: "300px"}}/>
                          <div className="card-body">
                              <h1 style={{fontFamily: "Montserrat"}}>Women in Business</h1>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card text-center"><img className="card-img-top"
                                                             src="https://i.ibb.co/GHjcrYk/wang-xi-1179313-unsplash-1.jpg"
                                                             alt="Card image cap" style={{	height: "300px"}}/>
                          <div className="card-body">
                              <h1 style={{fontFamily: "Montserrat"}}>Social Media Marketing</h1>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      </div>
  );
};

export default PackagesSection;
