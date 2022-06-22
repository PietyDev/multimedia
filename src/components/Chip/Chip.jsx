/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import ImageChip from "./ImageChip/ImageChip";

const Chip = (props) => {
  const { title, text, item } = props;

  const [values, setValues] = useState({ title: "no-title", text: "no-text" });

  useEffect(() => {
    if (item.title === "no-title") setValues({ title, text });
    else setValues(item);
  }, []);

  return (
    <Container flexDirection="column">
      <Typography>{values.title}</Typography>
      <Typography>{values.text}</Typography>
    </Container>
  );
};

Chip.defaultProps = {
  title: "no-title",
  text: "no-text",
  item: { title: "no-title", text: "no-text" },
};

Chip.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  item: PropTypes.objectOf(PropTypes.string, PropTypes.string),
};

export default Chip;

export { ImageChip };
