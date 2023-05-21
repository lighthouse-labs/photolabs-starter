import React, { useState, useReducer } from "react";
import PhotoListItem from "../components/PhotoListItem";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const addFavouritePhoto = (id) => {
    const filteredPhoto = props.mockPhotos.filter((photo) => photo.id === id);
    setFavouritePhotos((favouritePhotos) => [
      ...favouritePhotos,
      filteredPhoto,
    ]);
  };

  return (
    <div className="home-route">
      <TopNavigationBar favouritePhotos={favouritePhotos} />
      <PhotoList
        mockPhotos={props.mockPhotos}
        favouritePhotos={favouritePhotos}
        addFavouritePhoto={addFavouritePhoto}
        openModal={props.openModal}
        showProfile={props.showProfile}
        imageContainerClassName={props.imageContainerClassName}
        imageClassName={props.imageClassName}
      />
    </div>
  );
};

export default HomeRoute;
