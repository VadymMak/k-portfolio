import { motion } from "framer-motion";
import Footer from "../components/Footer";

const bookProjects = [
  {
    id: "nutcracker",
    title: "The Nutcracker and the Mouse King",
    image: "/gallery/nutcracker.png",
  },
  {
    id: "wild-swans",
    title: "The Wild Swans",
    image: "/gallery/wild-swans.png",
  },
  {
    id: "winter-adventures",
    title: "Winter Adventures",
    image: "/gallery/winter-adventures.png",
  },
  { id: "star-team", title: "Star Team", image: "/gallery/star-team.png" },
  {
    id: "sigurd-dragon",
    title: "Sigurd Fights the Dragon",
    image: "/gallery/sigurd.png",
  },
  {
    id: "secrets-sea",
    title: "Secrets of the Sea for Little Explorers",
    image: "/gallery/sea-secrets.png",
  },
];

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

const Home = () => {
  return (
    <div>
      {/* ==================== HOME SECTION ==================== */}
      <section
        id="home"
        style={{
          minHeight: "calc(100vh - 114px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          src="/gallery/home.png"
          alt="AK Portfolio"
          style={{
            maxWidth: "100%",
            maxHeight: "calc(100vh - 200px)",
            objectFit: "contain",
          }}
        />
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C9B99A",
          padding: "40px",
        }}
      >
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/gallery/about-me.png"
          alt="About Anastasiia Kolisnyk"
          style={{
            maxWidth: "100%",
            maxHeight: "calc(100vh - 100px)",
            objectFit: "contain",
          }}
        />
      </section>

      {/* ==================== CHILDREN'S BOOKS SECTION ==================== */}
      <section
        id="childrens-books"
        style={{
          padding: "80px 40px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Children's Book Illustrations</SectionTitle>
        </motion.div>

        {/* Description */}
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto 60px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#2D4A43",
              marginBottom: "20px",
            }}
          >
            What I Put Into My Illustrations?
          </h3>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              color: "#2D4A43",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            I pour sincerity, emotion, and quiet storytelling into every
            illustration I create. My work is built on intuition — on the rhythm
            of lines, the warmth of color, and the small details that make an
            image feel alive. I strive to capture moments that breathe: gentle
            gestures, subtle expressions, and the atmosphere that surrounds a
            story.
          </p>
        </div>

        {/* Book Projects */}
        {bookProjects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            style={{
              marginBottom: "80px",
              scrollMarginTop: "120px",
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "24px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "#8B5A3C",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              {project.title}
            </motion.h3>
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
      </section>

      {/* ==================== LABEL DESIGN SECTION ==================== */}
      <section
        id="label-design"
        style={{
          padding: "80px 40px",
          scrollMarginTop: "120px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Label Design</SectionTitle>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/gallery/label-design.png"
          alt="Label Design Portfolio"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </section>

      {/* ==================== LOGOS SECTION ==================== */}
      <section
        id="logos"
        style={{
          padding: "80px 40px",
          scrollMarginTop: "120px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Logos</SectionTitle>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/gallery/logos.png"
          alt="Logo Design Portfolio"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </section>

      {/* ==================== BRANDING SECTION ==================== */}
      <section
        id="branding"
        style={{
          padding: "80px 40px",
          scrollMarginTop: "120px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Print and Digital Branding</SectionTitle>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/gallery/branding.png"
          alt="Print and Digital Branding Portfolio"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
