import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const bookData = {
  nutcracker: {
    title: "The Nutcracker and the Mouse King",
    image: "/gallery/nutcracker.png",
  },
  "wild-swans": {
    title: "The Wild Swans",
    image: "/gallery/wild-swans.png",
  },
  "winter-adventures": {
    title: "Winter Adventures",
    image: "/gallery/winter-adventures.png",
  },
  "star-team": {
    title: "Star Team",
    image: "/gallery/star-team.png",
  },
  "sigurd-dragon": {
    title: "Sigurd Fights the Dragon",
    image: "/gallery/sigurd.png",
  },
  "secrets-sea": {
    title: "Secrets of the Sea for Little Explorers",
    image: "/gallery/sea-secrets.png",
  },
};

const BookProject = () => {
  const { projectId } = useParams();
  const book = bookData[projectId];

  if (!book) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "24px",
          color: "#8B5A3C",
        }}
      >
        Project not found
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        paddingTop: "50px",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "26px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          color: "#8B5A3C",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        {book.title}
      </motion.h1>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <img
          src={book.image}
          alt={book.title}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>
    </div>
  );
};

export default BookProject;
