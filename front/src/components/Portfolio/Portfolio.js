import React, { Component } from "react";
import "./Portfolio.css";
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

// React Class Component
class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h1 className="Portfolio_title">Portfolio.</h1>
          <div className="project_thumbnails">
            <div className="war">
              <div className="thumbnail_1"></div>
              <p>
                <Router>
                  <Link className="github_war_link" to="">
                    GAME OF WAR
                  </Link>
                </Router>
              </p>
            </div>
            <div className="nasa">
              <div className="thumbnail_2"></div>
              <p>
                <Router>
                  <Link className="nasa_pages_link" to="">
                    NASA PLANETS PAGE
                  </Link>
                </Router>
              </p>
            </div>
            <div className="Nterflix">
              <div className="thumbnail_3"></div>
              <p>
                <Router>
                  <Link className="nterflix_deployed_ink" to="">
                    NTERFLIX
                  </Link>
                </Router>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Portfolio;
