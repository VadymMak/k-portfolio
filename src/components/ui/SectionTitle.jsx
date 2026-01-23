const SectionTitle = ({ children }) => (
  <h2
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "28px",
      fontWeight: 400,
      letterSpacing: "0.2em",
      color: "#8B5A3C",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "30px",
    }}
  >
    {children}
  </h2>
);

export default SectionTitle;