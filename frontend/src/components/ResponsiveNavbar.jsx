import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({ toggleDrawer, token, handleLogout }) => {
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
            <a className=" text-lg" href="/templates">
              Templates
            </a>
          </li>
          <li className=" p-4 border-b flex">
            <a className=" text-lg" href="/myresumes">
              My Resumes
            </a>
          </li>
          <li className=" p-4 border-b flex">
            <a className=" text-lg" href="/">
              About Us
            </a>
          </li>
          {!token ? (
            <>
              <li className=" p-4 border-b flex">
                <a
                  className=" float-right text-blue-200 font-medium pl-5"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li className=" p-4 flex">
                <a href="/signup">
                  <button className=" bg-blue-400 rounded-[5px] py-2 px-4 text-white hover:bg-blue-500">
                    <span>Sign Up</span>
                  </button>
                </a>
              </li>
            </>
          ) : (
            <li className=" p-4">
              <button
                onClick={handleLogout}
                className=" font-medium py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded-[5px]"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
export default ResponsiveNavbar;
