import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/gallery/about/about-me_empty.webp"
            alt="About Me"
            className={styles.aboutImage}
          />
          
          <div className={styles.textOverlay}>
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                I'm <strong className={styles.name}>Anastasiia Kolisnyk</strong> — an illustrator, designer, and creative
                entrepreneur based in Trenčín, Slovakia. I create artwork that
                blends emotional clarity with thoughtful craftsmanship, bringing
                together illustration, storytelling, multilingual adaptation, and
                visual identity design.
              </p>
              <p className={styles.paragraph}>
                My work spans children's books, educational materials, packaging,
                label design, logos, and print & digital branding. I focus on warm
                color palettes, intuitive composition, and imagery that feels alive —
                full of rhythm, sincerity, and gentle wonder.
              </p>
              <p className={styles.paragraph}>
                Whether I'm illustrating marine animals for young readers,
                designing a brand's visual language, or crafting packaging that
                tells a story, my goal is always the same: to create meaningful,
                heartfelt visuals that inspire curiosity and connect with people.
              </p>
              <p className={styles.paragraph}>
                Explore my portfolio to discover the projects, illustrations, and
                creative worlds I build with care and imagination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;