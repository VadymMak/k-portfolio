import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import styles from "./NutCrackerPage.module.css";

const nutcrackerImages = [
  { thumb: "/gallery/books/nutcracker/nc-5.webp", full:"/gallery/books/nutcracker/nc-5.webp", alt: "Character sketches" },
  { thumb: "/gallery/books/nutcracker/thumb_01.webp", full: "/gallery/books/nutcracker/full_01.webp", alt: "Book spread 1" },
  { thumb: "/gallery/books/nutcracker/nc-2.webp", full:"/gallery/books/nutcracker/nc-2.webp", alt: "Book covers" },
  { thumb: "/gallery/books/nutcracker/thumb_02.webp", full: "/gallery/books/nutcracker/full_02.webp", alt: "Book spread 2" },
  { thumb: "/gallery/books/nutcracker/nc-4.webp", full:"/gallery/books/nutcracker/nc-4.webp", alt: "Full cover" },
];

const NutCrackerPage = () => {
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
    setActiveIndex((prev) => (prev + 1) % nutcrackerImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + nutcrackerImages.length) % nutcrackerImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="nutcracker" className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Nutcracker and the Mouse King
      </motion.h2>

      <div className={styles.grid}>
        {nutcrackerImages.map((image, index) => (
          <motion.div
            key={index}
            className={`${styles.gridItem} ${styles[`item${index + 1}`]}`}
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
              src={nutcrackerImages[activeIndex].full}
              alt={nutcrackerImages[activeIndex].alt}
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

export default NutCrackerPage;