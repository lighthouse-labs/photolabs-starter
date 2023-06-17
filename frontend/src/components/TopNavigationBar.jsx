import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
const TopNavigation = (props) => {
  const refreshPage = () => {
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={refreshPage}>
        PhotoLabs
      </span>
    
      
    </div>
  );
};

export default TopNavigation;
