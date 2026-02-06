import { useTranslation } from "../../hooks/useTranslation";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const { translate } = useTranslation();

  // Replace {name} placeholder with the actual name in bold
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
    </section>
  );
};

export default AboutSection;