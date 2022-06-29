/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

const Body = (props) => {
  const { text } = props;
  return (
    <Typography sx={{ textAlign: "justify", marginBottom: "10px" }} variant="body1">
      {text}
    </Typography>
  );
};

Body.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Body;
