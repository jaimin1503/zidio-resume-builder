import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import AboutHeader from "../components/AboutHeader";
import AboutContent from "../components/AboutContent";
import AboutCta from "../components/AboutCta";

export default function AboutUs() {
  return (
    <div className="w-full">
      <AboutHeader />
      <AboutContent />
      <AboutCta />
      <Footer />
    </div>
  );
}
