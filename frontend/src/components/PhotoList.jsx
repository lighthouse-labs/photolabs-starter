import React from "react";
import { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const toggleLike = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      // If the photo is already liked, remove it from likedPhotos
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      // If the photo is not liked, add it to likedPhotos
      setLikedPhotos([...likedPhotos, photoId]);
    }
    console.log("Liked Photos:", likedPhotos);
  };
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
          isLiked={likedPhotos.includes(photo.id)}
          toggleLike={() => toggleLike(photo.id)}
        />
      ))}
    </ul>
  );
};


export default PhotoList;
