import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge className="fav-badge__count"
        isFavPhotoExist={props.favList.length > 0}
        favList={props.favList}
      />
    </div>
  )
}

export default TopNavigationBar;