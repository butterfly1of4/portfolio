import React, { Component } from "react";
import "./Portfolio.css";
import "../../index.css";
import { Router, Link, Switch } from "react-router-dom";

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
                <Switch>
                  <Link className="github_war_link" to="https://github.com/butterfly1of4/Game-of-War">
                    GAME OF WAR
                  </Link>
                </Switch>
              </p>
            </div>
            <div className="nasa">
              <div className="thumbnail_2"></div>
              <p>
                <Switch>
                  <Link className="nasa_pages_link" 
                 to="https://butterfly1of4.github.io/ui-pattern/" >
                 NASA PLANETS PAGE
                  </Link>
                  {/* to="https://github.com/butterfly1of4/ui-pattern"> */}
                </Switch>
              </p>
            </div>
            <div className="Nterflix">
              <div className="thumbnail_3"></div>
              <p>
                <Switch>
                  <Link className="nterflix_deployed_ink" to="">
                    NTERFLIX
                  </Link>
                </Switch>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Portfolio;
