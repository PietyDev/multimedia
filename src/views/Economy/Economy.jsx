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

const Economy = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {
    setRouteState({ type: "set", to: 3 });
  }, []);

  return (
    <Container flexDirection="column">
      <Hero justifyContent="center" background={`url(${heroBackground})`}>
        <HeroSection />
      </Hero>
    </Container>
  );
};

export default Economy;
