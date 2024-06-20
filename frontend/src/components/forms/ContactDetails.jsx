import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalIndex } from "../../redux/slices/globalIndexSlice";
import { setContactDetails } from "../../redux/slices/resumeSlice";

export default function ContactDetails() {
  const { globalIndex } = useSelector((state) => state.globalIndex);
  const dispatch = useDispatch();

  const [formDetails, setFormDetails] = useState({
    email: "",
    phone: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    portfolio: "",
    github: "",
  });

  const handleChange = (e) => {
    setFormDetails((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    console.log("submited");
    dispatch(setContactDetails(formDetails));
    dispatch(setGlobalIndex((globalIndex + 1) % 5));
  };

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
            value={formDetails.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 mb-2">
            Phone number
          </label>
          <div className="flex items-center border border-gray-300 bg-gray-100 rounded">
            <input
              type="text"
              className="bg-gray-100 text-black w-full p-3"
              id="phone"
              placeholder="1448 90-9 28765"
              value={formDetails.phone}
              onChange={handleChange}
              name="phone"
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
            value={formDetails.linkedin}
            onChange={handleChange}
            name="linkedin"
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
            value={formDetails.twitter}
            onChange={handleChange}
            name="twitter"
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
            value={formDetails.instagram}
            onChange={handleChange}
            name="instagram"
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
            value={formDetails.portfolio}
            onChange={handleChange}
            name="portfolio"
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
            value={formDetails.github}
            onChange={handleChange}
            name="github"
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
          onClick={handleNext}
          className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300"
        >
          Next session
        </button>
      </div>
    </div>
  );
}
