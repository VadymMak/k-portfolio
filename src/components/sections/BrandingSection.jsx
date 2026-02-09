import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./BrandingSection.module.css";

const brandingImages = [
  {
    thumb: "/gallery/branding/thumb/thumb_01.webp",
    full: "/gallery/branding/full/full_01.webp",
    alt: "Botanical linen tea towel",
    product: "Tea Towel",
    category: "Textile Print",
  },
  {
    thumb: "/gallery/branding/thumb/thumb_02.webp",
    full: "/gallery/branding/full/full_02.webp",
    alt: "Impressionist Mood notebook",
    product: "Notebook",
    category: "Stationery",
  },
  {
    thumb: "/gallery/branding/thumb/thumb_03.webp",
    full: "/gallery/branding/full/full_03.webp",
    alt: "Advent 2026 calendar",
    product: "Wall Calendar",
    category: "Stationery",
    wide: true,
  },
  {
    thumb: "/gallery/branding/thumb/thumb_04.webp",
    full: "/gallery/branding/full/full_04.webp",
    alt: "Floral magnolia pillow",
    product: "Decorative Pillow",
    category: "Home Decor",
  },
  {
    thumb: "/gallery/branding/thumb/thumb_05.webp",
    full: "/gallery/branding/full/full_05.webp",
    alt: "Green floral silk scarf",
    product: "Silk Scarf",
    category: "Accessories",
  },
  {
    thumb: "/gallery/branding/thumb/thumb_10.webp",
    full: "/gallery/branding/full/full_10.webp",
    alt: "Lavender field tote bag",
    product: "Tote Bag",
    category: "Accessories",
  },
  {
    thumb: "/gallery/branding/thumb/thumb_11.webp",
    full: "/gallery/branding/full/full_11.webp",
    alt: "Forest stream wall clock",
    product: "Wall Clock",
    category: "Home Decor",
  },
  {
    thumb: "/gallery/branding/thumb/thumb_12.webp",
    full: "/gallery/branding/full/full_12.webp",
    alt: "Landscape acrylic block",
    product: "Acrylic Block",
    category: "Art Print",
  },
  {
    thumb: "/gallery/branding/thumb/thumb_14.webp",
    full: "/gallery/branding/full/full_14.webp",
    alt: "Sunset meadow art print",
    product: "Art Print",
    category: "Wall Art",
  },
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
            className={`${styles.gridItem} ${image.wide ? styles.gridItemWide : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.thumb}
              alt={image.alt}
              className={styles.image}
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className={styles.overlay}>
              <span className={styles.productName}>{image.product}</span>
              <span className={styles.productCategory}>{image.category}</span>
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
              src={brandingImages[activeIndex].full}
              alt={brandingImages[activeIndex].alt}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxInfo}>
              <span className={styles.lightboxProduct}>
                {brandingImages[activeIndex].product}
              </span>
              <span className={styles.lightboxCategory}>
                {brandingImages[activeIndex].category}
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

export default BrandingSection;