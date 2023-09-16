import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoListData }) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <div>
        <img className="photo-list__image" src={photoListData.urls.regular} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoListData.user.profile} />

        <div className="photo-list__user-info">
          <div>{photoListData.user.name}</div>
          <div className="photo-list__user-location">
            {photoListData.location.city}, {photoListData.location.country}
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
