/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { useTheme, Button, Link, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";

const Contact = () => {
  const { languageState } = useLanguage();

  const theme = useTheme();

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
    <motion.div
      variants={apparition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container
        background="#1e90ff99"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          width: { md: "450px", xs: "295px" },
          padding: "20px",
          height: { md: "315px", xs: "200px" },
          borderRadius: "1rem",
        }}
      >
        <Typography sx={{ color: "#fff", display: { md: "flex", xs: "none" } }} variant="h1">
          {languageState.texts.Home.Title}
        </Typography>
        <Typography sx={{ color: "#fff", display: { md: "none", xs: "flex" } }} variant="h2">
          {languageState.texts.Home.Title}
        </Typography>
        <Container sx={{ flexWrap: "wrap" }}>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "flex", padding: 0, flexWrap: "wrap" }}
          >
            {languageState.texts.Links.map(
              (item, index) =>
                index !== 0 && (
                  <motion.div key={item.to} variants={ulItem} viewport={{ once: true }}>
                    <Link to={item.to} style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        color="lighter"
                        sx={{
                          textTransform: "capitalize",
                          marginRight: "20px",
                          marginTop: "20px",
                          borderRadius: "1rem",
                          "&:hover": {
                            background: theme.palette.primary.main,
                            color: "aliceblue",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </motion.div>
                )
            )}
          </motion.ul>
        </Container>
      </Container>
    </motion.div>
  );
};

export default Contact;
