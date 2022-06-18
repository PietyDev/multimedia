/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// @mui components
import { useTheme, Typography, Link as MuiLink, Box, Grid } from "@mui/material";

// context
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// own components
import Container from "components/Container/Container";
import SocialIcons from "./SocialIcons/SocialIcons";
import CopyrightRow from "./CopyrightRow/CopyrightRow";

const Footer = () => {
  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();

  const theme = useTheme();

  const handleLink = (e) => {
    const { id } = e.target;
    setRouteState({ type: "set", to: Number(id.substring(2)) });
  };

  useEffect(() => {}, [routeState]);

  return (
    <Box sx={{ background: theme.palette.background.dark, marginTop: "40px" }}>
      <Grid
        sx={{
          flexGrow: 1,
          padding: { md: "40px 10rem", xs: "20px 40px" },
          justifyContent: {
            xs: "left",
            md: "space-around",
          },
        }}
        container
        spacing={4}
      >
        <Grid md={5} item>
          <Container flexDirection="column" sx={{ paddingRight: "20px" }}>
            <Typography variant="subtitle1" sx={{ color: theme.palette.link.main }}>
              {languageState.texts.Footer.Description1}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.link.main, marginTop: "20px" }}
            >
              {languageState.texts.Footer.Description2}
            </Typography>
            <Container>
              <SocialIcons />
            </Container>
          </Container>
        </Grid>
        <Grid xs={10} md={2} item>
          <Container flexDirection="column">
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "none", color: theme.palette.link.main }}
            >
              {languageState.texts.Footer.Title}
            </Typography>
            <Container align="flex-start" flexDirection="column">
              {languageState.texts.Links.map((item, i) => (
                <Container align="flex-start" key={item.id} sx={{ marginTop: "15px" }}>
                  <Link style={{ textDecoration: "none" }} id={`fl${i}`} to={item.to}>
                    <Typography
                      id={`fb${i}`}
                      onClick={handleLink}
                      sx={{
                        textAlign: "left",
                        textTransform: "none",
                        color:
                          item.index === routeState.route
                            ? theme.palette.link.dark
                            : theme.palette.link.main,
                        "&:hover": {
                          color: theme.palette.link.dark,
                        },
                      }}
                      size="medium"
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </Container>
              ))}
            </Container>
          </Container>
        </Grid>
        <Grid xs={10} md={2} item>
          <Container flexDirection="column">
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "none", color: theme.palette.link.main }}
            >
              {languageState.texts.Footer.UtilLinks.Title}
            </Typography>
            <Container flexDirection="column">
              {languageState.texts.Footer.UtilLinks.Links.map((item, i) => (
                <Container key={item.id} align="center" sx={{ marginTop: "15px" }}>
                  <Link style={{ textDecoration: "none" }} id={`fl${i}`} to={item.route}>
                    <Typography
                      id={`fb${i}`}
                      onClick={handleLink}
                      sx={{
                        textTransform: "none",
                        color:
                          item.index === routeState.route
                            ? theme.palette.link.dark
                            : theme.palette.link.main,
                        "&:hover": {
                          color: theme.palette.link.dark,
                        },
                      }}
                      variant="subtitle1"
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </Container>
              ))}
            </Container>
          </Container>
        </Grid>
        <Grid xs={10} md={2} item>
          <Container flexDirection="column">
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "none", color: theme.palette.link.main }}
            >
              {languageState.texts.Footer.ContactLinks.Title}
            </Typography>
            <Container flexDirection="column">
              {languageState.texts.Footer.ContactLinks.Links.map((item, i) => (
                <Container key={item.id} align="center" sx={{ marginTop: "15px" }}>
                  {item.action ? (
                    <MuiLink
                      sx={{
                        textDecoration: "none",
                        color: theme.palette.link.main,
                        "&:hover": {
                          color: theme.palette.link.dark,
                        },
                      }}
                      id={`fl${i}`}
                      href={item.action}
                    >
                      <Typography
                        id={`fb${i}`}
                        onClick={handleLink}
                        sx={{
                          textTransform: "none",
                        }}
                        size="medium"
                      >
                        {item.label}
                      </Typography>
                    </MuiLink>
                  ) : (
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textTransform: "none",
                        color: theme.palette.link.main,
                      }}
                    >
                      {item.label}
                    </Typography>
                  )}
                </Container>
              ))}
            </Container>
          </Container>
        </Grid>
      </Grid>
      <CopyrightRow />
    </Box>
  );
};

export default Footer;
