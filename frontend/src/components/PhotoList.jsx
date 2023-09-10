import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from 'mocks/photos';
import "../styles/PhotoList.scss";


const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
    {photos.map(({ id, user, urls, location }) => (
  <PhotoListItem
    key={id}
    username={user.username}
    imageSource={urls.regular}
    id={id}
    location={location}
    profile={user.profile}
  />
))}
    </ul>
  );
};

export default PhotoList; 
