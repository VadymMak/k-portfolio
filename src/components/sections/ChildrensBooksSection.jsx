/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import SectionTitle from "../ui/SectionTitle";
import NutCrackerPage from "./NutCrackerPage";
import WildSwansPage from "./WildSwansPage";

import styles from "./ChildrensBooksSection.module.css";

const ChildrensBooksSection = () => {
  return (
    <section id="childrens-books" className={styles.section}>
      {/* Book Pages */}
      <NutCrackerPage />
      <WildSwansPage />
      {/* Позже добавим другие книги: */}
      {/* <WildSwansPage /> */}
      {/* <WinterAdventuresPage /> */}
      {/* <StarTeamPage /> */}
      {/* <SigurdDragonPage /> */}
      {/* <SecretsSeaPage /> */}
    </section>
  );
};

export default ChildrensBooksSection;