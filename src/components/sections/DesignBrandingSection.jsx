import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./DesignBrandingSection.module.css";

// ========== IMAGE DATA (preserved from original sections) ==========

const labelImages = [
  { src: "/gallery/labels/label_01.webp", alt: "Sunflower oil label", product: "Product Label", category: "Sunflower Oil" },
  { src: "/gallery/labels/label_09.webp", alt: "Star sunflower oil label", product: "Product Label", category: "Star Sunflower Oil" },
  { src: "/gallery/labels/label_05.webp", alt: "Adriano restaurant flyer", product: "Promotional Flyer", category: "Adriano Restaurant" },
  { src: "/gallery/labels/label_04.webp", alt: "Adriano business cards", product: "Business Cards", category: "Adriano Restaurant" },
  { src: "/gallery/labels/label_06.webp", alt: "Adriano seafood poster", product: "Poster Design", category: "Adriano Restaurant" },
  { src: "/gallery/labels/label_02.webp", alt: "Adriano menu design", product: "Menu Design", category: "Adriano Restaurant" },
  { src: "/gallery/labels/label_07.webp", alt: "Adriano menu page", product: "Menu Page", category: "Adriano Restaurant" },
];

const logoImages = [
  { src: "/gallery/logos/logo_02.webp", alt: "DCT Diagecutunetrencin logo", client: "DCT", category: "Automotive Diagnostics", bgColor: "#1C1C1C", theme: "dark" },
  { src: "/gallery/logos/logo_06.webp", alt: "Laser Craft Wood logo", client: "Laser Craft Wood", category: "Woodworking & Crafts", bgColor: "#C4BAB0", theme: "light" },
  { src: "/gallery/logos/logo_03.webp", alt: "Adriano Golf Restaurant logo", client: "Adriano", category: "Golf Restaurant", bgColor: "#1A1A1A", theme: "dark" },
  { src: "/gallery/logos/logo_01.webp", alt: "Star Food logo", client: "Star Food", category: "Food & Beverage", bgColor: "#EEF4F8", theme: "light" },
  { src: "/gallery/logos/logo_05.webp", alt: "Balloon Party logo", client: "Balloon Party", category: "Events & Entertainment", bgColor: "#E8F4FD", theme: "light" },
  { src: "/gallery/logos/logo_04.webp", alt: "Geometric logo", client: "Star Food", category: "Food & Beverage", bgColor: "#F0F0F0", theme: "light" },
];

const brandingImages = [
  { thumb: "/gallery/branding/thumb/thumb_01.webp", full: "/gallery/branding/full/full_01.webp", alt: "Botanical linen tea towel", product: "Tea Towel", category: "Textile Print" },
  { thumb: "/gallery/branding/thumb/thumb_02.webp", full: "/gallery/branding/full/full_02.webp", alt: "Impressionist Mood notebook", product: "Notebook", category: "Stationery" },
  { thumb: "/gallery/branding/thumb/thumb_04.webp", full: "/gallery/branding/full/full_04.webp", alt: "Floral magnolia pillow", product: "Decorative Pillow", category: "Home Decor" },
  { thumb: "/gallery/branding/thumb/thumb_05.webp", full: "/gallery/branding/full/full_05.webp", alt: "Green floral silk scarf", product: "Silk Scarf", category: "Accessories" },
  { thumb: "/gallery/branding/thumb/thumb_03.webp", full: "/gallery/branding/full/full_03.webp", alt: "Advent 2026 calendar", product: "Wall Calendar", category: "Stationery", wide: true },
  { thumb: "/gallery/branding/thumb/thumb_10.webp", full: "/gallery/branding/full/full_10.webp", alt: "Lavender field tote bag", product: "Tote Bag", category: "Accessories" },
  { thumb: "/gallery/branding/thumb/thumb_11.webp", full: "/gallery/branding/full/full_11.webp", alt: "Forest stream wall clock", product: "Wall Clock", category: "Home Decor" },
  { thumb: "/gallery/branding/thumb/thumb_12.webp", full: "/gallery/branding/full/full_12.webp", alt: "Landscape acrylic block", product: "Acrylic Block", category: "Art Print" },
  { thumb: "/gallery/branding/thumb/thumb_06.webp", full: "/gallery/branding/full/full_06.webp", alt: "Meadow path canvas print", product: "Canvas Print", category: "Wall Art", desktopOnly: true },
  { thumb: "/gallery/branding/thumb/thumb_08.webp", full: "/gallery/branding/full/full_08.webp", alt: "Lavender field landscape", product: "Framed Print", category: "Wall Art", desktopOnly: true },
  { thumb: "/gallery/branding/thumb/thumb_09.webp", full: "/gallery/branding/full/full_09.webp", alt: "Sunset meadow art print", product: "Art Print", category: "Wall Art" },
];

