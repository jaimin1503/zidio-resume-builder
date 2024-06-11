import React, { useState } from "react";
import CertificationDetails from "./forms/CertificationDetails";
import ContactDetails from "./forms/ContactDetails";
import EducationDetails from "./forms/EducationDetails";
import ExperienceDetails from "./forms/ExperienceDetails";
import PersonalDetails from "./forms/PersonalDetails";

const formComponents = [
  PersonalDetails,
  EducationDetails,
  ExperienceDetails,
  ContactDetails,
  CertificationDetails,
];

export default function FormContainer() {
  const [index, setIndex] = useState(0);
  const FormComponent = formComponents[index];

  return (
    <div className="w-full m-5 bg-richblack-700 rounded-2xl sm:m-10 lg:mx-10">
      <FormComponent setIndex={setIndex} index={index} />
    </div>
  );
}
