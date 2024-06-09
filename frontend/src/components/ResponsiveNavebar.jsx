import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const ResponsiveNavebar = ({ toggleDrawer }) => {
  return (
    <>
      <div className=" p-4 w-full flex justify-end text-white">
        <CloseIcon onClick={toggleDrawer(false)} className="cursor-pointer" />
      </div>
      <div className=" w-screen sm:w-[340px] text-white">
        <ul>
          <li className=" p-4 border-b flex">
            <a className=" text-2xl font-bold" href="/">
              ResumeHub
            </a>
          </li>
          <li className=" p-4 border-b flex">
            <a className=" text-lg" href="/">
              Home
            </a>
          </li>
          <li className=" p-4 border-b flex">
            <a className=" text-lg" href="/">
              Templates
            </a>
          </li>
          <li className=" p-4 border-b flex">
            <a className=" text-lg" href="/">
              JoinResumeHub
            </a>
          </li>
          <li className=" p-4 border-b flex">
            <a className=" text-lg" href="/">
              About Us
            </a>
          </li>
          <li className=" p-4 border-b flex">
            <a
              className=" float-right text-blue-100 font-medium pl-5"
              href="/login"
            >
              Login
            </a>
          </li>
          <li className=" p-4 flex">
            <a href="/signup">
              <button className=" bg-blue-200 rounded-full py-2 px-4 text-white hover:bg-blue-300">
                <span>Sign Up</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ResponsiveNavebar;
