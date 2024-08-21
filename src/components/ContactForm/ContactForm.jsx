import React from 'react';
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className="contact-form-container">
        <h1>Get in Touch with us</h1>
        <form>
            <div className="form-row">
                <div className="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" />
                </div>
                <div className="form-group">
                    <label for="second-name">Second Name</label>
                    <input type="text" id="second-name" name="second-name"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label for="contact-number">Contact Number</label>
                    <input type="text" id="contact-number" name="contact-number" />
                </div>
            </div>
            <div className="form-group full-width">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <button className="git-button">SEND</button>
        </form>
    </div>
  )
}

export default ContactForm