import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        {/* Copyright */}
        <p className={styles.copyright}>
          © 2024–2026 Anastasiia Kolisnyk
        </p>

        {/* Contact Links */}
        <div className={styles.links}>
          <a
            href="mailto:akolesnykl989@gmail.com"
            className={styles.link}
          >
            akolesnykl989@gmail.com
          </a>

          <a
            href="https://wa.me/qr/A3NYYPE55OODK1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            WhatsApp
          </a>

          <a
            href="https://www.behance.net/akolesnyk14bf8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Behance
          </a>

          <a
            href="https://www.instagram.com/akolesnyk.sketch?igsh=eTgyYnNrZnVneDRy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
        </div>

        {/* Logo */}
        <div className={styles.logo}>
          AK
        </div>
      </div>

      {/* Copyright Protection Notice */}
      <div className={styles.copyrightNotice}>
        <p className={styles.copyrightText}>
          All illustrations and artwork on this website are protected by international copyright law.
          Unauthorized reproduction, distribution, or use is strictly prohibited.
        </p>
        <p className={styles.copyrightText}>
          Všetky ilustrácie a umelecké diela na tejto stránke sú chránené medzinárodným autorským právom.
          Neoprávnené reprodukovanie, distribúcia alebo použitie je prísne zakázané.
        </p>
        <p className={styles.copyrightText}>
          Все иллюстрации и произведения на этом сайте защищены международным авторским правом.
          Несанкционированное воспроизведение, распространение или использование строго запрещено.
        </p>
        <p className={styles.copyrightText}>
          Усі ілюстрації та твори на цьому сайті захищені міжнародним авторським правом.
          Несанкціоноване відтворення, розповсюдження або використання суворо заборонено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;