import { Link } from "react-router-dom";
import cvImage from "../assets/cvimage.png";

export default function HomepageHero() {
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-center mx-auto">
        <div className="text-section p-4 flex flex-col justify-center text-wrap ">
          <p className=" text-2xl font-medium uppercase text-pure-greys-300 mx-10">
            Create a Professional Resume in Minutes
          </p>
          <p className=" text-5xl font-bold text-blue-200 mx-10 max-w-lg py-4">
            Design a Resume That Captures Employers' Attention.
          </p>
          <p className="text-2xl font-medium text-pure-greys-300 mx-10">
            Polish Your Resume with Our Expert Templates.
          </p>
          <Link
            to={"/fillDetails"}
            className=" text-white cursor-pointer bg-blue-400 hover:bg-blue-500 rounded-md mx-10 my-5 py-2 px-5 w-fit"
          >
            Build your resume
          </Link>
        </div>
        <div className="images w-1/2 p-4 lg:flex lg:justify-center hidden">
          <img src={cvImage} className=" w-[60%]" alt="cv" />
        </div>
      </div>
    </>
  );
}
