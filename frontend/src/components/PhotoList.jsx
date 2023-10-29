import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const { similarPhotos, photoData } = props;

  let photoArray = [];

  if (similarPhotos) {
    photoArray = similarPhotos
  } else {
    photoArray = photoData
  };

  return (
    <ul className="photo-list">
      {photoArray.map((photo, index) => 
        <PhotoListItem 
          key={index}
          id={photo.id}
          imageSource={photo.urls.full}
          profile={photo.user.profile}
          username={photo.user.username}
          city={photo.location.city}
          country={photo.location.country}
          favList={props.favList}
          liked={props.liked}
          showModal={props.showModal}
          dispatch={props.dispatch}
          state={props.state}
          photoData={props.photoData}
        />
      )}
    </ul>
  );
};

export default PhotoList;
