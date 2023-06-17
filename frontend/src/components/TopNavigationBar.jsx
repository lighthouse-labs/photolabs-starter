import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ hasFavoritedPhoto, topics, getPhotosByTopic, photos }) => {
  const refreshPageBar = () => {
    window.location.reload();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={refreshPage}>
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={hasFavoritedPhoto} />
    </div>
  );
};

export default TopNavigationBar;
