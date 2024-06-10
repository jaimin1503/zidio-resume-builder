import MenuItem from "../smallcomponents/MenuItem";
import contact from "./assets/contact.svg";
import certification from "./assets/certification.svg";
import Education from "./assets/Education.svg";
import experience from "./assets/experience.svg";
import personalInfo from "./assets/personalInfo.svg";

export default function SideBar() {
  return (
    <div className=" rounded-2xl mx-10 absolute flex flex-col justify-center items-center bg-blue-200 w-[379px] h-[600px] top-44 shadow-lg ">
      <MenuItem logo={personalInfo} text={"Pesonal Information"} />
      <MenuItem logo={Education} text={"Education"} />
      <MenuItem logo={experience} text={"Experience"} />
      <MenuItem logo={contact} text={"Contact Information"} />
      <MenuItem logo={certification} text={"Award/Certification"} />
    </div>
  );
}
