import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const isFavPhotoExist = props.favouritePhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        selectTopic={props.selectTopic}
      />
      <FavBadge
        favouritePhotos={props.favouritePhotos}
        isFavPhotoExist={isFavPhotoExist}
        isFavourite="true"
      />
    </div>
  );
};

export default TopNavigation;
