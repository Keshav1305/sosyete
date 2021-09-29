import React from 'react';

import "./Contact.styles.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__title">
        <h2>CONTACT US</h2>
      </div>
      <div className="contact__form">
        <p className="form-header">Have some questions about our activities? Want to get in touch? Contact us now using the form below.</p>
        <form>
          <div className="form-input">
            <label for="name">Your Name (required)</label>
            <input name="name" type="text" placeholder="Name" />
          </div>
          <div className="form-input">
            <label for="email">Your Email (required)</label>
            <input name="email" type="email" placeholder="example@example.com" />
          </div>
          <div className="form-input">
            <label for="subject">Subject</label>
            <input name="subject" type="text" placeholder="Subject" />
          </div>
          <div className="form-input">
            <label for="message">Your Message</label>
            <textarea name="message" type="text" rows="8" placeholder="Your Message" />
          </div>
          <button>Submit Request</button>
        </form>
        <p className="form-footer">It is our policy to take all necessary steps to ensure that all your Personal Information held by us is processed fairly and lawfully. We will take all necessary steps to implement and maintain this Privacy Policy. </p>
      </div>
    </div>
  );
}