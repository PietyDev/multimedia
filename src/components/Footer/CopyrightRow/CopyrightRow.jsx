/* eslint-disable react/function-component-definition */
// @mui components
import { Typography, useTheme } from "@mui/material";

// own components
import Container from "components/Container/Container";

// context
import { useLanguage } from "context/LanguageProvider";

const CopyrightRow = () => {
  const { languageState } = useLanguage();
  const theme = useTheme();

  return (
    <Container
      sx={{ background: theme.palette.text.disabled, padding: "10px" }}
      justifyContent="center"
    >
      <Typography variant="subtitle1" align="center" sx={{ color: theme.palette.link.main }}>
        {languageState.texts.Footer.Copyright}
      </Typography>
    </Container>
  );
};

export default CopyrightRow;
