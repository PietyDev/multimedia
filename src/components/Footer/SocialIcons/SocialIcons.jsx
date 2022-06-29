/* eslint-disable react/function-component-definition */
// @mui components
import { Button, Link } from "@mui/material";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// own components
import Container from "components/Container/Container";

const buttonStyle = {
  width: 0,
  borderRadius: "100%",
  minWidth: 0,
  padding: "10px 20px",
  borderWidth: "2px",
};

const SocialIcons = () => (
  <Container sx={{ marginTop: "20px" }}>
    <Link
      target="_blank"
      rel="noreferrer"
      href="https://www.facebook.com/Cine-Service-Group-131315229117003"
      sx={{ marginRight: "20px" }}
    >
      <Button variant="outlined" color="link" aria-label="facebook" sx={buttonStyle}>
        <FacebookIcon fontSize="small" />
      </Button>
    </Link>
    <Link
      target="_blank"
      rel="noreferrer"
      href="https://twitter.com/cineserviceg"
      sx={{ marginRight: "20px" }}
    >
      <Button variant="outlined" sx={buttonStyle} color="link" aria-label="twitter">
        <TwitterIcon fontSize="small" />
      </Button>
    </Link>
    <Link
      target="_blank"
      rel="noreferrer"
      href="https://www.instagram.com/insectarefeed/"
      sx={{ marginRight: "20px" }}
    >
      <Button variant="outlined" sx={buttonStyle} color="link" aria-label="instagram">
        <InstagramIcon fontSize="small" />
      </Button>
    </Link>
    <Link
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/company/cine-service-group?lipi=urn%3Ali%3Apage%3Acompanies_company_index%3BRFpk7qr9S7aLCSP6edwJQg%3D%3D"
      sx={{ marginRight: "20px" }}
    >
      <Button variant="outlined" sx={buttonStyle} color="link" aria-label="linkedin">
        <LinkedInIcon fontSize="small" />
      </Button>
    </Link>
  </Container>
);

export default SocialIcons;
