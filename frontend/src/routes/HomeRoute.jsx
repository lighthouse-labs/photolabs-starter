import React, { useState, useReducer } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoListItem from "../components/PhotoListItem";

import mockPhotos from "../mocks/photos";

const HomeRoute = (props) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const addFavouritePhoto = (id) => {
    const filteredPhoto = mockPhotos.filter((photo) => photo.id === id);
    setFavouritePhotos((favouritePhotos) => [
      ...favouritePhotos,
      filteredPhoto,
    ]);
  };

  return (
    <div className="home-route">
      {/* <TopNavigationBar countFavourite={props.countFavourite} />*/}
      <PhotoList
        mockPhotos={mockPhotos}
        favouritePhotos={favouritePhotos}
        addFavouritePhoto={addFavouritePhoto}
      />
    </div>
  );
};

export default HomeRoute;
