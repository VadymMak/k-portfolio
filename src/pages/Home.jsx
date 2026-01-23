import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ChildrensBooksSection from "../components/sections/ChildrensBooksSection";
import LabelDesignSection from "../components/sections/LabelDesignSection";
import LogosSection from "../components/sections/LogosSection";
import BrandingSection from "../components/sections/BrandingSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <ChildrensBooksSection />
      <LabelDesignSection />
      <LogosSection />
      <BrandingSection />
      <ContactSection />
    </div>
  );
};

export default Home;
