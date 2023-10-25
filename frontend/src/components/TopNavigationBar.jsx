import React, { useState, useEffect } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topicData, state, handleTopicSelect }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList topicData={topicData} handleTopicSelect={handleTopicSelect} />
      < FavBadge selected={state.favPhotos.length > 0} displayAlert={state.favPhotos.length > 0} />
    </div>
  )
}

export default TopNavigation;