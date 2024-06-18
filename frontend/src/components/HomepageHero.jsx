import { Link } from "react-router-dom";
import cvImage from "../assets/cvimage.png";
import cvImage2 from "../assets/cvimage2.png";
import cvImage3 from "../assets/cvimage3.png";

export default function HomepageHero() {
  return (
    <div className="flex flex-col justify-center items-center bg-richblack-900 w-full h-auto px-10 pb-5 relative">
      <div className="text-section lg:px-4 mt-10 lg:mt-24 flex flex-col justify-center items-center text-wrap">
        <p className="text-sm font-medium uppercase text-white">
          Create a Professional Resume in Minutes
        </p>
        <p className="text-3xl lg:text-5xl font-bold text-blue-200 px-0 lg:px-10 text-center py-4">
          Design a Resume That Captures Employers' Attention
        </p>
        <p className="text-sm lg:text-xl text-center font-medium text-pure-greys-300 ">
          Polish Your Resume with Our Expert Templates
        </p>
        <Link
          to={"/templates"}
          className=" text-white cursor-pointer bg-blue-200 hover:bg-blue-500 rounded-md my-5 py-2 px-5 w-fit"
        >
          Build your resume
        </Link>
      </div>
      <div className="images w-full p-4 flex justify-center relative overflow-hidden">
        <img
          src={cvImage2}
          className="w-[50%] lg:w-[30%] absolute left-5 lg:left-16 top-10"
          alt="cv"
        />
        <img src={cvImage} className="w-[50%] lg:w-[30%] z-10" alt="cv" />
        <img
          src={cvImage3}
          className="w-[50%] lg:w-[30%] absolute right-5 lg:right-16 top-10 scale-x-[-1]"
          alt="cv"
        />
      </div>
    </div>
  );
}
