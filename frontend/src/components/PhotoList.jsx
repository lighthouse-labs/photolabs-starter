import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from 'mocks/photos';
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, favoritedPhotos, setFavoritedPhotos }) => {
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
    favoritedPhotos={favoritedPhotos}
    setFavoritedPhotos={setFavoritedPhotos}
  />
))}
    </ul>
  );
};

export default PhotoList; 
