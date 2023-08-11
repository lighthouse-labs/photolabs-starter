import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ data }) => {
  const { user, location, urls } = data;

  return (
    <div className="photo-list-item">
      <PhotoFavButton displayAlert={true} />
      <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-image" />
      <div className="photo-details">
        <img src={user.profile} alt={`Profile of ${user.username}`} className="profile-image" />
        <div className="text-info">
          <p className="username">{user.username}</p>
          <p className="location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
