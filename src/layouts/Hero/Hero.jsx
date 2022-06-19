/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// own components
import Container from "components/Container/Container";

const Hero = (props) => {
  const { background, sx, children, style } = props;
  return (
    <Container background={background} sx={sx} style={style}>
      {children}
    </Container>
  );
};

Hero.defaultProps = {
  background: "aliceblue",
  sx: {
    padding: { lg: "50px 10rem 50px 10rem", sm: "50px 60px", xs: "20px 20px" },
    justifyContent: "center",
    height: "80vh",
    flexDirection: "column",
    backgroundPosition: { md: "center", sm: "-700px", xs: "-900px" },
    backgroundRepeat: "no-repeat",
  },
  style: {},
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
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
