import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-richblack-900">
      <div className="footer-content flex gap-10 lg:gap-6 flex-col lg:flex-row">
        <div className="footer-section about">
          <h2 className="text-xl font-bold text-blue-200">About Us</h2>
          <p>
         ResumeHub is a open source Resume Builder.Build your own resume with our ResumeHub.       
            </p>
        </div>
        <div className="footer-section links">
          <h2 className="text-xl font-bold text-blue-200">Quick Links</h2>
          <ul>
            <li>
              <a className="hover:text-blue-200" href="/">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-200" href="/about">About</a>
            </li>
            <li>
              <a className="hover:text-blue-200" href="/services">Services</a>
            </li>
            <li>
              <a className="hover:text-blue-200" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2 className="text-xl font-bold text-blue-200">Contact Us</h2>
          <form action="#" method="post">
            <input
              type="email"
              name="email"
              className="text-input contact-input rounded-md"
              placeholder="Your email address"
            />
            <textarea
              rows="4"
              name="message"
              className="text-input contact-input rounded-md"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn rounded-md bg-blue-200">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom text-left text-sm">
        &copy; 2024 Company Name | Designed by You
      </div>
    </footer>
  );
};

export default Footer;
