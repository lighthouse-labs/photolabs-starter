import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          photo={photo}
          key={photo.id}
          imageSource={`${process.env.PUBLIC_URL}${photo.urls.regular}`}
          username={photo.user.username}
          location={photo.location}
          profile={`${process.env.PUBLIC_URL}${photo.user.profile}`}
          isLiked={props.isLiked(photo.id)}
          toggleLike={() => props.toggleLike(photo.id)}
          alert={props.alert}
          setAlert={props.setAlert}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

