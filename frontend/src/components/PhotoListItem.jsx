import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    full,
    regular,
    id,
    profile,
    name,
    city,
    country,
    setFavorites,
    removeFromFavorites,
    onClick,
    updateAlert,
    toggleFavorite,
    isPhotoFavorited,
    similar_photos,
  } = props;
  return (<div className="photo-list__item">
    <PhotoFavButton setFavorites={setFavorites} removeFromFavorites={removeFromFavorites} photoId={id} isPhotoFavorited={isPhotoFavorited} toggleFavorite={toggleFavorite} updateAlert={updateAlert}/>
    <img className="photo-list__image" src={full} id={id} onClick={()=> onClick({id, city, country, full, regular, profile, name, setFavorites, removeFromFavorites, isPhotoFavorited, similar_photos, toggleFavorite, updateAlert})} />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} />
      <div className="photo-list__user-info">
        {name}
        <div className="photo-list__user-location">{city}, {country}</div>
      </div>
    </div>
  </div>);
};

export default PhotoListItem;
