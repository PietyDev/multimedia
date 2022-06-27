/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */

import { useState } from "react";

import FsLightbox from "fslightbox-react";

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
import image1 from "assets/images/color.webp";
import image2 from "assets/images/02-1140.jpg";
import image3 from "assets/images/03-1140.jpg";
import image4 from "assets/images/04-1140.jpg";
import image5 from "assets/images/05-1140.jpg";
import image6 from "assets/images/06-1140.jpg";
import image7 from "assets/images/07-1140.jpg";
import image8 from "assets/images/08-1140.jpg";
import image9 from "assets/images/09-1140.jpg";
import image10 from "assets/images/10-1140.jpg";
import image11 from "assets/images/background.jpg";
import image12 from "assets/images/background.webp";
import image13 from "assets/images/basilisque.jpg";
import image14 from "assets/images/cobre012.jpg";
import image15 from "assets/images/el-cobre.jpg";
import image16 from "assets/images/elcbore.webp";
import image17 from "assets/images/elcobre.jpeg";
import image18 from "assets/images/image_1cEdDuH.jpeg";
import image19 from "assets/images/interno-de-la-caridad.jpg";
import image20 from "assets/images/santuario-virgen-caridad-del-cobre.jpeg";
import image21 from "assets/images/vista-della-chiesa-de.jpg";

const Gallery = () => {
  const { languageState } = useLanguage();

  const [lightBox, setLightBox] = useState({
    toggler: false,
    slide: 0,
  });

  const openLightBoxOnSlide = (number) => {
    setLightBox({
      toggler: !lightBox.toggler,
      slide: number,
    });
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
  ];

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
      <FsLightbox toggler={lightBox.toggler} sources={images} slide={lightBox.slide} />
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
        {images.map((item, id) => (
          <motion.div key={id} variants={ulItem} viewport={{ once: true }}>
            <Container
              key={id}
              sx={{
                img: {
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  margin: "10px",
                  cursor: "pointer",
                },
              }}
              extraProps={{
                onClick: () => {
                  setLightBox(true);
                  openLightBoxOnSlide(id + 1);
                },
              }}
            >
              <Image img={item} alt={id} />
            </Container>
          </motion.div>
        ))}
      </motion.ul>
    </Section>
  );
};

export default Gallery;
