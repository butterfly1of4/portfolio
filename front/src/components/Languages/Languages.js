import React from "react";
import "./Languages.css";

// Function based React Component
const Languages = (props) => {
  return (
    <div className="Languages">
      <h1 className="Languages_title">Languages.</h1>
      <p className="Languages_wrapper">
        <div className="outer_wrapper">
        <ul className="Languages_list">
          <li className="Languages_item">Django</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Python</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Node</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Express</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Git</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Back End</li>
          <div className="slashes">//</div>
          <li className="Languages_item">MongoDB</li>
          <div className="slashes">//</div>
          <li className="Languages_item">SQL</li>
          <div className="slashes">//</div>
          <li className="Languages_item"></li>
          <div className="slashes">//</div>
          <li className="Languages_item">Front End</li> <div className="slashes">//</div>
          <li className="Languages_item">CSS</li>
          <div className="slashes">//</div>
          <li className="Languages_item">HTML</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Javascript</li>
        </ul>
        </div>
      </p>
    </div>
  );
};

export default Languages;
