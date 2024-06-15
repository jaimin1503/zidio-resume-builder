import Card from "../components/Card";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HomepageHero from "../components/HomepageHero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="row1 my-10">
        <HomepageHero />
        <Card />
        <HowItWorks />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
