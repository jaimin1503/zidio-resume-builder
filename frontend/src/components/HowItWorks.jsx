import React from "react";
import img1 from "./assets/step1.png";
import img2 from "./assets/step2.png";
import img3 from "./assets/step3.png";

const HowItWorks = () => {
  return (
    <div className="text-center bg-richblack-900 text-white px-10 py-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-blue-300 mb-4">
        HOW IT WORKS
      </h1>
      <p className="text-xl mb-10">Simple Steps to Your Dream Job</p>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="step border-2 rounded-2xl p-6 w-72 h-72 border-blue-400 text-center mb-10 lg:mb-0">
          <img src={img1} alt="Step 1" className="mx-auto w-40 mb-4" />{" "}
          {/* Replace with actual path */}
          <div className=" flex items-center">
            <h2 className="text-6xl opacity-60 font-bold text-blue-300">1</h2>
            <p className="mt-2 font-bold ml-1 text-md text-start">
              Pick a design that suits your style and industry.
            </p>
          </div>
        </div>
        <div className="step border-2 rounded-2xl p-6 w-72 h-72 border-blue-400 text-center mb-10 lg:mb-0">
          <img src={img2} alt="Step 2" className="mx-auto w-40 mb-4" />{" "}
          {/* Replace with actual path */}
          <div className=" flex items-center">
            <h2 className="text-6xl opacity-60 font-bold text-blue-300">2</h2>
            <p className="mt-2 font-bold ml-1 text-md text-start">
              Add your details, skills, and experience with our easy editor.
            </p>
          </div>
        </div>
        <div className="step border-2 rounded-2xl p-6 w-72 h-72 border-blue-400 text-center">
          <img src={img3} alt="Step 3" className="mx-auto w-40 mb-4" />{" "}
          {/* Replace with actual path */}
          <div className=" flex items-center">
            <h2 className="text-6xl opacity-60 font-bold text-blue-300">3</h2>
            <p className="mt-2 font-bold text-md ml-1 text-start">
              Save your résumé in multiple formats and share it with employers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
