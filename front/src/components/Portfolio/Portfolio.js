import React, { Component } from "react";
import "./Portfolio.css";
import "../../index.css";
import { Router, Link, Switch } from "react-router-dom";

// React Class Component
class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h1 className="Portfolio_title">Portfolio<div className="Period">.</div></h1>
        <div className="project_wrapper">
          <ul className="project_thumbnails">
            <li className="thumbnail_item">
              <div className="thumbnail_Pic"></div>

              <a
                className="github_link"
                href="https://github.com/butterfly1of4/Game-of-War"
              >
                GAME OF WAR
              </a>
            </li>

            <li className="thumbnail_item">
              <div className="thumbnail_Pic"></div>

              <a
                className="deployed_link"
                href="https://butterfly1of4.github.io/ui-pattern/"
              >
                NASA PLANETS PAGE
              </a>
              <a
                className="github_link"
                href="https://github.com/butterfly1of4/ui-pattern"
              ></a>
            </li>

            <li className="thumbnail_item">
              <div className="thumbnail_Pic"></div>
              <a
                className="deployed_ink"
                href="https://butterfly1of4.github.io/project8-frontend"
              >
                NTERFLIX
              </a>
              <a
                className="github_link"
                href="https://github.com/butterfly1of4/project8-frontend"
              >
                FRONT END
              </a>
              <a
                className="github_link"
                href="https://github.com/butterfly1of4/project8-backend"
              >
                BACK END
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Portfolio;
