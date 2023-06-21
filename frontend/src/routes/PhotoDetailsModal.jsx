import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoDetailsModal.scss";

// PhotoDetailsModal component
const PhotoDetailsModal = ({ photo, onClose, imageSource, username, description }) => {
  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button className="photo-details-modal__close-button" onClick={onClose}>
        {/* Close icon */}
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {/* Display the image */}
      <img
        src={imageSource}
        alt={description}
        className="photo-details-modal__image"
      />
      {/* Display the description */}
      <h3>{description}</h3>
    </div>
  );
};

// Prop types validation
PhotoDetailsModal.propTypes = {
  photo: PropTypes.object,
  onClose: PropTypes.func,
  imageSource: PropTypes.string,
  username: PropTypes.string,
  description: PropTypes.string
};

export default PhotoDetailsModal;