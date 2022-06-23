/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

const ImageChip = (props) => {
  const {
    image,
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
    onClick,
  } = props;

  const newSx = {
    alignItems,
    justifyContent,
    width: fullWidth ? "100%" : "initial",
    background: background || "transparent",
    ...sx,
  };

  const [values, setValues] = useState({ image: "no-image", title: "no-title", text: "no-text" });

  useEffect(() => {
    if (item.title === "no-title") setValues({ image, title, text });
    else setValues(item);
  }, []);

  return (
    <Container
      extraProps={{ onClick }}
      id={id}
      name={name}
      style={style}
      className={className}
      sx={newSx}
    >
      <Container
        id={`${id}-container1`}
        sx={{
          width: "65px",
          height: "65px",
          marginRight: "10px",
          img: {
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "100%",
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Image id={`${id}-image`} img={values.image} alt={`${values.title}-chip`} />
      </Container>
      <Container id={`${id}-container2`} flexDirection="column">
        <Typography id={`${id}-title`} variant="subtitle1">
          {values.title}
        </Typography>
        <Typography id={`${id}-text`} variant="body2">
          {values.text}
        </Typography>
      </Container>
    </Container>
  );
};

ImageChip.defaultProps = {
  image: "no-image",
  title: "no-title",
  text: "no-text",
  item: { image: "no-image", title: "no-title", text: "no-text" },
  background: "transparent",
  alignItems: "left",
  justifyContent: "left",
  className: "",
  id: "",
  name: "",
  fullWidth: false,
  sx: {
    alignItems: "center",
  },
  style: {},
  onClick: undefined,
};

ImageChip.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  item: PropTypes.objectOf(PropTypes.string, PropTypes.string, PropTypes.string),
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
  onClick: PropTypes.func,
};

export default ImageChip;
