import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ hasFavoritedPhoto, topics, getPhotosByTopic, photos }) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={hasFavoritedPhoto} />
    </div>
  );
};

export default TopNavigationBar;