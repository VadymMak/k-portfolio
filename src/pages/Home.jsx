import AboutSection from "../components/sections/AboutSection";
import ChildrensBooksIntro from "../components/sections/ChildrensBooksIntro";
import ChildrensBooksSection from "../components/sections/ChildrensBooksSection";
import LabelDesignSection from "../components/sections/LabelDesignSection";
import LogosSection from "../components/sections/LogosSection";
import BrandingSection from "../components/sections/BrandingSection";
import ContactSection from "../components/sections/ContactSection";
import ServicesSection from "../components/sections/ServicesSection";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <ChildrensBooksIntro />
      <ChildrensBooksSection />
      <LabelDesignSection />
      <LogosSection />
      <BrandingSection />
      <ContactSection />
      <ServicesSection/>
    </div>
  );
};

export default Home;
