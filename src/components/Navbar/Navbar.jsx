/* eslint-disable react/function-component-definition */
import { Link } from "react-router-dom";

// @mui components
import { useTheme, Button } from "@mui/material";

// own components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Navbar = () => {
  const { languageState } = useLanguage();

  const theme = useTheme();

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
        {languageState.texts.Links.map((item) => (
          <Link key={item.to} to={item.to}>
            <Button>{item.label}</Button>
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default Navbar;
