import MenuItem from "../smallcomponents/MenuItem";
import Contact from "./assets/Contact.jsx";
import Certification from "./assets/Certification.jsx";
import Education from "./assets/Education.jsx";
import Experience from "./assets/Experience.jsx";
import PersonalInfo from "./assets/PersonalInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalIndex } from "../redux/slices/globalIndexSlice";
import { setFormData } from "../redux/slices/resumeSlice.js";
import CloseIcon from "@mui/icons-material/Close";

export default function SideBar({ toggleDrawer }) {
  const { globalIndex } = useSelector((state) => state.globalIndex);
  // const { formData } = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const menuItems = [
    { logo: PersonalInfo, text: "Personal Information" },
    { logo: Education, text: "Education" },
    { logo: Experience, text: "Experience" },
    { logo: Contact, text: "Contact Information" },
    { logo: Certification, text: "Award/Certification" },
  ];

  return (
    <div className="rounded-2xl flex flex-col justify-center items-center bg-richblack-700 w-[379px] h-[90vh] shadow-lg">
      {/* <CloseIcon
        onClick={() => toggleDrawer(false)}
        className="cursor-pointer"
      /> */}
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => dispatch(setGlobalIndex(index))}
          className={`menu-item ${globalIndex === index ? "active" : ""}`} // Conditional class based on globalIndex
        >
          <MenuItem
            logo={item.logo}
            text={item.text}
            isActive={globalIndex === index}
          />
        </div>
      ))}
    </div>
  );
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
