import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "react-quill/dist/quill.snow.css"; // import styles for react-quill
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalIndex } from "../../redux/slices/globalIndexSlice";
import { setCertificationsDetails } from "../../redux/slices/resumeSlice"; // Import setFormData action
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { setResume } from "../../redux/slices/resumeSlice";

export default function CertificationDetails() {
  const { globalIndex } = useSelector((state) => state.globalIndex);
  const { index } = useParams();
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [formDetails, setFormDetails] = useState({
    organization: "",
    title: "",
    date: "",
  });
  const navigate = useNavigate();
  const {
    personalDetails,
    contactDetails,
    educationDetails,
    experienceDetails,
    certificationsDetails,
    resume,
  } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(
      setResume({
        personalDetails,
        contactDetails,
        educationDetails,
        experienceDetails,
        certificationsDetails,
      })
    );
  }, [dispatch]);

  const handleChange = (e) => {
    setFormDetails((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/resume/createResume`, resume, {
        withCredentials: true,
      })
      .then((res) => console.log(res.data.message))
      .catch((error) => console.error(error));
  };

  const handleNext = () => {
    const newdata = {
      ...formDetails,
      Description: description,
    };
    navigate(`/viewResume/${index}`);
    dispatch(setCertificationsDetails(newdata));
    handleSubmit();
  };

  return (
    <div className="p-6 h-full w-full bg-richblack-700 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Award/Certification
        </h1>
        <button className="text-blue-500 font-medium">Add Info</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="organization" className="text-gray-700 mb-2">
            Name of Organization
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="organization"
            placeholder="Steve Jobs Designers"
            value={formDetails.organization}
            onChange={handleChange}
            name="organization"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-700 mb-2">
            Award Title <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="text"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="title"
            placeholder="La Michael Angelo Award"
            value={formDetails.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-gray-700 mb-2">
            Date of Acquisition
          </label>
          <input
            type="date"
            className="p-3 rounded border border-gray-300 bg-gray-100 text-black"
            id="date"
            placeholder="03/03/1998"
            value={formDetails.date}
            onChange={handleChange}
            name="date"
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-white font-medium mb-2">Description</h2>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Enter description..."
          className="bg-white text-black"
        />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div
          onClick={() => dispatch(setGlobalIndex(globalIndex - 1))}
          className="cursor-pointer py-[0.7rem] px-3 text-gray-500 hover:text-black hover:bg-richblack-500 rounded-full transition duration-300"
        >
          <ArrowBackIcon />
        </div>

        <button
          onClick={() => handleNext()}
          className="py-3 px-6 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
