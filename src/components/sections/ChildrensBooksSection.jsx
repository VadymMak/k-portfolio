/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import NutCrackerPage from "./NutCrackerPage";
import WildSwansPage from "./WildSwansPage";
import WinterAdventuresPage from "./WinterAdventuresPage";
import SigurdPage from "./SiguardPage";
import SeaSecretsPage from "./SeaSecretsPage";
import MagicWorldPage from "./MagicWorldPage";

import styles from "./ChildrensBooksSection.module.css";

const ChildrensBooksSection = () => {
  return (
    <section id="childrens-books" className={styles.section}>
      {/* Book Pages */}
      <NutCrackerPage />
      <WildSwansPage />
      <WinterAdventuresPage />
      <MagicWorldPage />
      <SigurdPage />
      <SeaSecretsPage />
    </section>
  );
};

export default ChildrensBooksSection;