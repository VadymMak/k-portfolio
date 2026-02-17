import { useEffect } from "react";
import AboutSection from "../components/sections/AboutSection";
import ChildrensBooksIntro from "../components/sections/ChildrensBooksIntro";
import ChildrensBooksSection from "../components/sections/ChildrensBooksSection";
import DesignBrandingSection from "../components/sections/DesignBrandingSection";
import ContactSection from "../components/sections/ContactSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const Home = () => {
  useEffect(() => {
    // Reset title
    document.title = "Anastasiia Kolisnyk | Children's Book Illustrator & Visual Designer";

    // Set canonical for home page
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://akillustrator.com/';

    // Reset meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = 'description';
      document.head.appendChild(descMeta);
    }
    descMeta.content = "Children's book illustrator creating warm, heartfelt illustrations for picture books, covers, and characters. Also specializing in branding, label design, and visual identity. Based in Trenčín, Slovakia.";

    // Reset OG tags to home page defaults
    const ogTags = {
      'og:title': "Anastasiia Kolisnyk | Children's Book Illustrator & Visual Designer",
      'og:description': "Children's book illustrator creating warm, heartfelt illustrations for picture books, covers, and characters. Branding & visual design.",
      'og:image': 'https://akillustrator.com/og-image.jpg',
      'og:url': 'https://akillustrator.com/',
      'og:type': 'website',
    };

    Object.entries(ogTags).forEach(([property, val]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = val;
    });

    // Remove blog hreflang tags if any
    document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());
  }, []);

  return (
    <div>
      <AboutSection />
      <ChildrensBooksIntro />
      <ChildrensBooksSection />
      <DesignBrandingSection />
      <TestimonialsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Home;