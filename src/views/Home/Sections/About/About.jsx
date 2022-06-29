/* eslint-disable react/function-component-definition */
import { css } from "@emotion/css";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { useTheme, Typography, Link } from "@mui/material";

// layouts
import Section from "layouts/Section/Section";

// images
import tuari from "assets/images/tauri.png";
import react from "assets/images/react.png";
import mui from "assets/images/mui.png";
import js from "assets/images/js.png";
import node from "assets/images/node.png";

const Gallery = () => {
  const { languageState } = useLanguage();

  const images = [tuari, react, mui, js, node];

  const theme = useTheme();

  const apparition = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const ulItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const ulList = css({
    display: "flex",
    padding: 0,
    flexWrap: "wrap",
    paddingLeft: "20px",
  });

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
      <motion.div
        variants={apparition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ color: theme.palette.link.main, margin: "20px 0" }}>
          {languageState.texts.Home.Sections.About.Developed.Title}
        </Typography>
      </motion.div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={ulList}
      >
        {languageState.texts.Home.Sections.About.Developed.List.map((item, i) => (
          <motion.div key={item.id} variants={ulItem} viewport={{ once: true }}>
            <SitoContainer alignItems="center" sx={{ marginRight: "20px" }}>
              <SitoImage
                sx={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "100%",
                  background: "#333",
                  marginRight: "10px",
                }}
                src={images[i]}
                alt={item.label}
              />
              <Link
                href={item.link}
                target="_blank"
                rel="_noopener"
                sx={{ color: theme.palette.link.main }}
              >
                {item.label}
              </Link>
            </SitoContainer>
          </motion.div>
        ))}
      </motion.ul>
    </Section>
  );
};

export default Gallery;
