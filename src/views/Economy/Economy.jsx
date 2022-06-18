/* eslint-disable react/function-component-definition */

import { useEffect } from "react";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// @mui components
import { useTheme, Button, Link, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";

// layouts
import Hero from "layouts/Hero/Hero";

const Economy = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  const theme = useTheme();

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);
  return (
    <Container>
      <Hero>
        <Typography variant="h1">{languageState.texts.Economy.Title}</Typography>
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

export default Economy;
