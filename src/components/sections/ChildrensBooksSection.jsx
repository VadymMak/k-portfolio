/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import NutCrackerPage from "./NutCrackerPage";
import WildSwansPage from "./WildSwansPage";
import WinterAdventuresPage from "./WinterAdventuresPage";
import SigurdPage from "./SiguardPage";
import SeaSecretsPage from "./SeaSecretsPage";

import styles from "./ChildrensBooksSection.module.css";

const ChildrensBooksSection = () => {
  return (
    <section id="childrens-books" className={styles.section}>
      {/* Book Pages */}
      <NutCrackerPage />
      <WildSwansPage />
      <WinterAdventuresPage />
      <SigurdPage />
      <SeaSecretsPage />
      {/* Позже добавим другие книги: */}
      {/* <StarTeamPage /> */}
    </section>
  );
};

export default ChildrensBooksSection;