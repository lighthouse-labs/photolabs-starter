import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigationBar = ({ topics, favorite, photoByTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo"><i>Photo</i><b>Labs</b>📸</span>
      <div> <TopicList topics={topics} photoByTopic={photoByTopic} /> </div>
      <div> <FavBadge favorite={favorite} /> </div>
    </div>
  )
}

export default TopNavigationBar; 