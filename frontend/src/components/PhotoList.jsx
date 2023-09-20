import React from "react";
import { useState } from "react";
const FavouriteContext = React.createContext();
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {

  //console.log("photos", photos)
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          addFavourite={props.toggleFavourite}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
          onPhotoClick={props.onPhotoClick} // Open the modal when a photo is clicked


        />
      ))}

      {/* {isModalOpen ? <div>isModalOpen</div> : <div>notOpen</div> } */}
    </ul>

  );
};

export default PhotoList;
//{ismodalopen && <div>isModalOpen</div> }
