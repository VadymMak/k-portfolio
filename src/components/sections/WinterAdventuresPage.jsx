import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./WinterAdventuresPage.module.css";
import ProtectedImage from "../ProtectedImage";

const winterImages = [
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_01.webp", full: "/gallery/books/winter-adventures/full/full_01.webp", alt: "Book spread - Santa" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_03.webp", full: "/gallery/books/winter-adventures/full/full_03.webp", alt: "Book spread - Girl at window" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_02.webp", full: "/gallery/books/winter-adventures/full/full_02.webp", alt: "Sketch - Children in village" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_04.webp", full: "/gallery/books/winter-adventures/full/full_04.webp", alt: "B&W - Children in village" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_05.webp", full: "/gallery/books/winter-adventures/full/full_05.webp", alt: "Color - Children in village" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_06.webp", full: "/gallery/books/winter-adventures/full/full_06.webp", alt: "B&W - Girl at window" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_07.webp", full: "/gallery/books/winter-adventures/full/full_07.webp", alt: "Color - Girl at window" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_08.webp", full: "/gallery/books/winter-adventures/full/full_08.webp", alt: "Santa over village" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_09.webp", full: "/gallery/books/winter-adventures/full/full_09.webp", alt: "B&W - Girl" },
  { thumb: "/gallery/books/winter-adventures/thumb/thumb_10.webp", full: "/gallery/books/winter-adventures/full/full_10.webp", alt: "Santa over village Titled" },
];

const WinterAdventuresPage = () => {
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
    setActiveIndex((prev) => (prev + 1) % winterImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + winterImages.length) % winterImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="winter-adventures" className={styles.section}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>{translate("books.winterAdventures")}</SectionTitle>
      </motion.div>

      {/* Grid Gallery */}
      <div className={styles.grid}>
        {winterImages.map((image, index) => (
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
            <ProtectedImage               src={winterImages[activeIndex].full}
              alt={winterImages[activeIndex].alt}
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

export default WinterAdventuresPage;