import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, favoritedPhotoIds, topicSelect,toggleFavoritesView }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topics={topics}
        topicSelect={topicSelect}/>
      <FavBadge 
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavoritesView={toggleFavoritesView}/>
    </div>
  )
}

export default TopNavigation;