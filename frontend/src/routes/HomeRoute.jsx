import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const { topics, photos, onPhotoClick } = props;
  const [favPhotos, setFavPhotos] = useState([]);

  // Add a photo to the favorites list
  const addFavPhoto = (photoId) => {
    if (!favPhotos.includes(photoId)) {
      // Use the functional form of setFavPhotos to update the state
      setFavPhotos((prevFavPhotos) => [...prevFavPhotos, photoId]);
    }
  };

  // Remove a photo from the favorites list
  const removeFavPhoto = (photoId) => {
    if (favPhotos.includes(photoId)) {
      // Use the functional form of setFavPhotos to update the state
      setFavPhotos((prevFavPhotos) =>
        prevFavPhotos.filter((id) => id !== photoId)
      );
    }
  };

  console.log("has favorited photo", favPhotos);

  return (
    <div className="home-route">
      {/* Render the top navigation bar with topics and the count of favorite photos */}
      <TopNavigationBar topics={topics} hasFavoritedPhoto={favPhotos.length} />

      {/* Render the photo list component */}
      <PhotoList
        photos={photos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
