import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const { topics, photos } = props;

  const [favPhotos, setFavPhotos] = useState([]);

  // Add a photo to the list of favorite photos
  const addFavPhoto = (photoId) => {
    if (!favPhotos.includes(photoId)) {
      setFavPhotos([...favPhotos, photoId]);
    }
  };

  // Remove a photo from the list of favorite photos
  const removeFavPhoto = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoId));
    }
  };

  console.log("has favorited photo", favPhotos);

  return (
    <div className="home-route">
      {/* Render the top navigation bar */}
      <TopNavigationBar topics={topics} hasFavoritedPhoto={favPhotos.length} />
      {/* Render the list of photos */}
      <PhotoList
        photos={photos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
      />
    </div>
  );
};

export default HomeRoute;
