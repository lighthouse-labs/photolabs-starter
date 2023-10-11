import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

function handleClick() {
  if (props.setShowModal) {
    props.setShowModal(prev => !prev);
  }

  const imageDetails = {
    id: props.id,
    regular: props.regular,
    full: props.full,
    profile: props.profile,
    name: props.name,
    location: { 
      city: props.location.city,
      country: props.location.country
    },
    favourites: props.favourites,
    toggleFavourite: props.toggleFavourite,
    similar_photos: props.similar_photos
  };
  props.setSelectedImage(imageDetails);
}

  return (
    <div className={props.darkMode ?"photo-list__item-dark-mode" : "photo-list__item"}>
      <PhotoFavButton favourites={props.favourites} toggleFavourite={props.toggleFavourite} id={props.id} darkMode={props.darkMode}/>
      <img className="photo-list__image" src={props.regular} alt="User image" onClick={handleClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="Profile" />
        <div className="photo-list__user-info">{props.name}
          <div 
          className={props.darkMode ?"photo-list__user-location-dark-mode" : "photo-list__user-location"}>{props.location.city}, {props.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

