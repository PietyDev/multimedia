/* eslint-disable react/function-component-definition */

import { useEffect } from "react";

// contexts
import { useRoute } from "context/RouterProvider";

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";

// layouts
import Hero from "layouts/Hero/Hero";
import Section from "layouts/Section/Section";

// images
import heroBackground from "assets/images/07-1140.jpg";

// contexts
import { useLanguage } from "context/LanguageProvider";

// sections
import HeroSection from "./Sections/Hero/Hero";
import ContentSection from "./Sections/Content/Content";

const Culture = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);

  return (
    <Container flexDirection="column">
      <Hero
        sx={{ padding: 0, height: { xs: "80vh", md: "100vh" } }}
        justifyContent="center"
        background={`url(${heroBackground})`}
      >
        <HeroSection />
      </Hero>
      <Section sx={{ padding: { lg: "50px 10rem 0px 10rem", sm: "50px 60px", xs: "20px 20px" } }}>
        <Typography>{languageState.texts.Culture.Brief}</Typography>
      </Section>
      <ContentSection />
    </Container>
  );
};

export default Culture;
