import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  console.log("PhotoList Props: ", props);

  const renderPhotoListItems = () => {
    return photos.map((photo) => {
      const { id, location, urls: { regular: imageSource }, user: { name, profile }} = photo;

      return (
        <li key={id}>
          <PhotoListItem 
            imageSource={imageSource} 
            name={name} 
            profile={profile} 
            location={location}
            setSelectedCount={props.setSelectedCount}
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
