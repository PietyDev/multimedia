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
import GallerySection from "./Sections/Gallery/Gallery";

const Home = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {
    setRouteState({ type: "set", to: 0 });
  }, []);

  return (
    <Container flexDirection="column">
      <Hero background={`url(${heroBackground})`}>
        <HeroSection />
      </Hero>
      <GallerySection />
    </Container>
  );
};

export default Home;
