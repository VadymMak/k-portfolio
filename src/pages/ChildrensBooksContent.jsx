import { motion } from "framer-motion";

const ChildrensBooksContent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "80px",
        paddingBottom: "60px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          width: "100%",
        }}
      >
        {/* Title - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "32px",
              fontWeight: 400,
              letterSpacing: "0.3em",
              color: "#8B5A3C",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            Children's Book
            <br />
            Illustrations
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#2D4A43",
              marginBottom: "24px",
            }}
          >
            What I Put Into My Illustrations?
          </h3>

          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#2D4A43",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              I pour sincerity, emotion, and quiet storytelling into every
              illustration I create. My work is built on intuition — on the
              rhythm of lines, the warmth of color, and the small details that
              make an image feel alive. I strive to capture moments that
              breathe: gentle gestures, subtle expressions, and the atmosphere
              that surrounds a story.
            </p>
            <p style={{ marginBottom: "20px" }}>
              I approach each illustration with care and intention. I think
              about how a child will feel when they see the page, how the colors
              will guide their curiosity, and how the composition will help them
              understand the world a little better. My goal is to create images
              that are not only beautiful, but meaningful — illustrations that
              comfort, inspire, and invite the viewer to explore.
            </p>
            <p>
              Every piece I make carries a part of my own experience: my love
              for nature, my fascination with quiet moments, and my belief that
              visual storytelling can nurture kindness, imagination, and hope.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChildrensBooksContent;
