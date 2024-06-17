import Card from "../components/Card";
import resumePage from "../assets/resumepage.png";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HomepageHero from "../components/HomepageHero";
import HowItWorks from "../components/HowItWorks";

import Features from "../components/Features";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      {/* //       <div className="w-full"> */}
      <Navbar />
      <div className="row1 my-10 ">
        <HomepageHero />
        {/* <Card />*/}
        <Features />
        <HowItWorks />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
