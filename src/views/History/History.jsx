/* eslint-disable react/function-component-definition */

import { useEffect } from "react";

// contexts
import { useRoute } from "context/RouterProvider";

// own components
import Container from "components/Container/Container";

// layouts
import Hero from "layouts/Hero/Hero";

// images
import heroBackground from "assets/images/hotel.jpg";

// sections
import HeroSection from "./Sections/Hero/Hero";
import ContentSection from "./Sections/Content/Content";

const History = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {
    setRouteState({ type: "set", to: 1 });
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
      <ContentSection />
    </Container>
  );
};

export default History;
