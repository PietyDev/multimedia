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
import heroBackground from "assets/images/elcobre.jpeg";

// sections
import HeroSection from "./Sections/Hero/Hero";
import GallerySection from "./Sections/Gallery/Gallery";
import AboutSection from "./Sections/About/About";
import NewsSection from "./Sections/News/News";

const Home = () => {
  const { setRouteState } = useRoute();

  useEffect(() => {
    setRouteState({ type: "set", to: 0 });
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
        justifyContent={{ xs: "center", md: "flex-end" }}
        sx={{ padding: 0, height: { xs: "80vh", md: "100vh" } }}
        alignItems="center"
        background={`url(${heroBackground})`}
      >
        <HeroSection />
      </Hero>
      <GallerySection />
      <AboutSection />
      <NewsSection />
      <ScrollToTop smooth />
    </Container>
  );
};

export default Home;
