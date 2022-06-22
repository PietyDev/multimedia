/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import ImageChip from "./ImageChip/ImageChip";

const Chip = (props) => {
  const {
    title,
    text,
    item,
    background,
    fullWidth,
    alignItems,
    justifyContent,
    className,
    sx,
    id,
    name,
    style,
  } = props;

  const newSx = {
    alignItems,
    justifyContent,
    width: fullWidth ? "100%" : "initial",
    background: background || "transparent",
    ...sx,
  };

  const [values, setValues] = useState({ title: "no-title", text: "no-text" });

  useEffect(() => {
    if (item.title === "no-title") setValues({ title, text });
    else setValues(item);
  }, []);

  return (
    <Container
      id={id}
      name={name}
      style={style}
      className={className}
      sx={newSx}
      flexDirection="column"
    >
      <Typography>{values.title}</Typography>
      <Typography>{values.text}</Typography>
    </Container>
  );
};

Chip.defaultProps = {
  title: "no-title",
  text: "no-text",
  item: { title: "no-title", text: "no-text" },
  background: "transparent",
  alignItems: "left",
  justifyContent: "left",
  className: "",
  id: "",
  name: "",
  fullWidth: false,
  sx: {},
  style: {},
};

Chip.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  item: PropTypes.objectOf(PropTypes.string, PropTypes.string),
  background: PropTypes.string,
  className: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default Chip;

export { ImageChip };
