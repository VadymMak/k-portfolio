import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import styles from "./LabelDesignSection.module.css";

const labelImages = [
  { src: "/gallery/labels/label_01.webp", alt: "Sunflower oil label" },       // Row 1
  { src: "/gallery/labels/label_03.webp", alt: "Star sunflower oil label" },  // Row 1
  { src: "/gallery/labels/label_05.webp", alt: "Adriano restaurant flyer" },  // Row 2
  { src: "/gallery/labels/label_04.webp", alt: "Adriano business cards" },    // Row 2
  { src: "/gallery/labels/label_06.webp", alt: "Adriano seafood poster" },    // Row 2
  { src: "/gallery/labels/label_02.webp", alt: "Adriano menu design" },       // Row 3
  { src: "/gallery/labels/label_07.webp", alt: "Adriano menu page" },         // Row 3
];

const LabelDesignSection = () => {
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
    setActiveIndex((prev) => (prev + 1) % labelImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + labelImages.length) % labelImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="label-design" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Label Design</SectionTitle>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className={styles.descriptionText}>
            Label design is the art of creating a visual identity for a product
            through its packaging. It combines aesthetics, clarity, and brand
            storytelling to make a product instantly recognizable and
            emotionally appealing. A well-designed label not only informs — it
            invites, inspires, and builds trust.
          </p>
          <p className={styles.descriptionText}>
            My approach to label design focuses on thoughtful composition,
            harmonious color palettes, and clear typography. I create labels
            that reflect the character of the product and the values of the
            brand, whether it's a handcrafted item, a natural cosmetic, or a
            premium food product.
          </p>
          <p className={styles.descriptionText}>
            A strong label communicates at a glance — it captures attention,
            conveys quality, and helps the product stand out on the shelf. I
            design labels that feel alive, sincere, and visually memorable,
            blending artistic intuition with practical functionality.
          </p>
        </motion.div>
      </div>

      {/* Grid Gallery */}
      <div className={styles.grid}>
        {labelImages.map((image, index) => (
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
              src={labelImages[activeIndex].src}
              alt={labelImages[activeIndex].alt}
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

export default LabelDesignSection;