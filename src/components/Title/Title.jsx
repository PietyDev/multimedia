/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

const Body = (props) => {
  const { text, header } = props;
  return (
    <Typography sx={{ textAlign: "justify", marginBottom: "10px" }} variant={header}>
      {text}
    </Typography>
  );
};

Body.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Body;
