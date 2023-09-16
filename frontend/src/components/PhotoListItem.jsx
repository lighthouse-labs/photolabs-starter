import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoListData, onChange }) => {
  const [favClick, setFavClick] = useState(false);

  const handleClick = () => {
    setFavClick(!favClick);
    onChange(photoListData);
  };
  
  return (
    <li className="photo-list__item">
      <PhotoFavButton onChange={handleClick} value={favClick}/>
      <div>
        <img className="photo-list__image" src={photoListData.urls.regular} />
      </div>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photoListData.user.profile}
        />

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
