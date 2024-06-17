import { Link } from "react-router-dom";
import cvImage from "../assets/cvimage.png";
import cvImage2 from "../assets/cvimage2.png";
import cvImage3 from "../assets/cvimage3.png";

export default function HomepageHero() {
  return (
// <<<<<<< main
//     <div className="flex flex-col justify-center items-center bg-richblack-900 w-full h-auto px-10 pb-5 relative">
//       <div className="text-section lg:px-4 mt-10 lg:mt-24 flex flex-col justify-center items-center text-wrap">
//         <p className="text-sm font-medium uppercase text-white">
//           Create a Professional Resume in Minutes
//         </p>
//         <p className="text-4xl lg:text-5xl font-bold text-blue-200 px-0 lg:px-10 text-center py-4">
//           Design a Resume That Captures Employers' Attention
//         </p>
//         <p className="text-sm lg:text-xl text-center font-medium text-pure-greys-300 ">
//           Polish Your Resume with Our Expert Templates
//         </p>
//         <Link
//           to={"/fillDetails"}
//           className=" text-white cursor-pointer bg-blue-200 hover:bg-blue-500 rounded-md my-5 py-2 px-5 w-fit"
//         >
//           Build your resume
//         </Link>
// =======
    <>
      <div className="container flex flex-col lg:flex-row justify-center mx-auto">
        <div className="text-section sm:p-4 flex flex-col justify-center text-wrap ">
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
// >>>>>>> main
      </div>
      <div className="images w-full p-4 flex justify-center relative overflow-hidden">
        <img
          src={cvImage2}
          className=" w-[30%] absolute left-16 top-10"
          alt="cv"
        />

        <img src={cvImage} className=" w-[30%] z-10" alt="cv" />

        <img
          src={cvImage3}
          className=" w-[30%] absolute right-16 top-10 scale-x-[-1]"
          alt="cv"
        />
      </div>
    </div>
  );
}
