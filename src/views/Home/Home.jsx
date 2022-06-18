/* eslint-disable react/function-component-definition */

import { useEffect } from "react";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { useTheme, Button, Link, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";

// layouts
import Hero from "layouts/Hero/Hero";

const Home = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();

  useEffect(() => {}, []);
  return (
    <Container>
      <Hero>
        <Typography variant="h1">{languageState.texts.Home.Title}</Typography>
        <Container sx={{ marginTop: "20vh" }}>
          {languageState.texts.Links.map(
            (item, index) =>
              index !== 0 && (
                <Link key={item.to} to={item.to} style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      textTransform: "capitalize",
                      marginRight: "20px",
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
              )
          )}
        </Container>
      </Hero>
    </Container>
  );
};

export default Home;
