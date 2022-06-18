/* eslint-disable react/function-component-definition */
import { useEffect } from "react";
import { Link } from "react-router-dom";

// @mui components
import { useTheme, Button } from "@mui/material";

// own components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

const Navbar = () => {
  const { routeState, setRouteState } = useRoute();
  const { languageState } = useLanguage();

  const theme = useTheme();

  const handleLink = (e) => {
    const { id } = e.target;
    setRouteState({ type: "set", to: Number(id.substring(2)) });
  };

  useEffect(() => {}, [routeState]);

  return (
    <Container
      sx={{ width: "100vw", position: "fixed", top: 0, zIndex: 99 }}
      alignItems="center"
      flexDirection="column"
    >
      <Container
        sx={{ padding: "5px 0" }}
        justifyContent="center"
        fullWidth
        background={theme.palette.background.dark}
      >
        {languageState.texts.Links.map((item, i) => (
          <Link
            id={`fl${i}`}
            key={item.to}
            to={item.to}
            style={{
              textDecoration: item.index !== routeState.route ? "none" : "underline",
              textDecorationColor:
                item.index !== routeState.route ? "transparent" : theme.palette.link.main,
            }}
          >
            <Button
              id={`fb${i}`}
              onClick={handleLink}
              color="link"
              sx={{ textTransform: "capitalize" }}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default Navbar;
