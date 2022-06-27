/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { Grid, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// layouts
import Section from "layouts/Section/Section";

// images
import cobre012 from "assets/images/cobre012.jpg";

const News = () => {
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

  const news = [
    {
      id: 0,
      url: "http://www.cubadebate.cu/noticias/2017/11/11/revitalizan-emblematico-poblado-cubano-de-el-cobre/",
      photo: cobre012,
      title: "Revitalizan emblemático poblado cubano de El Cobre",
      date: "11 noviembre 2017 ",
    },
  ];

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
        <Typography variant="h3">{languageState.texts.Home.Sections.News.Title}</Typography>
      </motion.div>
      <motion.div
        variants={apparition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="body1" sx={{ marginLeft: "3px", marginTop: "10px" }}>
          {languageState.texts.Home.Sections.News.Description}
        </Typography>
      </motion.div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ padding: 0 }}
      >
        <Grid container>
          {news.map((item) => (
            <Grid item key={item.id}>
              <motion.div variants={ulItem} viewport={{ once: true }}>
                <Container
                  key={item.id}
                  sx={{
                    img: {
                      width: "350px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      margin: "10px",
                    },
                  }}
                >
                  <Image img={item.photo} alt={item.title} />
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="subtitle2">{item.date}</Typography>
                </Container>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.ul>
    </Section>
  );
};

export default News;
