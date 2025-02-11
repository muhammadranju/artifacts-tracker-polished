import { Helmet } from "react-helmet";
import ArtifactCards from "../../components/ArtifactCards/ArtifactCards";
import HeroSection from "../../components/HeroSection/HeroSection";
import { HeroSectionBottom } from "../../components/HeroSection/HeroSectionBottom";
import { Newsletter } from "../../components/HeroSection/Newsletter";
import { Faq } from "../../components/Faq/Faq";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page | Historical Artifacts</title>
      </Helmet>
      {/* Navbar */}

      <HeroSection />
      <ArtifactCards />

      {/* Join Community Section */}
      <div className="pt-10 border-t  dark:border-slate-800">
        <HeroSectionBottom />
      </div>
      <div className="border-t  dark:border-slate-800">
        <Faq />
      </div>
      <section className="bg-gradient-to-r from-yellow-100 dark:from-blue-800 via-pink-50 dark:via-sky-600 to-yellow-100 dark:to-blue-800 pb-10">
        <Newsletter />
      </section>
    </>
  );
};

export default Home;
