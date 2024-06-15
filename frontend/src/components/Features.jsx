import React, { useState } from "react";
import img1 from "./assets/step1.png";
import img2 from "./assets/step2.png";
import img3 from "./assets/step3.png";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    {
      title: "Professional Templates",
      body: "Choose from a variety of professionally designed resume templates that will make your resume stand out.",
    },
    {
      title: "Easy Customization",
      body: "Easily customize your resume with our intuitive interface. Add, remove, and rearrange sections to suit your needs.",
    },
    {
      title: "User-Friendly Interface",
      body: "Our user-friendly interface makes it simple to create a polished resume quickly and efficiently.",
    },
  ];

  return (
    <div className="text-center bg-white text-blue-300 w-full py-20 px-10 h-full relative">
      <h1 className="text-5xl font-bold text-richblack-900 mb-20 px-10">
        FEATURES
      </h1>
      <div className="w-full h-full flex flex-row justify-center items-center px-20">
        <div className="w-1 mr-20 relative bg-richblack-900 flex flex-col items-center justify-center h-full">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setActiveFeature(num)}
              className={`z-10 w-12 h-12 rounded-full text-white font-bold my-6 ${
                activeFeature === num ? "bg-richblack-900 " : "bg-richblack-200"
              } transition-colors duration-300`}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="lg:w-full w-80 p-10 lg:p-20 text-left bg-richblack-900 border-2 border-blue-200 border-opacity-90 text-white rounded-lg">
          <h2 className="text-2xl lg:text-5xl font-bold mb-2 whitespace-nowrap">
            {features[activeFeature - 1].title}
          </h2>
          <p>{features[activeFeature - 1].body}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
