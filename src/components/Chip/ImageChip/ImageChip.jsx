/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

// @mui components
import { Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Image from "components/Image/Image";

const ImageChip = (props) => {
  const { image, title, text, item } = props;

  const [values, setValues] = useState({ image: "no-image", title: "no-title", text: "no-text" });

  useEffect(() => {
    if (image.title === "no-title") setValues({ image, title, text });
    else setValues(item);
  }, []);

  return (
    <Container>
      <Container
        sx={{
          with: "90px",
          height: "90px",
          img: {
            with: "100%",
            height: "100%",
          },
        }}
      >
        <Image img={values.image} alt={`${values.title}-chip`} />
      </Container>
      <Container flexDirection="column">
        <Typography>{values.title}</Typography>
        <Typography>{values.text}</Typography>
      </Container>
    </Container>
  );
};

ImageChip.defaultProps = {
  image: "no-image",
  title: "no-title",
  text: "no-text",
  item: { image: "no-image", title: "no-title", text: "no-text" },
};

ImageChip.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  item: PropTypes.objectOf(PropTypes.string, PropTypes.string, PropTypes.string),
};

export default ImageChip;
