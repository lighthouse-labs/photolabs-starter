import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photoData, selectedPhoto, onClick, isFavourite }) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton
        photoData={photoData}
        selectedPhoto={selectedPhoto}
        onClick={onClick}
        isFavourite={isFavourite}
      />
      <div>
        <img src={photoData.urls.regular} alt="new image" className="photo-list__image" />
      </div>
      <div className="photo-list__user-details">
        <div>
          <img
            src={photoData.user.profile}
            alt="profile image"
            className="photo-list__user-profile"
          />
        </div>
        <div className="photo-list__user-info">
          <span>{photoData.username}</span>
          <p className="photo-list__user-location">
            {photoData.location.city},{photoData.location.country}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
