import React from "react";
import cvImage2 from "../assets/cvimage2.png";

export default function AboutContent() {
  return (
    <div className="bg-white text-richblack-900 flex flex-col-reverse lg:flex-row gap-10 justify-center items-center px-10 py-20">
      <div className="w-full lg:w-1/2">
        <h2 className="text-5xl font-bold text-blue-300 mb-4"> Who are we?</h2>
        <p>
          Welcome to ResumeHub, the premier web application designed to make
          creating professional resumes quick and easy. Our mission is to
          empower job seekers with the tools they need to craft resumes that
          capture the attention of potential employers and highlight their
          strengths and achievements.
        </p>
      </div>
      <div className="flex w-full lg:w-1/2 h-60 lg:h-96 rounded-lg bg-cover justify-center">
        <img
          src={cvImage2}
          className="w-full h-full object-cover  rounded-lg"
          alt="cv-image"
        />
      </div>
    </div>
  );
}
