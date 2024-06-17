import Navbar from "../components/Navbar";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import Templates3 from "../components/templates/Templates3";
// import Template4 from "../components/templates/Template4";
// import Template5 from "../components/templates/Template5";
export default function Templates() {
  return (
    <>
      <Navbar />
      <div className=" p-6 text-white">
        <h1 className=" text-4xl p-4 font-bold ">
          Select your resume template
        </h1>
        <div className=" bg-richblack-400 text-black min-h-screen flex items-center justify-center p-4">
          <Template1 /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Template2 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Templates3 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Template4/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Template5/> */}
          
        </div>
      </div>
    </>
  );
}
