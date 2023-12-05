import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({notifications, topics}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='topicList__navbar'>
      <TopicList topics={topics}/>
      </div>
      <FavBadge notifications={notifications}/>
    </div>
  )
}

export default TopNavigation;