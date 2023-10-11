import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  
  const renderPhotoListItems = () => {
    return props.photoData.map((photo) => {
      const { id, location, urls: { regular: regular, full: full }, user: { name, profile }, similar_photos: similar_photos} = photo;

      return (
        <li key={id} >
          <PhotoListItem
            id={id}
            regular={regular} 
            name={name} 
            profile={profile} 
            location={location}
            favourites={props.favourites}
            toggleFavourite={props.toggleFavourite}
            setShowModal={props.setShowModal}
            setSelectedImage={props.setSelectedImage}
            full={full}
            similar_photos={similar_photos}
            darkMode={props.darkMode}
          />
        </li>
      );
    });
  }

  return (
    <ul className="photo-list">
      {renderPhotoListItems()}
    </ul>
  );
};

export default PhotoList;
