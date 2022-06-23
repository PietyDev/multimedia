/* eslint-disable react/function-component-definition */

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { Box, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

// images
import oldImage from "assets/images/1853.jpg";
import florCrombet from "assets/images/flor_crombet.jpg";

// layouts
import Section from "layouts/Section/Section";

const Content = () => {
  const { languageState } = useLanguage();

  // images
  const images = [oldImage, florCrombet];

  const apparition = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Section
      sx={{
        padding: { lg: "75px 10rem 150px 10rem", sm: "50px 60px", xs: "20px 20px" },
        flexDirection: "column",
      }}
    >
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
                <motion.div
                  variants={apparition}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={`${item.id}-${jtem.id}`}
                >
                  <Box>
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
                </motion.div>
              ))}
            </Container>
          )}
        </Container>
      ))}
    </Section>
  );
};

export default Content;
