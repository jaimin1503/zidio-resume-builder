import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "react-quill/dist/quill.snow.css"; // import styles for the editor
import ReactQuill from "react-quill";

export default function ExperienceDetails({ index, setIndex }) {
  const [description, setDescription] = useState("");

  return (
    <div className="p-6 h-full w-full bg-richblack-700 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Experience</h1>
        <button className="text-blue-200 font-medium">Add Info</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="employer" className="text-gray-700 mb-2">
            Employer
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="employer"
            placeholder="Google designers HQ"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="company" className="text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="company"
            placeholder="Alphabet"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="address"
            placeholder="Mountain View, California, United States"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="role" className="text-gray-700 mb-2">
            Role
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="role"
            placeholder="Senior Product designer"
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-gray-700 font-medium mb-2">Time Period</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="start" className="text-gray-700 mb-2">
              Start
            </label>
            <input
              type="date"
              className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
              id="start"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="finish" className="text-gray-700 mb-2">
              Finish
            </label>
            <input
              type="date"
              className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
              id="finish"
              placeholder="MM/YY"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" id="currently" />
              <label htmlFor="currently" className="text-gray-700">
                Currently work here
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="description" className="text-gray-700 font-medium mb-2">
          Description
        </label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          className=" bg-white text-black"
        />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div
          onClick={() => setIndex(index - 1)}
          className="cursor-pointer py-[0.7rem] px-3 text-gray-500 hover:text-black hover:bg-richblack-500 rounded-full transition duration-300"
        >
          <ArrowBackIcon />
        </div>
        <button
          onClick={() => setIndex((index + 1) % 5)}
          className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300"
        >
          Next session
        </button>
      </div>
    </div>
  );
}
