import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const bookData = {
  nutcracker: {
    title: "The Nutcracker and the Mouse King",
    image: "/images/11.png",
    description:
      "A magical Christmas tale brought to life through warm, enchanting illustrations that capture the wonder and fantasy of this beloved story.",
  },
  "wild-swans": {
    title: "The Wild Swans",
    image: "/images/6.png",
    description:
      "Hans Christian Andersen's fairy tale reimagined with ethereal watercolors and delicate linework, following Elisa's journey to save her brothers.",
  },
  "winter-adventures": {
    title: "Winter Adventures",
    image: "/images/12.png",
    description:
      "A cozy collection of winter stories featuring snowy landscapes, warm firesides, and the magic of the holiday season.",
  },
  "star-team": {
    title: "Star Team",
    image: "/images/7.png",
    description:
      "An adventurous space journey with lovable characters exploring the cosmos, designed to spark curiosity and imagination in young readers.",
  },
  "sigurd-dragon": {
    title: "Sigurd Fights the Dragon",
    image: "/images/9.png",
    description:
      "A Norse legend retold with dramatic, atmospheric illustrations that bring ancient mythology to life for modern young readers.",
  },
  "secrets-sea": {
    title: "Secrets of the Sea for Little Explorers",
    image: "/images/13.png",
    description:
      "An underwater educational adventure featuring marine life illustrations designed to teach children about ocean ecosystems.",
  },
};

const BookProject = () => {
  const { projectId } = useParams();
  const book = bookData[projectId];

  if (!book) {
    return (
      <div className="p-8 lg:p-16">
        <h1 className="text-[#8B5A3C] text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#8B5A3C] text-xl lg:text-2xl tracking-[0.15em] uppercase font-light mb-6"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {book.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[#2D4A43]/80 text-sm lg:text-base leading-relaxed mb-8"
      >
        {book.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default BookProject;
