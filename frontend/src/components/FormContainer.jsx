import EducationDetails from "./forms/EducationDetails";
import ExperienceDetails from "./forms/ExperienceDetails";
import PersonalDetails from "./forms/PersonalDetails";

export default function FormContainer() {
  return (
    <div className=" w-full m-5 bg-richblack-700 rounded-2xl sm:m-10 lg:mx-10">
      {/* <EducationDetails /> */}
      {/* <PersonalDetails /> */}
      <ExperienceDetails />
    </div>
  );
}
