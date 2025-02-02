/* eslint-disable react/function-component-definition */

import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

// contexts
import { useRoute } from "context/RouterProvider";

// own components
import Container from "components/Container/Container";

// layouts
import Hero from "layouts/Hero/Hero";

// images
import heroBackground from "assets/images/06-1140.jpg";

// sections
import HeroSection from "./Sections/Hero/Hero";
import LimitsSection from "./Sections/Limits/Limits";
import FeatureSection from "./Sections/Features/Features";

const Geography = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {
    setRouteState({ type: "set", to: 2 });
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
      <LimitsSection />
      <FeatureSection />
      <ScrollToTop smooth />
    </Container>
  );
};

export default Geography;
