import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoListData }) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <div>
        <img className="photo-list__image" src={photoListData.imageSource} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoListData.profile} />

        <div className="photo-list__user-info">
          <div>{photoListData.username}</div>
          <div className="photo-list__user-location">
            {photoListData.location.city}, {photoListData.location.country}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
