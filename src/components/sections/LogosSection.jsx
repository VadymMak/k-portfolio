import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import styles from "./LogosSection.module.css";

const logoImages = [
  { src: "/gallery/logos/logo_01.webp", alt: "Star Food logo" },
  { src: "/gallery/logos/logo_05.webp", alt: "Balloon Party logo" },
  { src: "/gallery/logos/logo_04.webp", alt: "Geometric logo" },
  { src: "/gallery/logos/logo_06.webp", alt: "DT Diagecutunetrencin cards" },
  { src: "/gallery/logos/logo_07.webp", alt: "Adriano Golf Restaurant logo" },
];

const LogosSection = () => {
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
          <SectionTitle>Logos</SectionTitle>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className={styles.descriptionText}>
            A logo is the visual heartbeat of a brand — a distilled symbol of
            its character, values, and voice. It's the first impression, the
            signature, and the element that stays in memory long after the
            product or message is gone. Thoughtful logo design combines clarity,
            emotion, and precision, creating a mark that feels both timeless and
            alive.
          </p>
          <p className={styles.descriptionText}>
            In my work, I focus on logos that breathe with simplicity and
            meaning. I explore the rhythm of shapes, the balance of negative
            space, and the harmony of color to craft identities that resonate.
            Whether it's a monogram, an emblem, or a minimalist symbol, each
            design is built to communicate the essence of the brand with honesty
            and elegance.
          </p>
          <p className={styles.descriptionText}>
            A strong logo doesn't shout — it speaks clearly. It builds trust,
            enhances recognition, and becomes the foundation for a cohesive
            visual identity. I create logos that reflect the story behind the
            brand, support its growth, and feel emotionally true to the people
            who stand behind it.
          </p>
        </motion.div>
      </div>

      {/* Grid Gallery */}
      <div className={styles.grid}>
        {logoImages.map((image, index) => (
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
              src={image.src}
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
              src={logoImages[activeIndex].src}
              alt={logoImages[activeIndex].alt}
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

export default LogosSection;