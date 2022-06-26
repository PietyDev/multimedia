/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

const ListItem = (props) => {
  const { text } = props;
  return (
    <li>
      <Typography sx={{ textAlign: "justify", margin: "5px 0" }}>{text}</Typography>
    </li>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListItem;
