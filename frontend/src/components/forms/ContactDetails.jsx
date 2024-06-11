import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalIndex } from "../../redux/slices/globalIndexSlice";

export default function ContactDetails() {
  const { globalIndex } = useSelector((state) => state.globalIndex);
  const dispatch = useDispatch();
  return (
    <div className="p-6 h-full w-full bg-richblack-700 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Contact Information
        </h1>
        <button className="text-blue-500 font-medium">Add Info</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-2">
            Email address
          </label>
          <input
            type="email"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="email"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 mb-2">
            Phone number
          </label>
          <div className="flex items-center border border-gray-300 bg-gray-100 rounded">
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg"
              alt="UK Flag"
              className="w-6 h-4 mr-2"
            /> */}
            <input
              type="text"
              className="bg-gray-100 text-black w-full p-3"
              id="phone"
              placeholder="1448 90-9 28765"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="text-gray-700 mb-2">
            Linkedin Profile link
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="linkedin"
            placeholder="Linkedin/johndoe.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="twitter" className="text-gray-700 mb-2">
            Twitter Profile link
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="twitter"
            placeholder="Twitter/johndoe.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="instagram" className="text-gray-700 mb-2">
            Instagram Profile link
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="instagram"
            placeholder="Instagram/johndoe.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="portfolio" className="text-gray-700 mb-2">
            Portfolio link
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="portfolio"
            placeholder="Johnd.netlify.app"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="github" className="text-gray-700 mb-2">
            Github profile link
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="github"
            placeholder="Github/johnie.com"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div
          onClick={() => dispatch(setGlobalIndex(globalIndex - 1))}
          className="cursor-pointer py-[0.7rem] px-3 text-gray-500 hover:text-black hover:bg-richblack-500 rounded-full transition duration-300"
        >
          <ArrowBackIcon />
        </div>
        <button
          onClick={() => dispatch(setGlobalIndex((globalIndex + 1) % 5))}
          className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300"
        >
          Next session
        </button>
      </div>
    </div>
  );
}
