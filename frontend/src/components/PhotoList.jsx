import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
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
    </ul>
  );
};

export default PhotoList;
//{ismodalopen && <div>isModalOpen</div> }
/* {isModalOpen ? <div>isModalOpen</div> : <div>notOpen</div> } */
