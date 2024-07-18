import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import template1 from "../assets/template3.png";
import axios from "axios";

export default function MyResumes() {
  const [resumes, setResumes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/resume/getResumes`, {
        withCredentials: true,
      })
      .then((res) => {
        setResumes(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className=" h-screen w-screen justify-center items-center flex">
        <h1 className=" text-4xl font-medium text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-screen bg-richblack-900 px-10 py-20 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl p-4 mb-10 font-bold text-center text-blue-200">
          My Resumes
        </h1>
        <div className=" container w-full flex flex-col">
          {resumes.map((resume) => (
            <div key={resume?._id}>
              <img className=" w-80" src={template1} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
