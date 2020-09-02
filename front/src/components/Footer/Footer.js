import React, { Component } from 'react'
import "./Footer.css"
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LinkedIN from "../../assets/LinkedIN.png"
import JHLogo from "../../assets/JHLogo.png"
import JH2 from "../../assets/JH2.png"
import Github from "../../assets/Github.png"
import Email from "../../assets/Email.png"


// React Class Component
class Footer extends Component {
    constructor(){
        super()

         this.state ={}
    }

    render() {
        return (
            <div className="Footer">
                <div className="Footer_icons">
                    <img src={Github} className="Github" alt="Github"/>
                    <img src={Email} className="Footer_Email" alt="Email"/>
                    <img src={LinkedIN} className="LinkedIN" alt="LinkedIN"/>
                </div>
                <div className="Copywrite">Built by Jenn Houck <div className="Divider">|</div> © 2020</div>
                <div className="JHLogo">
                    <img src={JHLogo} className="JHLogo" alt="JHLogo"/>
                </div>
            </div>
        )
    }
}

export default Footer

