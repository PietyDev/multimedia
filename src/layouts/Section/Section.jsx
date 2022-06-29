/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// own components
import Container from "components/Container/Container";

const Section = (props) => {
  const { background, sx, children, style, height } = props;

  const newSx = {
    ...sx,
    height,
  };

  return (
    <Container background={background} sx={newSx} style={style}>
      {children}
    </Container>
  );
};

Section.defaultProps = {
  background: "aliceblue",
  height: "auto",
  sx: {
    padding: { lg: "50px 10rem 50px 10rem", sm: "50px 60px", xs: "20px 20px" },
    flexDirection: "column",
  },
  style: {},
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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

export default Section;
