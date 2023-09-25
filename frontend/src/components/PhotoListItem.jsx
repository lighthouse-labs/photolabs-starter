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
    const favs = favPhotos?.find((favPhoto) => favPhoto.id === photo.id);
    if (!favs) {
      createFavorite(photo);
    } else {
      deleteFavorite(photo.id);
    }
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        onChange={handleClick}
        value={favPhotos?.find((favPhoto) => favPhoto.id === photoListData.id)}
        photo={photoListData}
      />
      <div onClick={() => onPhotoClick(photoListData)}>
        <img
          id="single-image"
          className="photo-list__image"
          src={photoListData.urls.regular}
          alt="photograph"
        />
      </div>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photoListData.user.profile}
          alt="photograph"
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
