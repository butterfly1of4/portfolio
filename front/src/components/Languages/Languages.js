import React from "react";
import "./Languages.css";

// Function based React Component
const Languages = (props) => {
  return (
    <div className="Languages">
      <h1 className="languages_title">Languages.</h1>
      <p className="languages_wrapper">
        <div className="outer_wrapper">
        <ul className="languages_list">
          <li className="languages_item">Django</li>
          <div className="slashes">//</div>
          <li className="languages_item">Python</li>
          <div className="slashes">//</div>
          <li className="languages_item">Node</li>
          <div className="slashes">//</div>
          <li className="languages_item">Express</li>
          <div className="slashes">//</div>
          <li className="languages_item">Git</li>
          <div className="slashes">//</div>
          <li className="languages_item">Back End</li>
          <div className="slashes">//</div>
          <li className="languages_item">MongoDB</li>
          <div className="slashes">//</div>
          <li className="languages_item">SQL</li>
          <div className="slashes">//</div>
          <li className="languages_item"></li>
          <div className="slashes">//</div>
          <li className="languages_item">Front End</li> <div className="slashes">//</div>
          <li className="languages_item">CSS</li>
          <div className="slashes">//</div>
          <li className="languages_item">HTML</li>
          <div className="slashes">//</div>
          <li className="languages_item">Javascript</li>
        </ul>
        </div>
      </p>
    </div>
  );
};

export default Languages;
