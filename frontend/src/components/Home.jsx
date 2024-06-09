import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    const content1 = document.querySelector(".content-1");
    const content2 = document.querySelector(".content-2");

    setTimeout(() => {
      content1.classList.add("visible");
    }, 200); // Add a delay of 200ms for the first content
    setTimeout(() => {
      content2.classList.add("visible");
    }, 400); // Add a delay of 400ms for the second content
  }, []);
  return (
    <div className="container-fluid cf">
      <div className="content">
        <div className="content-1">
          Get your Dream Job with our resume builder
        </div>
        <div className="content-2">
          Build a professional and outstanding resume with our free builder and
          templates
        </div>
      </div>

      <div className="resume-button">
        <button type="button" className="btn  crbtn">
          Create My Resume
        </button>
        <button type="button" class="btn crbtn2">
          Upload Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
