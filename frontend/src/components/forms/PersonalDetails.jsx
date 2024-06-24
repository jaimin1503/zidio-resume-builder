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
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setFormdata((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNextSession = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill out all required fields.");
      return;
    }

    dispatch(setGlobalIndex((globalIndex + 1) % 6));
    console.log("submitted");
    const newData = {
      ...formdata,
      description,
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

  const validateForm = () => {
    const errors = {};
    if (!formdata.firstName) errors.firstName = "First name is required";
    if (!formdata.lastName) errors.lastName = "Last name is required";
    if (!formdata.profession) errors.profession = "Profession is required";
    if (!formdata.address) errors.address = "Address is required";
    if (!formdata.city) errors.city = "City is required";
    if (!formdata.state) errors.state = "State is required";
    if (!formdata.zipCode) errors.zipCode = "Zip code is required";
    if (!description) errors.description = "Description is required";
    return errors;
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
          {errors.firstName && (
            <span className="text-red-100">{errors.firstName}</span>
          )}
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
          {errors.lastName && (
            <span className="text-red-100">{errors.lastName}</span>
          )}
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
          {errors.profession && (
            <span className="text-red-100">{errors.profession}</span>
          )}
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
          {errors.address && (
            <span className="text-red-100">{errors.address}</span>
          )}
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
          {errors.city && <span className="text-red-100">{errors.city}</span>}
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
          {errors.state && <span className="text-red-100">{errors.state}</span>}
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
          {errors.zipCode && (
            <span className="text-red-100">{errors.zipCode}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="fileUpload" className=" text-white mb-2">
            Upload Photo
          </label>
          <button
            onClick={handleUploadClick}
            className="p-3 rounded border border-gray-300 bg-gray-100 text-blue-200"
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
        {errors.description && (
          <span className="text-red-100">{errors.description}</span>
        )}
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
