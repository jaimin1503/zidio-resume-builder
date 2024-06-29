import React, { useState, useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalIndex } from "../../redux/slices/globalIndexSlice";
import "react-quill/dist/quill.snow.css"; // import styles for the editor
import ReactQuill from "react-quill";
import { setPersonalDetails, setResume } from "../../redux/slices/resumeSlice";
import axios from "axios";
import toast from "react-hot-toast";

export default function PersonalDetails() {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { globalIndex } = useSelector((state) => state.globalIndex);
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    discription: description,
  });

  const handleOnChange = (e) => {
    setFormdata((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFilePreview(URL.createObjectURL(file));
  };

  const handleNextSession = () => {
    dispatch(setGlobalIndex((globalIndex + 1) % 6));
    console.log("submited");
    const newData = {
      ...formdata,
      Description: description,
    };

    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/resume/createResume`,
        { personalDetails: newData },
        { withCredentials: true }
      )
      .then((res) => {
        dispatch(setResume(res.data.data));
        toast.success(res.data.message);
      });
    dispatch(setPersonalDetails(newData));
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-6 h-full w-full bg-richblack-700 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Personal Information</h1>
        <button className="text-blue-200 font-medium">Add Info</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="text-gray-700 mb-2">
            First name
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="firstname"
            placeholder="John"
            name="firstName"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className="text-gray-700 mb-2">
            Last name
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="lastname"
            placeholder="Doe"
            name="lastName"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="profession" className="text-gray-700 mb-2">
            Profession
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="profession"
            placeholder="Software Engineer"
            name="profession"
            onChange={handleOnChange}
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
            placeholder="St James street New Jersey"
            name="address"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="city"
            placeholder="Janes Inn"
            name="city"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="state" className="text-gray-700 mb-2">
            State
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="state"
            placeholder="New Jersey"
            name="state"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="zip" className="text-gray-700 mb-2">
            Zip Code
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="zip"
            placeholder="123789"
            name="zipCode"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fileUpload" className=" text-white mb-2">
            Upload Photo
          </label>
          <button
            onClick={handleUploadClick}
            className="p-3 rounded border border-gray-300 bg-gray-100 text-blue-200 hover:bg-blue-200 hover:border-white hover:text-white"
          >
            Choose File
          </button>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            id="fileUpload"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {selectedFile && (
            <div className="mt-2 text-white">
              Selected file: {selectedFile.name}
              <div className="mt-2">
                <img
                  src={filePreview}
                  alt="Preview"
                  className="max-w-full max-h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="description" className="text-gray-700 font-medium">
          Professional Summary
        </label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          className="bg-white text-black"
          style={{ width: "100%", height: "100%", marginTop: "0.5rem" }}
        />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="py-[0.7rem] px-3 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full transition duration-300 cursor-not-allowed">
          <ArrowBackIcon />
        </div>
        <button
          onClick={handleNextSession}
          className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300"
        >
          Next session
        </button>
      </div>
    </div>
  );
}
