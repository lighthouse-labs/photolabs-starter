import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
        <TopicList topics={props.topics} fetchPhotosByTopic={props.fetchPhotosByTopic} />
      </div>
      <FavBadge displayAlert={props.likedPhotos.length > 0} selected={props.likedPhotos.length > 0} />
    </div>
  );
};

export default TopNavigationBar;
