import Template1 from "../components/templates/Template1";

export default function Templates() {
  return (
    <>
      <div className=" p-6 text-white">
        <h1 className=" text-4xl p-4 font-bold ">
          Select your resume template
        </h1>
        <div className=" bg-richblack-400 text-black min-h-screen flex items-center justify-center p-4">
          <Template1 />
        </div>
      </div>
    </>
  );
}
