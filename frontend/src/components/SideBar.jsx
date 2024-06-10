import MenuItem from "../smallcomponents/MenuItem";
import Contact from "./assets/Contact.jsx";
import Certification from "./assets/Certification.jsx";
import Education from "./assets/Education.jsx";
import Experience from "./assets/Experience.jsx";
import PersonalInfo from "./assets/PersonalInfo.jsx";

export default function SideBar() {
  const menuItems = [
    { logo: PersonalInfo, text: "Personal Information" },
    { logo: Education, text: "Education" },
    { logo: Experience, text: "Experience" },
    { logo: Contact, text: "Contact Information" },
    { logo: Certification, text: "Award/Certification" },
  ];

  return (
    <div className="rounded-2xl mx-10 absolute flex flex-col justify-center items-center bg-richblack-700 w-[379px] h-[600px] top-44 shadow-lg">
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItem logo={item.logo} text={item.text} />
        </div>
      ))}
    </div>
  );
}
