import { Link, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import FormContainer from "../components/FormContainer";

export default function FillDetails() {
  const { index } = useParams();
  return (
    <>
      <div className=" text-white">
        {/* <div className="topBar h-[20vh] bg-blue-300 flex justify-between">
      <h1 className=" font-bold text-3xl text-whit px-10 py-10">ResumeHub</h1>
      <Link
        to={"/templates"}
        className=" text-xl font-medium cursor-pointer px-10 py-10"
      >
        ChangeTemplate
      </Link>
    </div> */}
        <div className=" flex w-screen">
          <div className=" hidden lg:block">
            <SideBar />
          </div>
          <FormContainer />
        </div>
      </div>
    </>
  );
}
