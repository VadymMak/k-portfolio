import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./WildSwansPage.module.css";
import ProtectedImage from "../ProtectedImage";

const swansImages = [
  { thumb: "/gallery/books/swans/thumb/thumb_03.webp", full: "/gallery/books/swans/full/full_03.webp", alt: "Girl in the forest" },
  { thumb: "/gallery/books/swans/thumb/thumb_01.webp", full: "/gallery/books/swans/full/full_01.webp", alt: "Book spread 1" },
  { thumb: "/gallery/books/swans/thumb/thumb_02.webp", full: "/gallery/books/swans/full/full_02.webp", alt: "Book spread 2" },
  { thumb: "/gallery/books/swans/thumb/thumb_04.webp", full: "/gallery/books/swans/full/full_04.webp", alt: "Character and landscape" },
  { thumb: "/gallery/books/swans/thumb/thumb_06.webp", full: "/gallery/books/swans/full/full_06.webp", alt: "Forest scene" },
  { thumb: "/gallery/books/swans/thumb/thumb_05.webp", full: "/gallery/books/swans/full/full_05.webp", alt: "Sketches and studies" },
];

const WildSwansPage = () => {
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
    setActiveIndex((prev) => (prev + 1) % swansImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + swansImages.length) % swansImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="wild-swans" className={styles.section}>
      {/* Decorative sketch */}
      <div className={styles.decorSketch} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>{translate("books.wildSwans")}</SectionTitle>
      </motion.div>

      {/* Grid Gallery */}
      <div className={styles.grid}>
        {swansImages.map((image, index) => (
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
            <ProtectedImage               src={image.thumb}
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
            <ProtectedImage               src={swansImages[activeIndex].full}
              alt={swansImages[activeIndex].alt}
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

export default WildSwansPage;