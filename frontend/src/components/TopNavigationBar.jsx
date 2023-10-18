import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {

  const {favList} = props;
  const isFavPhotoExist = favList[0]

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge className="fav-badge__count"
        favList={props.favList}
        isFavPhotoExist={isFavPhotoExist}
      />
    </div>
  )
}

export default TopNavigationBar;