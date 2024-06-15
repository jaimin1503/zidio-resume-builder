import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import ResponsiveNavebar from "./ResponsiveNavebar";
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
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            backgroundColor: "rgb(22 29 41)",
            height: "100%",
          }}
        >
          <ResponsiveNavebar
            token={token}
            handleLogout={handleLogout}
            toggleDrawer={toggleDrawer}
          />
        </Box>
      </Drawer>
      <div className=" flex items-center">
        <Link to={"/"}>
          <div className="left text-2xl lg:hidden font-bold text-blue-100 mx-4 cursor-pointer">
            ResumeHub
          </div>
        </Link>
        <div
          onClick={toggleDrawer(true)}
          className=" text-white ml-auto p-4 cursor-pointer lg:hidden"
        >
          <FormatAlignRightIcon />
        </div>
      </div>
      <div className=" text-white py-4 hidden lg:block">
        <nav className=" flex items-center">
          <div className="left text-2xl font-bold text-blue-100 mx-4 cursor-pointer">
            ResumeHub
          </div>
          <div className="middle mx-auto font-medium">
            <ul className=" flex gap-10 ">
              <Link
                to={"/"}
                className=" cursor-pointer hover:text-blue-100 text-lg"
                style={{ transition: "0.3s" }}
              >
                Home
              </Link>
              <Link
                to={"/templates"}
                className=" cursor-pointer hover:text-blue-100 text-lg"
                style={{ transition: "0.3s" }}
              >
                Templates
              </Link>
              <li
                className=" cursor-pointer hover:text-blue-100 text-lg"
                style={{ transition: "0.3s" }}
              >
                JoinResumeHub
              </li>
              <li
                className=" cursor-pointer hover:text-blue-100 text-lg"
                style={{ transition: "0.3s" }}
              >
                About Us
              </li>
            </ul>
          </div>
          {!token ? (
            <div className="right flex items-center mx-4">
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
        </nav>
      </div>
    </>
  );
}
