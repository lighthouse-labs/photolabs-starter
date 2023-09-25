import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ topics, favourites, getTopicId,selectedTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getTopicId={getTopicId} selectedTopic={selectedTopic} />
      <FavBadge favourites={favourites} />
    </div>
  );
};

export default TopNavigationBar;
