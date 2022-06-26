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
import heroBackground from "assets/images/color.webp";

// contexts
import { useLanguage } from "context/LanguageProvider";

// sections
import HeroSection from "./Sections/Hero/Hero";

const Culture = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  useEffect(() => {
    setRouteState({ type: "set", to: 4 });
  }, []);

  return (
    <Container flexDirection="column">
      <Hero justifyContent="center" background={`url(${heroBackground})`}>
        <HeroSection />
      </Hero>
      <Section>
        <Typography>{languageState.texts.Culture.Brief}</Typography>
      </Section>
    </Container>
  );
};

export default Culture;
