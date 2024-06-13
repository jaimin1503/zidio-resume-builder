import Card from "../components/Card";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HomepageHero from "../components/HomepageHero";

export default function Home() {
  return (
    <>
      <div className="row1 my-10">
        <HomepageHero />
        <Card />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
