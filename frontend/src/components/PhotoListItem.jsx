import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
// import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const PhotoListItem = ({ photo, favorite, toggleFavorite, updateDisplayModal, similarPhotoes }) => {

  const { urls: { full, regular }, user, location: { city, country }, id } = photo;
  const { name, profile } = user;

  const handleClick = () => {
    updateDisplayModal(photo);
  };

  return (
    <div className="photo-list__item">

      <PhotoFavButton favorite={favorite} toggleFavorite={toggleFavorite} id={id} />

        <div>
          <img onClick={() => handleClick(photo)} className="photo-list__image" src={regular} alt="Image" />
          <div className='photo-list__user-details'>
            <img className="photo-list__user-profile" src={profile} alt="Profile Image" />
            <div>
              <div className="photo-list__user-info">{name}
                <div className="photo-list__user-info photo-list__user-location">{city}, {country}</div>
              </div>
            </div>
            <div><img src={similarPhotoes} className="photo-details-modal__images" /></div>
          </div>
        </div>
    </div>
  );
};

export default PhotoListItem;
