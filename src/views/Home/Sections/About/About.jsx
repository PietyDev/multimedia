/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { useTheme, Typography } from "@mui/material";

// layouts
import Section from "layouts/Section/Section";

const Gallery = () => {
  const { languageState } = useLanguage();

  const theme = useTheme();

  const apparition = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Section background={theme.palette.background.dark} height="400px">
      <motion.div
        variants={apparition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography sx={{ color: theme.palette.link.main }} variant="h3">
          {languageState.texts.Home.Sections.About.Title}
        </Typography>
      </motion.div>
      <motion.div
        variants={apparition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{ marginLeft: "3px", marginTop: "10px", color: theme.palette.link.main }}
        >
          {languageState.texts.Home.Sections.About.Description}
        </Typography>
      </motion.div>
    </Section>
  );
};

export default Gallery;
