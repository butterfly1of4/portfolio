import React, { Component } from "react";
import "./Portfolio.css";
import "../../index.css";
import BlackTank from "../../assets/BlackTank.png"
import Saturn from "../../assets/Saturn.png"
import FilmReel from "../../assets/FilmReel.png"

import { Router, Link, Switch } from "react-router-dom";

// React Class Component
class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h1 className="Portfolio_title">
          Portfolio<div className="Period">.</div>
        </h1>
        <div className="project_wrapper">
          <ul className="project_thumbnails">
            <li className="thumbnail_item">
              <div className="thumbnail_Pic">

                <img className="thumbnail_1"src={BlackTank} />
              </div>

              <a
               style={{textDecoration:'none'}}
                href="https://github.com/butterfly1of4/Game-of-War"
              >
                GAME OF WAR
              </a>
            </li>

            <li className="thumbnail_item">
              <div className="thumbnail_Pic">            <img className="thumbnail_1"src={Saturn} /></div>

              <a
                className="deployed_link" style={{textDecoration:'none'}}
                href="https://butterfly1of4.github.io/ui-pattern/"
              >
                NASA PLANETS PAGE
              </a>
              <a className="ViewCode" style={{textDecoration:'none'}}href="https://github.com/butterfly1of4/ui-pattern">VIEW CODE</a>
            </li>

            <li className="thumbnail_item">
              <div className="thumbnail_Pic">            <img className="thumbnail_1"src={FilmReel} /></div>
              <a
                className="deployed_link" style={{textDecoration:'none'}}
                href="https://butterfly1of4.github.io/project8-frontend"
              >
                NTERFLIX
              </a>
              <a
                className="ViewCode"
                style={{textDecoration:'none'}}
                href="https://github.com/butterfly1of4/project8-frontend"
              >
                VIEW CODE FOR FRONTEND
              </a>
              <a
                className="ViewCode"
                style={{textDecoration:'none'}}
                href="https://github.com/butterfly1of4/project8-backend"
              >
                VIEW CODE FOR BACKEND
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Portfolio;
