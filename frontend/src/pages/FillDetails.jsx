import { Link, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import FormContainer from "../components/FormContainer";
import Navbar from "../components/Navbar";

export default function FillDetails() {
  return (
    <>
      <Navbar />
      <div className=" text-white">
        <div className=" flex w-screen">
          <div className=" hidden lg:block mt-3">
            <SideBar />
          </div>
          <FormContainer />
        </div>
      </div>
    </>
  );
}
