import React from "react";

const Template2 = () => {
  return (
    <>
      <p>Template 2</p>
      <div className="bg-white text-black shadow-lg rounded-lg overflow-hidden p-6 w-full h-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-500">Jane Smith</h1>
          <p className="text-lg text-gray-600">Marketing Specialist</p>
        </div>
        <div className="flex flex-col lg:flex-row mb-6">
          <div className="lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold">Profile</h2>
            <p className="text-gray-700">
              Results-driven marketing specialist with 5+ years of experience in
              digital marketing campaigns and content strategy.
            </p>
          </div>
          <div className="lg:w-1/2 pl-4">
            <h2 className="text-lg font-bold">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>SEO, SEM</li>
              <li>Content Marketing</li>
              <li>Social Media Management</li>
            </ul>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">Experience</h2>
          <div className="mb-4">
            <h3 className="font-bold">Marketing Manager</h3>
            <p>XYZ Corporation - 2018-Present</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed and executed digital marketing strategies.</li>
              <li>Managed social media platforms and campaigns.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Content Strategist</h3>
            <p>ABC Marketing - 2015-2018</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Created engaging content for online and offline channels.</li>
              <li>Analyzed campaign performance and optimized strategies.</li>
            </ul>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">Education</h2>
          <div>
            <h3 className="font-bold">Master of Business Administration</h3>
            <p>ABC University - 2014-2016</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template2;
