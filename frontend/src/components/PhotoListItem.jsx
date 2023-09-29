import React, {useState} from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ data, favoritedPhotoIds, toggleFavorite, openModal, isModalVisible}) => {
  const { user, location, urls, id} = data;
  console.log("photolistitem fav photoid", favoritedPhotoIds);
  

  return (
    <div className="photo-list__item">
      <PhotoFavButton displayAlert={false} favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={toggleFavorite} photoId={id}/>
      <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-image" onClick={openModal && (() => openModal(data, favoritedPhotoIds, toggleFavorite, isModalVisible))} />
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
