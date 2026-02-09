/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "../../hooks/useTranslation";
import SectionTitle from "../ui/SectionTitle";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    nameKey: "testimonials.items.0.name",
    roleKey: "testimonials.items.0.role",
    textKey: "testimonials.items.0.text",
    initials: "SK",
  },
  {
    id: 2,
    nameKey: "testimonials.items.1.name",
    roleKey: "testimonials.items.1.role",
    textKey: "testimonials.items.1.text",
    initials: "MR",
  },
  {
    id: 3,
    nameKey: "testimonials.items.2.name",
    roleKey: "testimonials.items.2.role",
    textKey: "testimonials.items.2.text",
    initials: "OT",
  },
];

const TestimonialsSection = () => {
  const { translate } = useTranslation();

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.titleWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle>{translate("testimonials.title")}</SectionTitle>
          </motion.div>

          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className={styles.descriptionText}>
              {translate("testimonials.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Testimonial Cards */}
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.cardText}>
                {translate(item.textKey)}
              </p>
              <div className={styles.cardAuthor}>
                <div className={styles.avatar}>
                  {item.initials}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>
                    {translate(item.nameKey)}
                  </span>
                  <span className={styles.authorRole}>
                    {translate(item.roleKey)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;