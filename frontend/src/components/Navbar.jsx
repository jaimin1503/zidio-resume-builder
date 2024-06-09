import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import ResponsiveNavebar from "./ResponsiveNavebar";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            backgroundColor: "rgb(22 29 41)",
            height: "100%",
          }}
        >
          <ResponsiveNavebar toggleDrawer={toggleDrawer} />
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
              <li
                className=" cursor-pointer hover:text-blue-100 text-lg"
                style={{ transition: "0.3s" }}
              >
                Home
              </li>
              <li
                className=" cursor-pointer hover:text-blue-100 text-lg"
                style={{ transition: "0.3s" }}
              >
                Templates
              </li>
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
          <div className="right flex items-center mx-4">
            <div className="login">
              <button
                className=" mx-4 hover:text-blue-100"
                style={{ transition: "0.3s" }}
              >
                Login
              </button>
            </div>
            <div className="signup">
              <button className=" py-2 px-4 bg-blue-100 hover:bg-blue-200 rounded-[5px]">
                SignUp
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
