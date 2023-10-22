import React, { useState, useEffect } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//make so when click photofavbutton the topnav favbadge is updated to have a notification
const TopNavigation = ({ topicData, state }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList topicData={topicData} />
      < FavBadge selected={state.favPhotos} />
    </div>
  )
}

export default TopNavigation;