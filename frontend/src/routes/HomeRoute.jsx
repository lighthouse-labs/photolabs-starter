import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  const [favPhotos, setFavPhotos] = useState([]);

  const updateFavPhotos = (photo) => {
    setFavPhotos([...favPhotos, photo]);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} onChange={updateFavPhotos} />
    </div>
  );
};

export default HomeRoute;
