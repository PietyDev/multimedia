/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// @emotion
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Body from "components/Body/Body";
import ListItem from "components/ListItem/ListItem";
import Title from "components/Title/Title";

// layouts
import Section from "layouts/Section/Section";

const Content = () => {
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

  const ulList = css({
    display: "flex",
    padding: 0,
    flexDirection: "column",
    paddingLeft: "20px",
  });

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
        <Typography variant="h3">{languageState.texts.Geography.Titles.Features}</Typography>
      </motion.div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={ulList}
      >
        {languageState.texts.Geography.Features.map((item) => (
          <motion.div key={item.id} variants={ulItem} viewport={{ once: true }}>
            <Container key={item.id}>
              {item.type === "body1" && <Body text={item.text} />}
              {item.type === "list" && <ListItem text={item.text} />}
              {item.type === "title" && <Title text={item.text} header={item.header} />}
            </Container>
          </motion.div>
        ))}
      </motion.ul>
    </Section>
  );
};

export default Content;
