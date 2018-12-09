import React from "react";
import {Container, Jumbotron} from "reactstrap";

// const divStyle = {
//   backgroundImage: "url(${IntroImage})",
//   backgroundImage: "url(${https://ibb.co/D71sJCV})"
// };
// TODO: Add container class to everything! You're missing that fool.
const h3Style = {
  fontSize: "6rem",
  fontFamily: "Mr Dafoe",
  letterSpacing: "5px",
  color: "white"
};

const pStyle = {
  fontSize: "1rem",
  fontFamily: "Montserrat"
};

const h4Style = {
  fontSize: "30px",
  fontFamily: "Montserrat",
  fontWeight: "bold"
};

const IntroLine = () => {
  return (
    <div className="py-0">
      <h2 className="text-center" style={h3Style}>
        Hello there, I'm Saloua
      </h2>
      <h3 className="text-center" style={h4Style}>
        Social Media Specialist + Business Coach
      </h3>
    </div>
  );
};

const IntroParagraph = () => {
  return (<div className={"container"}>
      <div className={"col-md-3"}/>
    <div className="mt-5 px-5 py-5 col-md-6 text-center focus-background text-white mx-lg-5 px-lg-5">
      <p style={pStyle}>
        At Ibaline Media, our primary focus is to{" "}
        <u>educate small businesses</u> & <i>entrepreneurs</i> to use digital
        marketing to grow their brand, connect with their ideal
        clients/customers, and generate sales.
      </p>
    </div><div className={"col-md-3"}/></div>
  );
};

const imgUrl = "https://i.ibb.co/HrK1SzF/saloua-intro.jpg";

function Home() {
    return (
        <div id="home container-fluid d-flex h-100 align-items-center">
            <Jumbotron fluid>
                <div className="py-0"/>

                <Container fluid>
                    <div className="py-0"/>
                    <IntroLine/>

                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>
                    <div className="py-5"/>

                </Container>
            </Jumbotron>
            <div className="py-3"/>
            <IntroParagraph/>
            <div className="py-5" style={{fontFamily: "Montserrat"}}>
                <div className="container">
                    <div className="row">
                        <div className="ml-auto col-lg-7 text-center text-lg-left"

                        >
                            <h1 style={{fontFamily: "Montserrat"}}>Subscribe to our email list</h1>
                            <p className="mb-0">
                                Get exclusive, members-only tips directly to your inbox!
                            </p>
                        </div>
                        <div
                            className="col-lg-4 d-flex justify-content-center align-items-center p-3"
                        >
                            <form className="form-inline mb-0">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your email"
                                        id="form2"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
