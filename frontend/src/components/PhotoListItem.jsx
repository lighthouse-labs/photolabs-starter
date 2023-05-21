import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = (id) => {
    setIsFav(!isFav);
    if (!isFav) {
      props.addFavouritePhoto(id);
    }
  };

  const handleModalClick = (id) => {
    props.openModal(id);
  };

  return (
    <div
      key={props.id}
      className={props.imageContainerClassName}
      // className={`${props.className}`}
      onClick={() => handleModalClick(props.id)}
    >
      <PhotoFavButton
        photoId={props.id}
        isFav={isFav}
        handleFavClick={handleFavClick}
        favouritePhotos={props.favouritePhotos}
      />
      <img
        src={props.imageSource}
        alt={`${props.username}'s photo`}
        // className="photo-list--image"
        className={props.imageClassName}
      />
      {props.showProfile && (
        <div className="photo-list--user-details">
          <img
            src={props.thumbnail}
            alt={props.username}
            className="photo-list--user-profile"
          />
          <div className="photo-list--user-info">
            <span>{props.username}</span>
            <br />
            <span className="photo-list--user-location">
              {props.city}, {props.country}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoListItem;
