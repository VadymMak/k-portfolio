import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import styles from "./BrandingSection.module.css";

const brandingImages = [
  { thumb: "/gallery/branding/thumb/thumb_01.webp", full: "/gallery/branding/full/full_01.webp", alt: "Botanical print" },
  { thumb: "/gallery/branding/thumb/thumb_02.webp", full: "/gallery/branding/full/full_02.webp", alt: "Impressionist Mood notebook" },
  { thumb: "/gallery/branding/thumb/thumb_03.webp", full: "/gallery/branding/full/full_03.webp", alt: "Advent 2026 calendar" },
  { thumb: "/gallery/branding/thumb/thumb_04.webp", full: "/gallery/branding/full/full_04.webp", alt: "Floral pillow" },
  { thumb: "/gallery/branding/thumb/thumb_05.webp", full: "/gallery/branding/full/full_05.webp", alt: "Green floral scarf" },
  { thumb: "/gallery/branding/thumb/thumb_06.webp", full: "/gallery/branding/full/full_06.webp", alt: "Pink sky landscape" },
  { thumb: "/gallery/branding/thumb/thumb_07.webp", full: "/gallery/branding/full/full_07.webp", alt: "Sunset landscape" },
  { thumb: "/gallery/branding/thumb/thumb_08.webp", full: "/gallery/branding/full/full_08.webp", alt: "Green river landscape" },
  { thumb: "/gallery/branding/thumb/thumb_09.webp", full: "/gallery/branding/full/full_09.webp", alt: "Branding design" },
];

const BrandingSection = () => {
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
          viewport={{ once: true }}
        >
          <SectionTitle>Print and Digital Branding</SectionTitle>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className={styles.descriptionText}>
            Print and digital branding together create a unified visual presence
            for a brand across both physical and online spaces. My approach
            focuses on clarity, emotional resonance, and a cohesive aesthetic
            that strengthens recognition and trust.
          </p>
          <p className={styles.descriptionText}>
            In print, I design materials that feel tangible and memorable —
            business cards, brochures, catalogs, packaging elements, posters,
            and branded merchandise. Each piece is crafted with attention to
            composition, typography, and color, ensuring that the brand's
            personality is expressed with warmth and precision.
          </p>
          <p className={styles.descriptionText}>
            In the digital space, I develop visual systems for websites, social
            media, presentations, and online campaigns. This includes graphics,
            templates, icons, and layouts that adapt seamlessly across platforms
            while maintaining a consistent identity.
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