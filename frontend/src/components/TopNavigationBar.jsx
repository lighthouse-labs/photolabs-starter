import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
// import { checkFavorites } from "helpers/photolabsHelpers";

const TopNavigation = (props) => {
  const { topics, favoritePhotos, checkFavorites } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={checkFavorites()} />
    </div>
  );
};

export default TopNavigation;
