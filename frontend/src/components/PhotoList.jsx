import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  // console.log("PhotoList Props: ", props);

  const renderPhotoListItems = () => {
    return photos.map((photo) => {
      const { id, location, urls: { regular: imageSource }, user: { name, profile }} = photo;

      return (
        <li key={id} >
          <PhotoListItem
            id={id}
            imageSource={imageSource} 
            name={name} 
            profile={profile} 
            location={location}
            favourites={props.favourites}
            toggleFavourite={props.toggleFavourite}
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
