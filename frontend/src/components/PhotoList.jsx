import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoArray = props.photos.map((
    { id,
      location: { city, country },
      urls: { full, regular },
      user: { id: userId, username, name, profile },
      similar_photos
    }) => {
    return (
      <PhotoListItem
        key={id}
        id={id}
        city={city}
        country={country}
        full={full}
        name={name}
        regular={regular}
        profile={profile}
        isPhotoFavorited={props.isPhotoFavorited}
        setFavorites={props.setFavorites}
        removeFromFavorites={props.removeFromFavorites}
        toggleFavorite={props.toggleFavorite}
        updateAlert={props.updateAlert}
        displayAlert={props.displayAlert}
        onClick={props.onClick}
        similar_photos={similar_photos}
        darkMode={props.darkMode}
      />
    );
  });
  return (
    <ul className="photo-list">
      {photoArray}
    </ul>
  );
};

export default PhotoList;
