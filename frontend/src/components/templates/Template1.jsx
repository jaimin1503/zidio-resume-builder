import React from "react";

function Template1() {
  return (
    <>
      <p>Template 1</p>
      <div className="bg-white text-black shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-[210mm] h-[297mm]">
        <div className="bg-gray-200 p-4 lg:w-1/3 flex flex-col">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">CONTACT</h2>
            <p className="mb-2">123-456-7890</p>
            <p className="mb-2">hello@site.com</p>
            <p className="mb-2">www.site.com</p>
            <p>123 Anywhere St., Any City</p>
          </div>
          <hr className="my-4" />
          <div className="mb-4">
            <h2 className="text-lg font-semibold">SKILLS</h2>
            <p className="mb-2">Skill 1</p>
            <p className="mb-2">Skill 2</p>
            <p className="mb-2">Skill 3</p>
          </div>
          <hr className="my-4" />
          <div className="mb-4">
            <h2 className="text-lg font-semibold">EDUCATION</h2>
            <div className="mb-2">
              <h3 className="text-base font-semibold">Degree Name</h3>
              <p>Institution Name</p>
              <p className="text-gray-600">2016-2018</p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Degree Name</h3>
              <p>Institution Name</p>
              <p className="text-gray-600">2016-2018</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 lg:w-2/3">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold">JONATHAN PATTERSON</h1>
            <p className="text-lg text-gray-600">GRAPHIC DESIGNER</p>
          </div>
          <hr className="my-4" />
          <div className="mb-4">
            <h2 className="text-xl font-bold">PROFILE</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sagittis pretium nisl, nec commodo est.
            </p>
          </div>
          <hr className="my-4" />
          <div className="mb-4">
            <h2 className="text-xl font-bold">WORK EXPERIENCE</h2>
            <div className="mb-2">
              <h3 className="text-lg font-semibold">Job Position</h3>
              <p className="text-gray-600">Company | 2020-2022</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Fusce laoreet consequat sapien, eu fermentum ex pulvinar.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Job Position</h3>
              <p className="text-gray-600">Company | 2020-2022</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Fusce laoreet consequat sapien, eu fermentum ex pulvinar.
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      </div>
    </>
  );
}

export default Template1;
