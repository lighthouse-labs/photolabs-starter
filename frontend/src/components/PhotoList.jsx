import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.urls.full}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
          id={photo.id}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
