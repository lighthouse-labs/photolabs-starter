import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoData, favPhotos, setFavPhotos, openModal, setSelectedPhoto }) => {
  const { id, location, urls, user } = photoData;
  const handlePhotoClick = () => {
    openModal();
    setSelectedPhoto(photoData);
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton id={id} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <img className="photo-list__image" src={urls.regular} alt="Image photo" onClick={handlePhotoClick} />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="Profile image"/>
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <span className="photo-list__user-location">{location.city},{location.country}</span>
        </div>
      </section>
      
    </li>
  );
};

export default PhotoListItem;
