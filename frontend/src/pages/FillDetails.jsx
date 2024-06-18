import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

export default function FillDetails() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <>
      <div className="text-white w-full h-full px-10 py-10">
        <h2 class="text-center text-richblack-900 text-3xl font-bold">
          DASHBOARD
        </h2>
        <div className="flex justify-center items-center w-full">
          <div className="hidden lg:block">
            <SideBar />
          </div>
          <FormContainer />
        </div>
      </div>
    </>
  );
}
