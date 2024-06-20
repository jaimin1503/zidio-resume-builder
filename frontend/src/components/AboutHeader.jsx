import React from "react";
import cvImage from "../assets/cvimage.png";
import cvImage2 from "../assets/cvimage2.png";
import cvImage3 from "../assets/cvimage3.png";
import coffeeResume from "../assets/coffee-resume.jpg";

export default function AboutHeader() {
  return (
    <div className="w-full h-full py-32 px-10 text-white lg:text-left flex flex-col bg-richblack-900 justify-center items-center relative overflow-hidden">
      <div className="w-full pb-10 mb-8 flex flex-col justify-center items-center">
        <p className="text-4xl lg:text-6xl font-bold text-blue-200  lg:px-10">
          About ResumeHub
        </p>
        <p>All your resume needs in one place</p>
      </div>
      <img
        src={coffeeResume}
        className="w-[80%] lg:w-[50%] rounded-lg absolute -bottom-24 lg:-bottom-52 md:-bottom-52 -rotate-12"
        alt=""
      />
    </div>
  );
}
