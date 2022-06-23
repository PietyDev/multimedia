/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { Typography } from "@mui/material";

const Hero = () => {
  const { languageState } = useLanguage();

  const apparition = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={apparition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Typography variant="h1">{languageState.texts.Economy.Title}</Typography>
    </motion.div>
  );
};

export default Hero;
