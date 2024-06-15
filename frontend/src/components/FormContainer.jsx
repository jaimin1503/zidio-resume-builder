import React, { useState } from "react";
import CertificationDetails from "./forms/CertificationDetails";
import ContactDetails from "./forms/ContactDetails";
import EducationDetails from "./forms/EducationDetails";
import ExperienceDetails from "./forms/ExperienceDetails";
import PersonalDetails from "./forms/PersonalDetails";
import { useSelector } from "react-redux";
import openIcon from "../assets/openIcon.svg";

const formComponents = [
  PersonalDetails,
  EducationDetails,
  ExperienceDetails,
  ContactDetails,
  CertificationDetails,
];

// hello kausalya

export default function FormContainer() {
  const { globalIndex } = useSelector((state) => state.globalIndex);
  const FormComponent = formComponents[globalIndex];

  return (
    <>
      {/* <div>
        <img className=" m-5 cursor-pointer" src={openIcon} alt="" />
      </div> */}
      <div className="w-full m-5 bg-richblack-700 rounded-2xl sm:m-10 lg:mx-10">
        <FormComponent />
      </div>
    </>
  );
}
