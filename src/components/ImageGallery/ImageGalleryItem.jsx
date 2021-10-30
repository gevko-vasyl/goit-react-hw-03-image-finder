import React from "react";
import PropTypes from "prop-types";

export default function ImageGalleryItem({
  image,
  onImgClick,
  largeImageURL,
  tags,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onImgClick(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
