import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/auth";
import { setToken } from "../redux/slices/authSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-18 py-3 flex justify-between sticky top-0 z-50  bg-richblack-900 border-b-[0.1px] border-pure-greys-25 px-10">
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              backgroundColor: "rgb(22 29 41)",
              height: "100%",
            }}
          >
            <ResponsiveNavbar
              token={token}
              handleLogout={handleLogout}
              toggleDrawer={toggleDrawer}
            />
          </Box>
        </Drawer>

        <nav className="w-full flex items-center justify-between text-white">
          <div className="left text-2xl font-bold text-blue-100 cursor-pointer">
            ResumeHub
          </div>
          <div className="middle font-medium hidden lg:block">
            <ul className=" flex gap-10 ">
              <Link
                to={"/"}
                className=" cursor-pointer hover:text-blue-100 text-md font-light"

                style={{ transition: "0.3s" }}
              >
                Home
              </Link>
              <Link
                to={"/templates"}
                className=" cursor-pointer hover:text-blue-100 text-md font-light"
                style={{ transition: "0.3s" }}
              >
                Templates
              </Link>
              <li
                className=" cursor-pointer hover:text-blue-100 textmd font-light"
                style={{ transition: "0.3s" }}
              >
                JoinResumeHub
              </li>
              <Link
                to={"/about"}
                className=" cursor-pointer hover:text-blue-100 text-md font-light"
                style={{ transition: "0.3s" }}
              >
                About Us
              </Link>
            </ul>
          </div>
          {!token ? (
            <div className="right hidden lg:flex items-center mx-4">
              <Link to={"/login"} className="login">
                <button
                  className=" mx-4 font-medium hover:text-blue-100"
                  style={{ transition: "0.3s" }}
                >
                  Login
                </button>
              </Link>
              <Link to={"/signup"} className="signup">
                <button className=" py-2 px-4 font-medium bg-blue-400 hover:bg-blue-500 rounded-[5px]">
                  SignUp
                </button>
              </Link>
            </div>
          ) : (
            <div className=" mx-4">
              <button
                onClick={handleLogout}
                className=" font-medium py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded-[5px]"
              >
                Logout
              </button>
            </div>
          )}

          <div
            onClick={toggleDrawer(true)}
            className=" text-white p-4 lg:hidden cursor-pointer"
          >
            <FormatAlignRightIcon />
          </div>
        </nav>
      </div>
    </>
  );
}
