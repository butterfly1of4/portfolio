import React, { Component } from 'react'
import "./Portfolio.css"
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";


// React Class Component
class Portfolio extends Component {

    render() {
        return (
            <div className="Portfolio">
                <h1 className="portfolio_title">Portfolio.</h1>
                <div className="project_thumbails">
                    <div className="war">
                        <div className="thumbnail_1">
                        </div>
                    </div>
                    <div className="nasa">
                        <div className="thumbnail_2">
                        </div>
                    </div>    
                    <div className="Nterflix">
                        <div className="thumbnail_3">
                        </div>
                    </div>        
                </div>
            </div>
        )
    }
}

export default Portfolio

