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
          imageSource={photo.urls.regular}
          username={photo.user.username}
          location={photo.location}
          profile={photo.user.profile}
          isLiked={props.isLiked(photo.id)}
          toggleLike={() => props.toggleLike(photo.id)}
          alert={props.alert}
          setAlert={props.setAlert}
          setModalVisible={props.setModalVisible}
          onClick={() => props.handlePhotoClick(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
