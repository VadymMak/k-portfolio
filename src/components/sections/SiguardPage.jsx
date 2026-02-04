import { useState, useRef, useEffect } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import styles from "./SiguardPage.module.css";

const sigurdImages = [
  { thumb: "/gallery/books/sigurd/thumb/thumb_01.webp", full: "/gallery/books/sigurd/full/full_01.webp", alt: "Sigurd - Chapter 1", hasVideo: false },
  { thumb: "/gallery/books/sigurd/thumb/thumb_02.webp", full: "/gallery/books/sigurd/full/full_02.webp", alt: "Sigurd - Chapter 2", hasVideo: true, videoSrc: "/gallery/books/sigurd/video/video_02" },
  { thumb: "/gallery/books/sigurd/thumb/thumb_03.webp", full: "/gallery/books/sigurd/full/full_03.webp", alt: "Sigurd - Chapter 3", hasVideo: false },
  { thumb: "/gallery/books/sigurd/thumb/thumb_04.webp", full: "/gallery/books/sigurd/full/full_04.webp", alt: "Sigurd - Chapter 4", hasVideo: false },
  { thumb: "/gallery/books/sigurd/thumb/thumb_06.webp", full: "/gallery/books/sigurd/full/full_06.webp", alt: "Sigurd - Sketches", hasVideo: true, videoSrc: "/gallery/books/sigurd/video/video_06" },
  { thumb: "/gallery/books/sigurd/thumb/thumb_05.webp", full: "/gallery/books/sigurd/full/full_05.webp", alt: "Sigurd - Characters", hasVideo: false },
];

const SigurdPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % sigurdImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + sigurdImages.length) % sigurdImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="sigurd" className={styles.section}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Sigurd Fights the Dragon</SectionTitle>
      </motion.div>

      {/* Grid Gallery */}
      <div className={styles.grid}>
        {sigurdImages.map((image, index) => (
          <GridItem
            key={index}
            image={image}
            index={index}
            isMobile={isMobile}
            onOpenLightbox={() => openLightbox(index)}
          />
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
            {/* If current image has video, show video in lightbox */}
            {sigurdImages[activeIndex].hasVideo ? (
              <video
                className={styles.lightboxVideo}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${sigurdImages[activeIndex].videoSrc}.webm`} type="video/webm" />
                <source src={`${sigurdImages[activeIndex].videoSrc}.mp4`} type="video/mp4" />
              </video>
            ) : (
              <img
                src={sigurdImages[activeIndex].full}
                alt={sigurdImages[activeIndex].alt}
                className={styles.lightboxImage}
              />
            )}
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

// Separate component for grid items with video support
const GridItem = ({ image, index, isMobile, onOpenLightbox }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  // Intersection Observer for autoplay on desktop
  useEffect(() => {
    if (!image.hasVideo || isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [image.hasVideo, isMobile]);

  // Handle mobile play button click
  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowPlayButton(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    }
  };

  // Handle click - open lightbox for images, toggle play for videos on mobile
  const handleClick = () => {
    if (image.hasVideo && isMobile) {
      handlePlayClick({ stopPropagation: () => {} });
    } else {
      onOpenLightbox();
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={styles.gridItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={handleClick}
    >
      {image.hasVideo ? (
        <>
          {/* Video element */}
          <video
            ref={videoRef}
            className={styles.video}
            loop
            muted
            playsInline
            poster={image.thumb}
            preload="none"
          >
            <source src={`${image.videoSrc}.webm`} type="video/webm" />
            <source src={`${image.videoSrc}.mp4`} type="video/mp4" />
          </video>

          {/* Play button overlay for mobile */}
          {isMobile && showPlayButton && (
            <div className={styles.playOverlay}>
              <button className={styles.playBtn} onClick={handlePlayClick}>
                ▶
              </button>
            </div>
          )}
        </>
      ) : (
        <img
          src={image.thumb}
          alt={image.alt}
          className={styles.image}
          loading="lazy"
        />
      )}
    </motion.div>
  );
};

export default SigurdPage;