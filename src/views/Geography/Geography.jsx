/* eslint-disable react/function-component-definition */

import { useEffect } from "react";

// contexts
import { useRoute } from "context/RouterProvider";

// own components
import Container from "components/Container/Container";

// layouts
import Hero from "layouts/Hero/Hero";

// images
import heroBackground from "assets/images/color.webp";

// sections
import HeroSection from "./Sections/Hero/Hero";
import LimitsSection from "./Sections/Limits/Limits";
import FeatureSection from "./Sections/Features/Features";

const Geography = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {
    setRouteState({ type: "set", to: 2 });
  }, []);
  return (
    <Container flexDirection="column">
      <Hero justifyContent="center" background={`url(${heroBackground})`}>
        <HeroSection />
      </Hero>
      <LimitsSection />
      <FeatureSection />
    </Container>
  );
};

export default Geography;
