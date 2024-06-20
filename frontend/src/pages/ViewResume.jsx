import { useDispatch, useSelector } from "react-redux";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import Template3 from "../components/templates/Template3";
import Template4 from "../components/templates/Template4";
import Template5 from "../components/templates/Template5";
import { useParams } from "react-router-dom";

const templates = [Template1, Template2, Template3, Template4, Template5];

export default function ViewResume() {
  const { index } = useParams();
  const TemplateComponent = templates[index];

  return (
    <div className=" text-white p-3 sm:p-6">
      <h1 className=" text-4xl font-bold ">Resume Preview</h1>
      <TemplateComponent />
    </div>
  );
}
