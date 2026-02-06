const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2D4A43",
        padding: "16px 30px",
        marginTop: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "20px",
        }}
      >
        {/* Left - Copyright */}
        <p style={{ color: "#C9A86C", opacity: 0.7, margin: 0 }}>
          © 2025 Anastasiia Kolisnyk
        </p>

        {/* Center - Contact Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:akolesnykl989@gmail.com"
            style={{ color: "#C9A86C", textDecoration: "none" }}
          >
            akolesnykl989@gmail.com
          </a>

          <a
            href="https://wa.me/qr/A3NYYPE55OODK1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C9A86C", textDecoration: "none" }}
          >
            WhatsApp
          </a>

          <a
            href="https://www.behance.net/akolesnyk14bf8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C9A86C", textDecoration: "none" }}
          >
            Behance
          </a>

          <a
            href="https://www.instagram.com/akolesnyk.sketch?igsh=eTgyYnNrZnVneDRy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C9A86C", textDecoration: "none" }}
          >
            Instagram
          </a>
        </div>

        {/* Right - Logo */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#C9A86C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "14px",
            color: "#2D4A43",
            fontWeight: 600,
          }}
        >
          AK
        </div>
      </div>
    </footer>
  );
};

export default Footer;
