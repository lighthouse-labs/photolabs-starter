import React from "react";
import PhotoListItem from "./PhotoListItem";
import TopicList from "./TopicList";
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
        />
      ))}
    </ul>
  );
};


export default PhotoList;
