import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./LogosSection.module.css";

const logoImages = [
  {
    src: "/gallery/logos/logo_06.webp",
    alt: "Laser Craft Wood logo",
    client: "Laser Craft Wood",
    category: "Woodworking & Crafts",
    bgColor: "#C4BAB0",
    theme: "light",
  },
  {
    src: "/gallery/logos/logo_02.webp",
    alt: "DCT Diagecutunetrencin logo",
    client: "DCT",
    category: "Automotive Diagnostics",
    bgColor: "#1C1C1C",
    theme: "dark",
  },
  {
    src: "/gallery/logos/logo_03.webp",
    alt: "Adriano Golf Restaurant logo",
    client: "Adriano",
    category: "Golf Restaurant",
    bgColor: "#1A1A1A",
    theme: "dark",
  },
  {
    src: "/gallery/logos/logo_05.webp",
    alt: "Balloon Party logo",
    client: "Balloon Party",
    category: "Events & Entertainment",
    bgColor: "#EEF4F8",
    theme: "light",
  },
  {
    src: "/gallery/logos/logo_01.webp",
    alt: "Star Food logo",
    client: "Star Food",
    category: "Food & Beverage",
    bgColor: "#E8F4FD",
    theme: "light",
  },
  {
    src: "/gallery/logos/logo_04.webp",
    alt: "Geometric logo",
    client: "Geometric",
    category: "Corporate Identity",
    bgColor: "#F0F0F0",
    theme: "light",
  },
];

const LogosSection = () => {
  const { translate } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % logoImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + logoImages.length) % logoImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="logos" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>{translate("logos.title")}</SectionTitle>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className={styles.descriptionText}>
            {translate("logos.text1")}
          </p>
          <p className={styles.descriptionText}>
            {translate("logos.text2")}
          </p>
          <p className={styles.descriptionText}>
            {translate("logos.text3")}
          </p>
        </motion.div>
      </div>

      {/* Showcase Grid */}
      <div className={styles.grid}>
        {logoImages.map((logo, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${logo.theme === "dark" ? styles.cardDark : styles.cardLight}`}
            style={{ backgroundColor: logo.bgColor }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => openLightbox(index)}
          >
            <div className={styles.cardImageWrapper}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.cardImage}
                loading="lazy"
              />
            </div>

            {/* Hover overlay with client info */}
            <div className={styles.cardOverlay}>
              <span className={styles.cardClient}>{logo.client}</span>
              <span className={styles.cardCategory}>{logo.category}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          ref={(el) => el && el.focus()}
        >
          <button className={styles.closeBtn} onClick={closeLightbox}>
            ✕
          </button>

          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            ←
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={logoImages[activeIndex].src}
              alt={logoImages[activeIndex].alt}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxInfo}>
              <span className={styles.lightboxClient}>
                {logoImages[activeIndex].client}
              </span>
              <span className={styles.lightboxCategory}>
                {logoImages[activeIndex].category}
              </span>
            </div>
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
};

export default LogosSection;