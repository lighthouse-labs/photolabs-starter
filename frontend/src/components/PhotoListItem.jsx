import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, selectedPhotoHandler, isFavourite, setModalHandler }) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton
        clickHandler={() => {
          selectedPhotoHandler(photo.id);
        }}
        isFavourite={isFavourite(photo.id)}
      />
      <div onClick={() => setModalHandler(photo.id)}>
        <img src={photo.urls.regular} alt="new image" className="photo-list__image" />
      </div>
      <div className="photo-list__user-details">
        <div>
          <img src={photo.user.profile} alt="profile image" className="photo-list__user-profile" />
        </div>
        <div className="photo-list__user-info">
          <span>{photo.user.name}</span>
          <p className="photo-list__user-location">
            {photo.location.city},{photo.location.country}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
