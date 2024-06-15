import React, { useEffect } from "react";
import "./Card.css";
import cvImage from "../assets/cvimage.png";
import fillintheblank from "../assets/fillintheblank.jpg";
import design from "../assets/design.png";
// import cvImage from "../assets/cvimage.png";

const Card = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card");
      const windowHeight = window.innerHeight;

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="cardscont bg-richblack-900">
      <div className="card">
        <img src={cvImage} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
          <h4>Pick a CV template</h4>
          <p className="card-text">
            Choose a sleek design and layout to get started.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src={fillintheblank}
          className="card-img-top"
          alt="Card image cap"
        />
        <div className="card-body">
          <h4>Fill in the blanks</h4>
          <p className="card-text">
            Type in a few words. Let the ProResumeHub wizard fill the rest.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={design} className="card-img-top" alt="Card image cap" x />
        <div className="card-body">
          <h4>Customize your document.</h4>
          <p className="card-text">
            Make it truly yours. Uniqueness in a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
