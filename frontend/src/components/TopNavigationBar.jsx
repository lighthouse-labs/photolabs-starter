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
      {/* Render the TopicList component */}
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      {/* Render the FavBadge component */}
      <FavBadge isFavPhotoExist={hasFavoritedPhoto} />
    </div>
  );
};

export default TopNavigationBar;
