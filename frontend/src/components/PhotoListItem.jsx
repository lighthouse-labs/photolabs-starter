import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  return (
    <div
      className="photo-list__item"
      key={props.photo.id}
      onClick={props.onClick} 
    >
      <PhotoFavButton
        isLiked={props.isLiked}
        toggleLike={props.toggleLike}
        alert={props.alert}
        setAlert={props.setAlert}
        id={props.photo.id}
      />
      <div className="photo-list__image-container" key={props.photo.id}>
        <img
          src={props.imageSource}
          alt={`Photo by ${props.username}`}
          className="photo-list__image"
        />
      </div>
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <img
            src={props.profile}
            alt={`Profile of ${props.username}`}
            className="photo-list__user-profile"
          />
          <p>{props.username}</p>
        </div>
        <p className="photo-list__user-location">
          {`${props.location.city}, ${props.location.country}`}
        </p>
      </div>
    </div>
  );
};

export default PhotoListItem;
