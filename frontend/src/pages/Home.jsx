import Card from "../components/Card";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HomepageHero from "../components/HomepageHero";
import HowItWorks from "../components/HowItWorks";


export default function Home() {
  return (
    <>
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
