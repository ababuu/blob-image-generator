import React from "react";
import PropTypes from "prop-types";

const BlobImage = ({ src, width, height, borderRadius, shape }) => {
  // Default values
  const defaultBorderRadius = "37% 63% 69% 31% / 62% 54% 46% 33%";
  const defaultWidth = "200px";
  const defaultHeight = "200px";

  // Predefined shapes
  const shapes = {
    circle: "50%",
    oval: "50% / 30%",
    "random blob": defaultBorderRadius,
  };

  // Determine the border-radius value
  let finalBorderRadius = borderRadius || shapes[shape] || defaultBorderRadius;

  // Style for the image
  const imageStyle = {
    width: width || defaultWidth,
    height: height || defaultHeight,
    borderRadius: finalBorderRadius,
    objectFit: "cover",
  };

  return <img src={src} alt="Blob Image" style={imageStyle} />;
};

// Prop Types
BlobImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  shape: PropTypes.oneOf(["circle", "oval", "random blob"]),
};

// Default Props
BlobImage.defaultProps = {
  width: "200px",
  height: "200px",
  shape: "random blob",
};

export default BlobImage;
