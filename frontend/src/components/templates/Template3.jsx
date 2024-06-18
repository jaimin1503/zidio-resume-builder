import React from "react";

const Template3 = () => {
  return (
    <>
      <p>Template 3</p>
      <div className="bg-white shadow-md rounded-lg overflow-hidden text-black p-6 w-[210mm] h-[297mm]">
        <div className="flex flex-col items-center lg:flex-row">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h1>
          <p className="text-lg text-gray-600 mb-4">Web Developer</p>
        </div>
        <hr className="my-4" />
        <div className="my-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-700">
            Experienced web developer with a passion for creating responsive and
            user-friendly applications. Skilled in React, JavaScript, and CSS.
          </p>
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
            <h3 className="font-bold text-gray-800">Frontend Developer</h3>
            <p className="text-gray-600">XYZ Tech - 2020-Present</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed user interfaces using React and Tailwind CSS.</li>
              <li>Implemented state management with Redux.</li>
            </ul>
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
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600">University of Tech - 2014-2018</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template3;
