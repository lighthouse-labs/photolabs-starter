import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__right'>
        <TopicList topicListData={props.topicListData} />
        <FavBadge />     
      </div>   
    </div>
  )
}

export default TopNavigation;