/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { Grid, Link, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// layouts
import Section from "layouts/Section/Section";

// images
import cobre012 from "assets/images/cobre012.jpg";
import diaz from "assets/images/diaz.jpg";
import truck from "assets/images/truck.jpg";
import hotel from "assets/images/hotel.jpg";

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
      url: "http://www.cubadebate.cu/noticias/2019/07/24/proyecto-cubano-italiano-mejorara-acceso-al-poblado-del-cobre/",
      title: "Proyecto cubano-italiano mejorará acceso al poblado del Cobre",
      date: "24 julio 2019 ",
      photo: truck,
    },
    {
      id: 1,
      title: "Dos nuevos hoteles para El Cobre, Santiago de Cuba",
      date: "5 octubre 2018",
      url: "http://www.cubadebate.cu/noticias/2018/10/05/dos-nuevos-hoteles-para-el-cobre-santiago-de-cuba/",
      photo: hotel,
    },
    {
      id: 2,
      url: "http://www.cubadebate.cu/noticias/2018/06/20/diaz-canel-inicia-visita-a-santiago-de-cuba/",
      date: "20 junio 2018",
      title: "Díaz-Canel en Santiago de Cuba: Viaje a la semilla de la Revolución (+ Video)",
      photo: diaz,
    },
    {
      id: 3,
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
                <Link href={item.url} target="_blank" rel="noopener">
                  <Container
                    flexDirection="column"
                    key={item.id}
                    sx={{
                      width: "350px",
                      marginRight: "20px",
                      img: {
                        width: "100%",
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
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.ul>
    </Section>
  );
};

export default News;
