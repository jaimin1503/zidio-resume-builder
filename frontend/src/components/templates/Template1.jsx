import React from "react";

function Template1() {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ width: "210mm", height: "297mm" }}
    >
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="bg-gray-200 p-8 w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">CONTACT</h2>
            <p className="mb-2">123-456-7890</p>
            <p className="mb-2">hello@reallygreatsite.com</p>
            <p className="mb-2">www.reallygreatsite.com</p>
            <p className="mb-8">123 Anywhere St., Any City</p>
          </div>
          <hr />
          <div>
            <h2 className="text-xl font-semibold mb-4">SKILLS</h2>
            <p className="mb-2">Skill name here</p>
            <p className="mb-2">Your Skill</p>
            <p className="mb-2">Special skills</p>
            <p className="mb-8">List your skills</p>
          </div>
          <hr />
          <div className=" my-4">
            <h2 className="text-xl font-semibold mb-4">EDUCATION</h2>
            <div className="mb-2">
              <h3 className="text-lg font-semibold">Your Degree Name</h3>
              <p>Your Institution Name</p>
              <p className="text-gray-600">2016-2018</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Your Degree Name</h3>
              <p>Your Institution Name</p>
              <p className="text-gray-600">2016-2018</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <hr />
          <div className=" mb-4">
            <h2 className="text-xl font-semibold m-4">LANGUAGES</h2>
            <p className="mb-0">English</p>
            <p className="mb-0">German</p>
            <p className="mb-0">Spanish</p>
          </div>
          <hr />
          <div>
            <h2 className="text-xl font-semibold mb-4">HOBBIES</h2>
            <p className="mb-0">Hobby 1</p>
            <p className="mb-0">Hobby 2</p>
            <p className="mb-0">Hobby 3</p>
            <p className="mb-0">Hobby 4</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 w-2/3">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              JONATHAN PATTERSON
            </h1>
            <p className="text-lg text-gray-600">GRAPHIC DESIGNER</p>
          </div>
          <hr />
          <div className="mb-8 mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">PROFILE</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sagittis pretium nisl, nec commodo est. Fusce laoreet consequat
              sapien, eu fermentum ex pulvinar eget. Praesent hendrerit nulla in
              varius pharetra. Fusce facilisis venenatis lacus in lobortis.
              Fusce vulputate iaculis mauris. Nunc risus arcu, tempor vel
              dignissim porta, vulputate id quam.
            </p>
          </div>
          <hr />
          <div className="mb-8 mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Your Job Position here
              </h3>
              <p className="text-gray-600">Company name | 2020-2022</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Fusce laoreet consequat sapien, eu fermentum ex pulvinar eget.
                </li>
                <li>Praesent hendrerit nulla in varius pharetra.</li>
                <li>
                  Nunc risus arcu, tempor vel dignissim porta, vulputate id
                  quam.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Your Job Position here
              </h3>
              <p className="text-gray-600">Company name | 2020-2022</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Fusce laoreet consequat sapien, eu fermentum ex pulvinar eget.
                </li>
                <li>Praesent hendrerit nulla in varius pharetra.</li>
                <li>
                  Nunc risus arcu, tempor vel dignissim porta, vulputate id
                  quam.
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className=" my-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">CERTIFICATES</h2>
              <div className=" flex gap-10">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Certificate Name</h3>
                  <p>Issuing Organization</p>
                  <p className="text-gray-600">Date Issued</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Certificate Name</h3>
                  <p>Issuing Organization</p>
                  <p className="text-gray-600">Date Issued</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