const TABS = ["labels", "logos", "branding"];

// ========== COMPONENT ==========

const DesignBrandingSection = () => {
  const { translate } = useTranslation();
  const [activeTab, setActiveTab] = useState("labels");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCurrentImages = () => {
    switch (activeTab) {
      case "labels": return labelImages;
      case "logos": return logoImages;
      case "branding": return brandingImages;
      default: return labelImages;
    }
  };

  const currentImages = getCurrentImages();

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % currentImages.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  const getLightboxSrc = (img) => img.full || img.src;
  const getDisplayName = (img) => img.product || img.client;

  return (
    <section id="design-branding" className={styles.section}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>{translate("designBranding.title")}</SectionTitle>
        <p className={styles.subtitle}>
          {translate("designBranding.subtitle")}
        </p>
      </motion.div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setLightboxOpen(false);
            }}
          >
            {translate(`designBranding.tab.${tab}`)}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <AnimatePresence mode="wait">
         <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
          {/* ===== Labels Grid ===== */}
          {activeTab === "labels" && (
            <div className={styles.gridLabels}>
              {labelImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={styles.gridItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => openLightbox(index)}
                >
                  <img src={image.src} alt={image.alt} className={styles.image} loading="lazy" />
                  <div className={styles.overlay}>
                    <span className={styles.overlayName}>{image.product}</span>
                    <span className={styles.overlayCategory}>{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ===== Logos Grid ===== */}
          {activeTab === "logos" && (
            <div className={styles.gridLogos}>
              {logoImages.map((logo, index) => (
                <motion.div
                  key={index}
                  className={`${styles.logoCard} ${logo.theme === "dark" ? styles.logoDark : styles.logoLight}`}
                  style={{ backgroundColor: logo.bgColor }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.logoImageWrapper}>
                    <img src={logo.src} alt={logo.alt} className={styles.logoImage} loading="lazy" />
                  </div>
                  <div className={styles.overlay}>
                    <span className={styles.overlayName}>{logo.client}</span>
                    <span className={styles.overlayCategory}>{logo.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ===== Branding Grid ===== */}
          {activeTab === "branding" && (
            <div className={styles.gridBranding}>
              {brandingImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`${styles.gridItem} ${image.wide ? styles.gridItemWide : ""} ${image.desktopOnly ? styles.desktopOnly : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => openLightbox(index)}
                >
                  <img src={image.thumb} alt={image.alt} className={styles.image} loading="lazy" />
                  <div className={styles.overlay}>
                    <span className={styles.overlayName}>{image.product}</span>
                    <span className={styles.overlayCategory}>{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          ref={(el) => el && el.focus()}
        >
          <button className={styles.closeBtn} onClick={closeLightbox}>✕</button>

          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >←</button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={getLightboxSrc(currentImages[activeIndex])}
              alt={currentImages[activeIndex].alt}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxInfo}>
              <span className={styles.lightboxName}>
                {getDisplayName(currentImages[activeIndex])}
              </span>
              <span className={styles.lightboxCategory}>
                {currentImages[activeIndex].category}
              </span>
            </div>
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >→</button>
        </div>
      )}
    </section>
  );
};

export default DesignBrandingSection;