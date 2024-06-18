import react from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import Template3 from "../components/templates/Template3";

export default function Templates() {

  return (
    <>
      <div className="w-full bg-richblack-900 px-10 py-20 text-white flex flex-col justify-center">
        <h1 className="text-4xl p-4 mb-10 font-bold text-center text-blue-200">
          Select your resume template
        </h1>
        <div className="w-full flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <Link to="/fillDetails">
              <Template1 />
            </Link>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <Link to="/fillDetails">
              <Template2 />
            </Link>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <Link to="/fillDetails">
              <Template3 />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
