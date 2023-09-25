import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({onFavsClick, onSelect, topics, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onSelect={onSelect}/>
      <FavBadge onFavsClick={onFavsClick} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  );
};

export default TopNavigation;
