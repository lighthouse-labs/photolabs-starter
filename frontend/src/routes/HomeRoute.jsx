import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {


  return (
    <div className="home-route">
      <TopNavigation
        isFavPhotoExist={props.isFavPhotoExist}
        topics={props.topics}
        handleImageFetch={props.handleImageFetch}
        onSearch={props.handleSearch}
      />
      <PhotoList
        photos={props.photos}
        toggleFavourite={props.toggleFavourite}
        onPhotoClick={props.onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
//const {photos, toggleFavourite, onPhotoClick} = props
