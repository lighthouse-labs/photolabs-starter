import React from 'react';
import { useState } from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {

  const [favList, setFavList] = useState([]);

  const favPhotoNotification = () => {
    if (favList.length > 0) {
      isFavPhotoExist = true
    }
    return isFavPhotoExist;
  }

  return (
    <div className="home-route">
      <TopNavigationBar 
        favBadgeNotification={favPhotoNotification}
        favList={favList}
      />
      <PhotoList 
        favList={favList}
        setFavList={setFavList}
      />
    </div>
  );
};

export default HomeRoute;
