import React from "react";
import { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {

  const [favList, setFavList] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar 
        isFavPhotoExist={favList.length > 0}
        favList={favList}
      />
      <PhotoList 
        favList={favList}
        setFavList={setFavList}
      />
    </div>
  )
}

export default HomeRoute;