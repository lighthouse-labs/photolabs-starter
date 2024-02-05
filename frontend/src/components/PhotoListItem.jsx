import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, favorite, toggleFavorite, updateDisplayModal, similarPhotoes }) => {


  const { urls: { full, regular }, user, location: { city, country }, id } = photo;
  const { name, profile } = user;
  

  const handleClick = () => {
    updateDisplayModal(photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton favorite={favorite} toggleFavorite={toggleFavorite} id={id} />
      {photo.modalState ? (
        <>
          <img onClick={() => updateDisplayModal(photo)} className="photo-details-modal__image" src={full} alt="Image" />
          <div className='photo-details-modal__photographer-details'>
            <img className="photo-details-modal__photographer-profile" src={profile} alt="Profile Image" />
            <div className="photo-details-modal__photographer-info ">{name}
              <span className="photo-details-modal__photographer-location">{city}, {country}</span>
            </div>

            <div><img src={similarPhotoes} className="photo-details-modal__images" /></div>
          </div>
        </>
      ) : (
        <img onClick={handleClick} className="photo-list__image" src={full} alt="Image" />
      )}
    </div>
  );
}

export default PhotoListItem;
