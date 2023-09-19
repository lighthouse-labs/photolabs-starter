import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photoListData,
  deleteFavorite,
  createFavorite,
  onPhotoClick,
  favPhotos,
}) => {
  // update fav photos on each render when favClick changes
  const handleClick = (photo) => {
    if (!favPhotos?.includes(photo.id)) {
      createFavorite(photo.id);
    } else {
      deleteFavorite(photo.id);
    }
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        onChange={handleClick}
        value={favPhotos?.includes(photoListData.id)}
        photo={photoListData}
      />
      <div onClick={() => onPhotoClick(photoListData)}>
        <img
          id="single-image"
          className="photo-list__image"
          src={photoListData.urls.regular}
        />
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
