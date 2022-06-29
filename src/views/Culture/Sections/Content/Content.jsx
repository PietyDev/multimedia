/* eslint-disable react/function-component-definition */
import ReactPlayer from "react-player";
import { useState } from "react";

// sito components
import SitoContainer from "sito-container";

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// @mui components
import { Box, Link, Typography } from "@mui/material";

// own components
import Image from "components/Image/Image";
import Body from "components/Body/Body";
import Title from "components/Title/Title";

// images
import basilisque from "assets/images/basilisque.jpg";

// layouts
import Section from "layouts/Section/Section";

const Content = () => {
  const { languageState } = useLanguage();
  const [error, setError] = useState(false);

  // images
  const images = [basilisque];

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
      {languageState.texts.Culture.Content.map((item) => (
        <SitoContainer key={item.id}>
          {item.type === "body1" && <Body text={item.text} />}
          {item.type === "title" && <Title text={item.text} header={item.header} />}
          {item.type === "youtube" && (
            <SitoContainer
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%", margin: "20px 0" }}
              flexDirection="column"
            >
              {!error && (
                <ReactPlayer
                  url={item.url}
                  onError={(e) => {
                    console.log(e);
                    setError(true);
                  }}
                />
              )}
              {error && (
                <SitoContainer
                  alignItems="center"
                  justifyContent="center"
                  sx={{ height: "200px", width: "200px" }}
                >
                  <Typography sx={{ color: "crimson" }}>Error al cargar el video</Typography>
                </SitoContainer>
              )}
              <Typography>{item.title}</Typography>
              <Typography>{item.description}</Typography>
              <Link href="https://www.youtube.com/channel/UCBWoi89L8Nu3cNJxBQlz5Qg" target="_blank">
                {item.channel}
              </Link>
            </SitoContainer>
          )}

          {item.type === "row" && (
            <SitoContainer>
              {item.content.map((jtem, j) => (
                <motion.div
                  variants={apparition}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={`${item.id}-${jtem.id}`}
                >
                  <Box>
                    {item.type === "title" && <Title text={item.text} header={item.header} />}
                    {item.type === "body1" && <Body text={item.text} />}
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
                            key={ktem.id}
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
            </SitoContainer>
          )}
        </SitoContainer>
      ))}
    </Section>
  );
};

export default Content;
