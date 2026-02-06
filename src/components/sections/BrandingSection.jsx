import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./BrandingSection.module.css";

const brandingImages = [
  { thumb: "/gallery/branding/thumb/thumb_01.webp", full: "/gallery/branding/full/full_01.webp", alt: "Botanical print" },
  { thumb: "/gallery/branding/thumb/thumb_02.webp", full: "/gallery/branding/full/full_02.webp", alt: "Impressionist Mood notebook" },
  { thumb: "/gallery/branding/thumb/thumb_03.webp", full: "/gallery/branding/full/full_03.webp", alt: "Advent 2026 calendar" },
  { thumb: "/gallery/branding/thumb/thumb_04.webp", full: "/gallery/branding/full/full_04.webp", alt: "Floral pillow" },
  { thumb: "/gallery/branding/thumb/thumb_05.webp", full: "/gallery/branding/full/full_05.webp", alt: "Green floral scarf" },
  { thumb: "/gallery/branding/thumb/thumb_10.webp", full: "/gallery/branding/full/full_10.webp", alt: "Pink sky landscape" },
  { thumb: "/gallery/branding/thumb/thumb_11.webp", full: "/gallery/branding/full/full_11.webp", alt: "Sunset landscape" },
  { thumb: "/gallery/branding/thumb/thumb_12.webp", full: "/gallery/branding/full/full_12.webp", alt: "Green river landscape" },
  { thumb: "/gallery/branding/thumb/thumb_14.webp", full: "/gallery/branding/full/full_14.webp", alt: "Branding design" },
];

const BrandingSection = () => {
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
    setActiveIndex((prev) => (prev + 1) % brandingImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + brandingImages.length) % brandingImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="branding" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <SectionTitle>{translate("branding.title")}</SectionTitle>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className={styles.descriptionText}>
            {translate("branding.text1")}
          </p>
          <p className={styles.descriptionText}>
            {translate("branding.text2")}
          </p>
          <p className={styles.descriptionText}>
            {translate("branding.text3")}
          </p>
        </motion.div>
      </div>

      {/* Grid Gallery */}
      <div className={styles.grid}>
        {brandingImages.map((image, index) => (
          <motion.div
            key={index}
            className={styles.gridItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.thumb}
              alt={image.alt}
              className={styles.image}
              loading="lazy"
            />
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
              src={brandingImages[activeIndex].full}
              alt={brandingImages[activeIndex].alt}
              className={styles.lightboxImage}
            />
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

export default BrandingSection;