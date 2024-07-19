import React from "react";
import { useSelector } from "react-redux";

const Template3 = ({ resume }) => {
  return (
    <>
      <p>Template 3</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden text-black p-6 w-[210mm] h-[297mm]">
        <div className="flex flex-col items-center lg:flex-row">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {resume?.personalDetails?.firstName +
              " " +
              resume?.personalDetails?.lastName}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {resume?.experienceDetails[0]?.role}
          </p>
        </div>
        <hr className="my-4" />
        <div className="my-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: resume?.personalDetails?.description,
            }}
          ></p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Redux</li>
            <li>Node.js, Express</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Experience
          </h2>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800">
              {resume?.experienceDetails[0]?.role}
            </h3>
            <p className="text-gray-600">
              {resume?.experienceDetails[0]?.company}
              <span className=" mx-4">
                {" "}
                {resume?.experienceDetails[0]?.employerStart}
                {resume?.experienceDetails[0]?.employerFinish}
              </span>
            </p>

            <p
              dangerouslySetInnerHTML={{
                __html: resume?.experienceDetails[0]?.description,
              }}
            ></p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Web Developer</h3>
            <p className="text-gray-600">ABC Solutions - 2018-2020</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Built responsive websites using HTML, CSS, and JavaScript.
              </li>
              <li>
                Collaborated with designers to create visually appealing
                layouts.
              </li>
            </ul>
          </div>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Education
          </h2>
          <div>
            <h3 className="font-bold text-gray-800">
              {resume?.educationDetails[0]?.course}
            </h3>
            <p className="text-gray-600">
              {resume?.educationDetails[0]?.institutionName} - 2014-2018
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template3;
