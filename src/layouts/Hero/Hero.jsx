/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// own components
import Container from "components/Container/Container";

const Hero = (props) => {
  const { background, sx, children, style, alignItems, justifyContent } = props;

  const newSx = {
    alignItems,
    justifyContent,
    background: background || "transparent",
    ...sx,
  };

  return (
    <Container sx={newSx} style={style}>
      {children}
    </Container>
  );
};

Hero.defaultProps = {
  background: "aliceblue",
  alignItems: "left",
  justifyContent: "left",
  sx: {
    padding: { lg: "50px 10rem 50px 10rem", sm: "50px 60px", xs: "20px 20px" },
    height: "80vh",
    flexDirection: "column",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  style: {},
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  background: PropTypes.string,
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

export default Hero;
