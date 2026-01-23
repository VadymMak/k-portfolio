/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";

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

const ChildrensBooksSection = () => {
  return (
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
  );
};

export default ChildrensBooksSection;