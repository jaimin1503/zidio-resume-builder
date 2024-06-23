import React from "react";
import { Link } from "react-router-dom";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";
import Navbar from "../components/Navbar";

export default function Templates() {
  const templates = [
    { src: template1, alt: "Template 1" },
    { src: template2, alt: "Template 2" },
    { src: template3, alt: "Template 3" },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-richblack-900 px-10 py-10 text-white flex flex-col justify-center">
        <h1 className="text-4xl p-4 mb-10 font-bold text-center text-blue-200">
          Select your resume template
        </h1>
        <div className="w-full flex flex-wrap justify-items-start">
          {templates.map((template, index) => (
            <div key={index} className="m-4">
              <Link to={`/fillDetails/${index}`}>
                <img
                  src={template.src}
                  alt={template.alt}
                  className=" w-72 object-cover rounded-lg border-2 border-white hover:border-blue-200 transition duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
