import React from "react";
import { Link } from "react-router-dom";

export default function AboutCta() {
  return (
    <div className="bg-white text-richblack-900 flex flex-col-reverse lg:flex-row justify-center items-center px-10 pb-20">
      <div className="w-full text-center bg-richblack-900 rounded-md py-20 lg:py-40 px-10 flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold text-blue-300 mb-4">
          START YOUR JOURNEY NOW!
        </h2>
        <Link
          to={"/templates"}
          className=" text-white text-2xl cursor-pointer bg-blue-200 hover:bg-blue-500 rounded-md my-5 py-2 px-5"
        >
          Build your resume
        </Link>
      </div>
    </div>
  );
}
