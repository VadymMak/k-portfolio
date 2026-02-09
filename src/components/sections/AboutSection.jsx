import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const { translate } = useTranslation();

  const renderIntro = () => {
    const intro = translate("about.intro");
    const name = translate("about.name");
    const parts = intro.split("{name}");
    
    return (
      <>
        {parts[0]}
        <strong className={styles.name}>{name}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="about" className={styles.section}>
      {/* ========== DESKTOP VERSION ========== */}
      <div className={styles.desktopContainer}>
        <div className={styles.imageWrapper}>
          <img
            src="/gallery/about/about-me_empty.webp"
            alt="About Me"
            className={styles.aboutImage}
          />
          
          <div className={styles.textOverlay}>
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                {renderIntro()}
              </p>
              <p className={styles.paragraph}>
                {translate("about.work")}
              </p>
              <p className={styles.paragraph}>
                {translate("about.goal")}
              </p>
              <p className={styles.paragraph}>
                {translate("about.explore")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== MOBILE VERSION ========== */}
      <div className={styles.mobileContainer}>
        {/* Portrait Image */}
        <div className={styles.mobileImageWrapper}>
          <img
            src="/gallery/about/about-photo.webp"
            alt="Anastasiia Kolisnyk"
            className={styles.mobileImage}
          />
        </div>

        {/* Text Content */}
        <div className={styles.mobileTextWrapper}>
          <div className={styles.mobileTitleWrapper}>
            <SectionTitle textKey="menu.about" />
          </div>

          <div className={styles.mobileDescription}>
            <p className={styles.mobileText}>
              {renderIntro()}
            </p>
            <p className={styles.mobileText}>
              {translate("about.work")}
            </p>
            <p className={styles.mobileText}>
              {translate("about.goal")}
            </p>
            <p className={styles.mobileText}>
              {translate("about.explore")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;