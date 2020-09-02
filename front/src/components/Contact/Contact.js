import React, { Component } from 'react'
import "./Contact.css"

// React Class Component
class Contact extends Component {
    constructor(){
        super()
         this.state ={}
    }

    render() {
        return (
            <div className="Contact">
                <div className="yellow_box">
                    <h1 className="Contact_title">Contact.</h1>
                    <div className="Content_button_wrapper">
                    <p className="Contact_text">
                    <bold>Want to collaborate? </bold> Looking for a dev with mad skills? <br />I’m always open to discussing new projects or partnerships. 
                    </p>
                    <button class="Contact_button">CONTACT ME</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

