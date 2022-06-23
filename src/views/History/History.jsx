/* eslint-disable react/function-component-definition */

import { useEffect } from "react";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// @mui components
import { Typography, Box } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// images
import oldImage from "assets/images/1853.jpg";
import florCrombet from "assets/images/flor_crombet.jpg";

// layouts
import Hero from "layouts/Hero/Hero";
import Section from "layouts/Section/Section";

// images
import heroBackground from "assets/images/color.webp";

// sections
import HeroSection from "./Sections/Hero/Hero";

const History = () => {
  const { setRouteState } = useRoute();
  const { languageState } = useLanguage();

  // images
  const images = [oldImage, florCrombet];

  useEffect(() => {
    setRouteState({ type: "set", to: 1 });
  }, []);
  return (
    <Container flexDirection="column">
      <Hero justifyContent="center" background={`url(${heroBackground})`}>
        <HeroSection />
      </Hero>

      <Section>
        {languageState.texts.History.Content.map((item) => (
          <Container key={item.id}>
            {item.type === "body1" && (
              <Typography sx={{ textAlign: "justify", marginBottom: "10px" }} variant={item.type}>
                {item.text}
              </Typography>
            )}
            {item.type === "row" && (
              <Container>
                {item.content.map((jtem, j) => (
                  <Box key={`${item.id}-${jtem.id}`}>
                    {jtem.type === "body1" && (
                      <Typography sx={{ textAlign: "justify" }} variant={jtem.type}>
                        {jtem.text}
                      </Typography>
                    )}
                    {jtem.type === "image" && (
                      <Box
                        sx={{
                          width: jtem.width,
                          height: jtem.height,
                          margin: j === 0 ? "0 40px 40px 0" : "0 0 40px 40px",
                          img: {
                            width: "100%",
                            height: "100%",
                            borderRadius: "1rem",
                            objectFit: "cover",
                          },
                        }}
                      >
                        <Image img={images[jtem.image]} alt={jtem.alt} />
                        <Typography variant="subtitle2">{jtem.alt}</Typography>
                      </Box>
                    )}
                    {jtem.type === "column" && (
                      <Box>
                        {jtem.content.map((ktem) => (
                          <Typography
                            sx={{ textAlign: "justify", marginBottom: "10px" }}
                            variant={ktem.type}
                          >
                            {ktem.text}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}
              </Container>
            )}
          </Container>
        ))}
      </Section>
    </Container>
  );
};

export default History;
