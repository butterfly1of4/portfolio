import React from "react";
import "./LandingPage.css";
import arrow_down from "../../assets/arrow_down.png";
import background from "../../assets/background.png";
import "../../index.css"
// Function based React Component
const LandingPage = (props) => {
  // Default Class to apply to Component
  // let classList = `LandingPage`;

  return (
    <div className="LandingPage">
      <div className='hi_container'>
      <h1 className="hi">Hi. I'm Jenn. </h1>
      <h4 className="developer_violinist">
        Developer by day. Violinist by night.
      </h4>
      <br className="landing_br" />
      <p className="about_blurb">
        I’m a Full stack Developer, web developer + recent grad of General
        Assembly in Washington. DC. ...Looking for full time or contract
        opportuines in the DMV or Remote for If your a business seeking a web
        presence or an employwer looking to hire, contact me here. rich
        interactive web apps.{" "}
      </p>
      </div>
    </div>
  );
};

export default LandingPage;
