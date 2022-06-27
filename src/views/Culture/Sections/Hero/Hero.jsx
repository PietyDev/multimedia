/* eslint-disable react/function-component-definition */

import { css } from "@emotion/css";

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

  const divCss = css({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "#1e90ffba",
    padding: "0 10rem",
  });

  return (
    <motion.div
      variants={apparition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={divCss}
    >
      <Typography variant="h1" sx={{ color: "aliceblue" }}>
        {languageState.texts.Culture.Title}
      </Typography>
    </motion.div>
  );
};

export default Hero;
