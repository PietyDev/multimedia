/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// layouts
import Section from "layouts/Section/Section";

// images
import heroBackground from "assets/images/color.webp";

const Gallery = () => {
  const { languageState } = useLanguage();

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

  const apparition = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Section
      sx={{
        padding: { lg: "75px 10rem 150px 10rem", sm: "50px 60px", xs: "20px 20px" },
        flexDirection: "column",
      }}
    >
      <motion.div
        variants={apparition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h3">{languageState.texts.Home.Sections.Gallery.Title}</Typography>
      </motion.div>
      <motion.div
        variants={apparition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="body1" sx={{ marginLeft: "3px", marginTop: "10px" }}>
          {languageState.texts.Home.Sections.Gallery.Description}
        </Typography>
      </motion.div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: "flex", padding: 0, flexWrap: "wrap" }}
      >
        {[
          { img: heroBackground, id: 0 },
          { img: heroBackground, id: 1 },
          { img: heroBackground, id: 2 },
          { img: heroBackground, id: 3 },
          { img: heroBackground, id: 4 },
          { img: heroBackground, id: 5 },
          { img: heroBackground, id: 6 },
        ].map((item) => (
          <motion.div key={item.id} variants={ulItem} viewport={{ once: true }}>
            <Container
              key={item.id}
              sx={{
                img: {
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  margin: "10px",
                },
              }}
            >
              <Image img={item.img} alt={item.id} />
            </Container>
          </motion.div>
        ))}
      </motion.ul>
    </Section>
  );
};

export default Gallery;
